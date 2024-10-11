"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";

interface CartButtonProps {
  quantity: number | string;
  price: number | string;
  currency: string;
}

export default function CartButton({
  quantity,
  price,
  currency,
}: CartButtonProps) {
  const [amount, setAmount] = useState(1);
  const [total, setTotal] = useState(price);
  const [totalWithDiscount, setTotalWithDiscount] = useState(price);

  quantity = Number(quantity);
  price = Number(price);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleIncrement = () => {
    if (quantity === amount) return;
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setAmount(1);
      return;
    }

    const numericValue = Number(value);
    if (numericValue >= quantity) {
      setAmount(quantity);
    } else {
      setAmount(numericValue);
    }
  };

  useEffect(() => {
    const newPrice = (amount * price).toFixed(2);
    setTotalWithDiscount(newPrice);
    setTotal(newPrice);
  }, [amount, price]);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current?.select();
    }
  };

  return (
    <div>
      <div className="flex gap-2.5 pt-5">
        <div className="text-4xl font-semibold text-orange-600">
          {totalWithDiscount}
          {currency}
        </div>
        <div className="text-muted-foreground line-through">
          {total}
          {currency}
        </div>
      </div>
      <div className="mt-3 flex select-none items-center gap-2.5">
        <div className="flex gap-2 rounded-lg border p-1">
          <Minus className="cursor-pointer pt-1.5" onClick={handleDecrement} />
          <input
            type="number"
            ref={inputRef}
            className="w-10 text-center text-2xl"
            value={amount}
            onChange={handleAmountChange}
            onFocus={handleFocus}
            onBlur={() => {
              if (amount === 0) setAmount(1);
            }}
          />
          <Plus className="cursor-pointer pt-1.5" onClick={handleIncrement} />
        </div>
        <Button className="px-10 py-5">Add to cart</Button>
      </div>
    </div>
  );
}
