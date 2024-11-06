"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useCart } from "@/context/cart-context";

interface CartButtonProps {
  id: string;
  price: number | string;
  currency: string;
  priceSize?: "small" | "large";
  maxQuantity: number;
}

export default function CartButton({
  id,
  price,
  currency,
  priceSize,
  maxQuantity,
}: CartButtonProps) {
  const [amount, setAmount] = useState(1);
  const [totalWithDiscount, setTotalWithDiscount] = useState(price);
  const [isAdding, setIsAdding] = useState(false);
  const {
    cart,
    handleIncrementItem,
    handleDecrementItem,
    handleRemoveItem,
    handleUpdateItemQuantity,
  } = useCart();

  const cartItem = cart.cart_items?.find((item) => item.item_id === id);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (cartItem) {
      setAmount(cartItem.quantity);
      setIsAdding(true);
    } else {
      setAmount(1);
      setIsAdding(false);
    }
  }, [cartItem]);

  price = Number(price);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleIncrement = () => {
    if (amount < maxQuantity) {
      setAmount((prevAmount) => prevAmount + 1);
      handleIncrementItem(id);
    }
  };

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1);
      handleDecrementItem(id);
    } else {
      setIsAdding(false);
      handleRemoveItem(id);
    }
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = Math.floor(Number(value));

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (value === "" || numericValue <= 0) {
      setAmount(1);
      return;
    }

    if (numericValue > maxQuantity) {
      setAmount(maxQuantity);
      timeoutRef.current = setTimeout(() => {
        handleUpdateItemQuantity(id, maxQuantity);
      }, 300);
    } else {
      setAmount(numericValue);
      timeoutRef.current = setTimeout(() => {
        handleUpdateItemQuantity(id, numericValue);
      }, 300);
    }
  };

  useEffect(() => {
    const newPrice = (amount * price).toFixed(2);
    setTotalWithDiscount(newPrice);
  }, [amount, price]);

  const handleFocus = () => {
    inputRef.current?.select();
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    handleIncrementItem(id);
  };

  return (
    <div>
      <div className="flex gap-2.5">
        <div
          className={twMerge(
            "font-semibold text-orange-600",
            priceSize === "large" ? "text-4xl" : "text-2xl",
          )}
        >
          {totalWithDiscount}
          {currency}
        </div>
      </div>
      <div className="mt-3 flex select-none items-center justify-center gap-2.5">
        {isAdding ? (
          <div className="flex h-10 gap-2 rounded-lg border bg-white">
            <Minus
              className="mt-1.5 cursor-pointer pl-2"
              onClick={handleDecrement}
            />
            <input
              type="number"
              ref={inputRef}
              className="w-[5.5rem] text-center text-2xl"
              value={amount}
              onChange={handleAmountChange}
              onFocus={handleFocus}
              onBlur={() => {
                if (amount <= 0) {
                  setAmount(1);
                  handleUpdateItemQuantity(id, 1);
                }
              }}
              min="1"
              max={maxQuantity}
            />
            <Plus
              className="mt-1.5 cursor-pointer pr-2"
              onClick={handleIncrement}
            />
          </div>
        ) : (
          <Button className="px-10 py-5" onClick={handleAddToCart}>
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}
