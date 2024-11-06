"use server";
import backend from "@/lib/client-config";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { getCart } from "@/services/cart";

export interface UserCredentials {
  email: string;
  password: string;
}

export interface TokenResponse {
  access_token: string;
  card_id: string;
}

export interface TokenPayload {
  exp?: number;
}

export interface UserData {
  email: string;
  role: string;
  full_name: string;
  is_active: boolean;
  updated_at: string;
  created_at: string;
}

export async function login(credentials: UserCredentials) {
  const { access_token }: TokenResponse = await backend.post("/auth/login", {
    json: { ...credentials },
  });
  const fallbackExpiration = () => Date.now() + 24 * 60 * 60 * 1000;

  const accessTokenPayload: TokenPayload = jwtDecode(access_token);

  const cookieSecuritySettings = {
    sameSite: "strict" as const,
    httpOnly: true,
    secure: true,
  };

  if (!cookies().get("cardId")?.value) {
    await getCart();
  }

  cookies().set({
    name: "accessToken",
    value: access_token,
    expires: new Date((accessTokenPayload.exp || fallbackExpiration()) * 1000),
    ...cookieSecuritySettings,
  });
}

export async function getProfile() {
  return (await backend.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${cookies().get("accessToken")?.value}`,
    },
  })) as UserData;
}

export async function logout() {
  cookies().delete("accessToken");
}

export async function register(credentials: UserCredentials) {
  await backend.post("/auth/register/customer", { json: credentials });
}
