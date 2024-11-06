"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBasket, Trash2 } from "lucide-react";
import { useCart } from "@/context/cart-context";

interface AddToCartProps {
  id: string;
}

export function AddToCart({ id }: AddToCartProps) {
  const { cart, handleIncrementItem, handleRemoveItem } = useCart();

  const cartItem = cart.cart_items?.find((item) => item.item_id === id);

  const handleAdd = async () => {
    try {
      await handleIncrementItem(id);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const handleRemove = async () => {
    try {
      await handleRemoveItem(id);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <>
      {cartItem ? (
        <Button onClick={handleRemove} variant="destructive">
          <Trash2 />
        </Button>
      ) : (
        <Button onClick={handleAdd}>
          <ShoppingBasket />
        </Button>
      )}
    </>
  );
}
