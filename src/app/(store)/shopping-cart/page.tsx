"use client";

import { useCart } from "@/context/cart-context";
import { useEffect, useState } from "react";
import { Minus, Plus, Trash } from "lucide-react";
import { CartItemResponse, getCartItems } from "@/services/cart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { truncateText } from "@/utils/truncate";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cart() {
  const { cart, handleIncrementItem, handleRemoveItem, handleDecrementItem } =
    useCart();

  const [items, setItems] = useState<CartItemResponse[]>();
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

  const handleIncrement = (item: CartItemResponse) => {
    if (item.cart_quantity === item.quantity) {
      return;
    }
    handleIncrementItem(item.id);
  };

  return (
    <div className="mx-auto h-full max-w-7xl rounded-lg bg-white p-10 shadow-lg lg:my-12 lg:h-full">
      <h1 className="mb-6 text-center text-3xl font-semibold md:text-left">
        My Cart
      </h1>
      <div className="block items-start gap-8 lg:flex lg:justify-between">
        <div className="max-h-[450px] min-h-[80px] overflow-auto rounded-md border p-1 lg:max-h-[530px] lg:w-[700px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items?.map((item) => (
                <TableRow key={item.id} className="hover:bg-white">
                  <TableCell className="font-medium transition-none">
                    <Link href={`/catalogue/${item.id}`}>
                      <img
                        src={item.image_url}
                        className="size-16 select-none rounded-lg object-contain duration-300 hover:scale-105"
                        alt={item.title}
                      />
                    </Link>
                  </TableCell>
                  <TableCell className="text-left">
                    {truncateText(item.title, 25)}
                  </TableCell>
                  <TableCell>{item.cart_total_price}€</TableCell>
                  <TableCell className="flex select-none justify-center pt-5">
                    <div className="flex h-10 max-w-[160px] gap-2 rounded-lg border bg-white">
                      <Minus
                        className="mt-1.5 cursor-pointer pl-2"
                        onClick={() =>
                          handleDecrement(item.id, item.cart_quantity)
                        }
                      />
                      <span className="flex w-8 select-none items-center justify-center text-lg">
                        {item.cart_quantity}
                      </span>
                      <Plus
                        className="mt-1.5 cursor-pointer pr-2"
                        onClick={() => handleIncrement(item)}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Trash
                      size={20}
                      className="cursor-pointer text-red-500"
                      onClick={() => handleRemoveItem(item.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {cart.cart_items.length === 0 && (
                <TableRow className="hover:bg-white">
                  <TableCell
                    colSpan={5}
                    className="py-[9.5rem] text-center text-2xl text-gray-400"
                  >
                    Your cart is empty
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="mt-8 grow space-y-4 rounded-lg bg-gray-100 p-5 shadow-md lg:mt-0">
          <h2 className="text-2xl font-semibold">Order summary</h2>

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{cart.total_cart_price}€</span>
          </div>

          <div className="flex justify-between">
            <span>PVN (21%)</span>
            <span>{(cart.total_cart_price * 0.21).toFixed(2)}€</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery (Latvia)</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-gray-500">None</span>
          </div>

          <div className="my-4 w-full border-t border-dashed border-gray-500"></div>

          <div className="flex justify-between text-xl font-semibold text-gray-800">
            <span>Total</span>
            <span>
              {(
                Number(cart.total_cart_price) +
                Number(cart.total_cart_price * 0.21)
              ).toFixed(2)}
              €
            </span>
          </div>

          <Button className="mt-4 w-full rounded-lg">Checkout</Button>
          <div className="text-center">
            Need a help?{" "}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=ZkaHeck1KFY"
              className="underline"
            >
              Check the tutorial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
