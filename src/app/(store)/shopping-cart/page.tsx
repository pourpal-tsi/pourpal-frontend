"use client";

import { useCart } from "@/context/cart-context";
import { Item } from "@/services/items";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { getCartItems } from "@/services/cart";

export default function Cart() {
  const { cart, handleIncrementItem, handleRemoveItem, handleDecrementItem } =
    useCart();

  const [items, setItems] = useState<Item[]>();
  useEffect(() => {
    if (cart.cart_items) {
      getCartItems(cart.cart_items).then((items) => setItems(items));
    }
  }, [cart]);

  const handleDecrement = (itemId: string, quantity: number) => {
    if (quantity <= 1) {
      handleRemoveItem(itemId);
    } else {
      handleDecrementItem(itemId);
    }
  };

  return (
    <div className="mx-auto mt-20 max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold">Beta Cart</h1>
      <ul className="space-y-4">
        {items?.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-md"
          >
            <img
              className="size-16 rounded-lg object-contain"
              src={item.image_url}
              alt={item.title}
            />
            <div className="grow">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              <p className="text-sm font-medium text-gray-700">
                Price: {(item.quantity * Number(item.price)).toFixed(2)}€
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => handleIncrementItem(item.id)}
                className="rounded-lg px-3 py-1"
              >
                +
              </Button>
              <Button
                onClick={() => handleDecrement(item.id, item.quantity)}
                className="rounded-lg px-3 py-1"
              >
                -
              </Button>
              <Trash
                onClick={() => handleRemoveItem(item.id)}
                className="cursor-pointer text-red-500"
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t pt-4">
        <h3 className="text-xl font-bold">
          Total: {Number(cart.total_cart_price)?.toFixed(2) || "0.00"}€
        </h3>
      </div>
    </div>
  );
}
