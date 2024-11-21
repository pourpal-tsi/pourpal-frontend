import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";
import { sendOrder } from "@/services/order";
import { useCart } from "@/context/cart-context";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export const checkoutSchema = z.object({
  recipient_name: z.string(),
  recipient_phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" })
    .or(z.literal("")),
  recipient_city: z.string(),
  recipient_street_address: z.string(),
  comment: z.string().optional(),
  card_number: z.string().regex(/^\d{16}$/),
  card_holder: z.string(),
  billing_address: z.string(),
  card_expiration: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, {
      message: "Invalid date",
    })
    .refine(
      (data) => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear().toString().slice(2);

        const cardMonth = parseInt(data.slice(0, 2), 10);
        const cardYear = data.slice(2, 4);
        if (cardMonth < 1 || cardMonth > 12) {
          return false;
        }

        return (
          cardYear > currentYear ||
          (cardYear === currentYear && cardMonth >= currentMonth)
        );
      },
      { message: "Card is expired" },
    ),
  cvv: z.string().regex(/^\d{3}$/),
});

export type CheckoutForm = z.infer<typeof checkoutSchema>;

export type DeliveryInfo = Omit<
  CheckoutForm,
  "card_number" | "card_holder" | "billing_address" | "card_expiration" | "cvv"
>;

export function useCheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { cart } = useCart();
  const { toast } = useToast();
  const router = useRouter();
  const { fetchCart } = useCart();
  const form = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
    mode: "onChange",
    defaultValues: {
      recipient_name: "",
      recipient_phone: "",
      recipient_city: "",
      recipient_street_address: "",
      comment: "",
      card_number: "",
      card_holder: "",
      billing_address: "",
      card_expiration: "",
      cvv: "",
    },
  });

  const mutation = useMutation({
    mutationFn: sendOrder,
    onSuccess: () => {
      fetchCart();
      toast({
        title: "Correct!",
        description: "Your order has been successfully sent! 😏",
        variant: "success",
      });
      router.push("/catalogue");
    },
    onError: () => {
      toast({
        title: "Incorrect!",
        description:
          cart?.cart_items?.length > 0
            ? "Please try again later 😠"
            : "Your cart is empty 😠",
        variant: "destructive",
      });
    },
  });
  const onSubmit = (data: CheckoutForm) => {
    const recipient_data: DeliveryInfo = {
      recipient_name: data.recipient_name,
      recipient_phone: data.recipient_phone,
      recipient_city: data.recipient_city,
      recipient_street_address: data.recipient_street_address,
      comment: data.comment,
    };

    setIsSubmitting(true);
    mutation.mutate(recipient_data, {
      onSettled: () => {
        setIsSubmitting(false);
      },
    });
  };

  return { form, isSubmitting, onSubmit };
}
