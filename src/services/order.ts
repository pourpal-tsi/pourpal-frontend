"use server";
import backend from "@/lib/client-config";
import { DeliveryInfo } from "@/hooks/use-checkout-form";
import { CartItem } from "@/services/cart";
import { cookies } from "next/headers";

function getBearerToken(): string {
  const accessToken = cookies().get("accessToken")?.value ?? "";
  const cartId = cookies().get("cartId")?.value ?? "";
  return `Bearer ${accessToken} ${cartId}`;
}

export interface Order {
  order_id: string;
  order_number: string;
  user_id: string;
  status: string;
  delivery_information: DeliveryInfo;
  order_items: CartItem[];
  total_price: {
    amount: string;
    currency: string;
  };
  created_at: string;
}

export interface OrderResponse {
  orders: Order[];
  paging: {
    count: number;
    page_size: number;
    page_number: number;
    total_count: number;
    total_pages: number;
    first_page: boolean;
    last_page: boolean;
  };
}

export async function sendOrder(data: DeliveryInfo) {
  try {
    await backend.post("/orders", {
      json: data,
      headers: {
        Authorization: getBearerToken(),
      },
    });
    cookies().delete("cartId");
  } catch {
    throw new Error("Error sending order");
  }
}

export async function getOrderHistory() {
  try {
    const response: OrderResponse = await backend.get("/auth/profile/orders", {
      headers: {
        Authorization: getBearerToken(),
      },
    });
    return response;
  } catch {
    return undefined;
  }
}
