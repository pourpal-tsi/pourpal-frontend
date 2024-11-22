"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";

export default function DeliveryForm(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  { form },
) {
  return (
    <div className="w-full space-y-4">
      <FormField
        control={form.control}
        name="recipient_name"
        render={({ field }) => (
          <FormItem className="pb-2.5">
            <FormLabel className="text-primary">Name</FormLabel>
            <FormControl>
              <Input className="h-11" placeholder="Onton Dranov" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="recipient_phone"
        render={({ field }) => (
          <FormItem className="flex flex-col items-start">
            <FormLabel className="text-primary">Phone Number</FormLabel>
            <FormControl className="w-full">
              <PhoneInput
                defaultCountry="LV"
                placeholder="Enter a phone number"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="recipient_city"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-primary">City</FormLabel>
            <FormControl>
              <Input className="h-11" placeholder="Riga" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="recipient_street_address"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-primary">Street Address</FormLabel>
            <FormControl>
              <Input
                className="h-11"
                placeholder="Brivibas iela 123"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="comment"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-primary">Comment</FormLabel>
            <FormControl>
              <Textarea
                className="h-11"
                placeholder="Leave a comment"
                {...field}
                maxLength={255}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
