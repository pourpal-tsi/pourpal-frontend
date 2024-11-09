"use server";
import backend from "@/lib/client-config";
import { cookies } from "next/headers";
import { getItem, Item } from "@/services/items";

export interface CartItem {
  item_id: string;
  quantity: number;
  unit_price: {
    amount: string;
    currency: string;
  };
  total_price: {
    amount: string;
    currency: string;
  };
}

export interface CartContents {
  new_cart: boolean;
  cart_id: string;
  cart_items: CartItem[];
  total_cart_price: number;
}

export interface CartItemResponse extends Item {
  cart_quantity: number;
  cart_total_price: number | string;
}

function getBearerToken(cartId: string): string {
  const accessToken = cookies().get("accessToken")?.value ?? "";
  return `Bearer ${accessToken} ${cartId}`;
}

async function ensureCart(): Promise<string> {
  const cartId = cookies().get("cartId")?.value;
  if (cartId) {
    return cartId;
  }

  return await getCartId();
}

export async function getCartId(): Promise<string> {
  const accessToken = cookies().get("accessToken")?.value ?? "";
  const response: CartContents = await backend.get("/cart", {
    headers: {
      Authorization: accessToken,
    },
  });

  cookies().set({
    name: "cartId",
    value: response.cart_id,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  return response.cart_id;
}

export async function getCart(): Promise<CartContents> {
  const cartId = await ensureCart();
  const bearerToken = getBearerToken(cartId);
  return await backend.get("/cart", {
    headers: {
      Authorization: bearerToken,
    },
  });
}

export async function incrementItem(itemId: string): Promise<CartContents> {
  const cartId = await ensureCart();
  const bearerToken = getBearerToken(cartId);

  return await backend.post(`/cart/${itemId}/increment`, {
    headers: {
      Authorization: bearerToken,
    },
  });
}

export async function decrementItem(itemId: string): Promise<CartContents> {
  const cartId = await ensureCart();
  const bearerToken = getBearerToken(cartId);

  return await backend.post(`/cart/${itemId}/decrement`, {
    headers: {
      Authorization: bearerToken,
    },
  });
}

export async function updateItemQuantity(
  itemId: string,
  quantity: number,
): Promise<CartContents> {
  const cartId = await ensureCart();
  const bearerToken = getBearerToken(cartId);

  return await backend.put(`/cart/${itemId}?quantity=${quantity}`, {
    headers: {
      Authorization: bearerToken,
    },
  });
}

export async function removeItem(itemId: string): Promise<CartContents> {
  const cartId = await ensureCart();
  const bearerToken = getBearerToken(cartId);

  return await backend.delete(`/cart/${itemId}`, {
    headers: {
      Authorization: bearerToken,
    },
  });
}

export async function getCartItems(cart_items: CartItem[]) {
  return await Promise.all(
    cart_items.map(async (cartItem) => {
      const itemData = await getItem(cartItem.item_id);
      return {
        ...itemData,
        cart_quantity: cartItem.quantity,
        cart_total_price: cartItem.total_price.amount,
      };
    }),
  );
}
