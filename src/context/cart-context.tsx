import React, { createContext, useContext, useState, useEffect } from "react";
import {
  CartContents,
  decrementItem,
  getCart,
  incrementItem,
  removeItem,
  updateItemQuantity,
} from "@/services/cart";

interface CartContextType {
  cart: CartContents;
  fetchCart: () => Promise<void>;
  isCartEmpty: () => boolean;
  handleIncrementItem: (itemId: string) => Promise<void>;
  handleDecrementItem: (itemId: string) => Promise<void>;
  handleUpdateItemQuantity: (itemId: string, quantity: number) => Promise<void>;
  handleRemoveItem: (itemId: string) => Promise<void>;
}

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContext = createContext<CartContextType>({
  cart: {
    new_cart: false,
    cart_id: "",
    cart_items: [],
    total_cart_price: 0,
  },
  fetchCart: async () => {},
  isCartEmpty: () => false,
  handleIncrementItem: async () => {},
  handleDecrementItem: async () => {},
  handleUpdateItemQuantity: async () => {},
  handleRemoveItem: async () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartContents>({
    new_cart: false,
    cart_id: "",
    cart_items: [],
    total_cart_price: 0,
  });

  const cartReset: CartContents = {
    new_cart: false,
    cart_id: "",
    cart_items: [],
    total_cart_price: 0,
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const isCartEmpty = (): boolean => {
    return cart.cart_items.length === 0;
  };

  const fetchCart = async () => {
    try {
      const cart: CartContents = await getCart();
      setCart(cart);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const handleIncrementItem = async (id: string) => {
    try {
      const cart: CartContents = await incrementItem(id);
      setCart(cart);
    } catch (error) {
      console.error("Error incrementing item:", error);
      setCart(cartReset);
    }
  };

  const handleDecrementItem = async (id: string) => {
    try {
      const cart: CartContents = await decrementItem(id);
      setCart(cart);
    } catch (error) {
      console.error("Error decrementing item:", error);
      setCart(cartReset);
    }
  };

  const handleUpdateItemQuantity = async (id: string, quantity: number) => {
    try {
      const cart: CartContents = await updateItemQuantity(id, quantity);
      setCart(cart);
    } catch (error) {
      console.error("Error updating item quantity:", error);
      setCart(cartReset);
    }
  };

  const handleRemoveItem = async (id: string) => {
    try {
      const cart: CartContents = await removeItem(id);
      setCart(cart);
    } catch (error) {
      console.error("Error removing item:", error);
      setCart(cartReset);
    }
  };

  const value = {
    cart,
    isCartEmpty,
    fetchCart,
    handleIncrementItem,
    handleDecrementItem,
    handleUpdateItemQuantity,
    handleRemoveItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
