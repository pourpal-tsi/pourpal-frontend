"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function PaymentForm(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  { form },
) {
  return (
    <div className="w-full space-y-4">
      <FormField
        control={form.control}
        name="card_number"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-primary">Card Number</FormLabel>
            <FormControl>
              <Input
                className="h-11"
                placeholder="1234 5678 1234 5678"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="card_holder"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-primary">Card Holder</FormLabel>
            <FormControl>
              <Input
                className="h-11"
                placeholder="Aleksandr Grakovsky"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="billing_address"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-primary">Billing Address</FormLabel>
            <FormControl>
              <Input
                className="h-11"
                placeholder="TSI, Lauvas iela"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex gap-10">
        <FormField
          control={form.control}
          name="card_expiration"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary">Expiration Date</FormLabel>
              <FormControl>
                <InputOTP maxLength={4} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot className="h-11 w-[2.4rem]" index={0} />
                    <InputOTPSlot className="h-11 w-[2.4rem]" index={1} />
                  </InputOTPGroup>
                  /
                  <InputOTPGroup>
                    <InputOTPSlot className="h-11 w-[2.4rem]" index={2} />
                    <InputOTPSlot className="h-11 w-[2.4rem]" index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cvv"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary">CVV</FormLabel>
              <FormControl>
                <InputOTP maxLength={3} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot className="h-11 w-[2.4rem]" index={0} />
                    <InputOTPSlot className="h-11 w-[2.4rem]" index={1} />
                    <InputOTPSlot className="h-11 w-[2.4rem]" index={2} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
