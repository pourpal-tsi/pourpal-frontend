"use client";

import { ReactNode } from "react";
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { UserProvider } from "@/context/user-context";
import { CartProvider } from "@/context/cart-context";

const client = new QueryClient({
  mutationCache: new MutationCache({
    onSuccess: async (_data, _variables, _context, mutation) => {
      await client.invalidateQueries({
        queryKey: mutation.options.mutationKey,
      });
    },
  }),
});

export default function RootProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={client}>
      <CartProvider>
        <UserProvider>{children}</UserProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}
