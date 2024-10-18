"use client";

import { ReactNode } from "react";
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { UserProvider } from "@/hooks/use-user";

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
      <UserProvider>
        <>{children}</>
      </UserProvider>
    </QueryClientProvider>
  );
}
