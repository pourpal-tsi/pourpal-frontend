"use client";

import { ReactNode } from "react";
import {
  QueryClientProvider,
  QueryClient,
  MutationCache,
} from "@tanstack/react-query";

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
      <>{children}</>
    </QueryClientProvider>
  );
}
