"use client";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import DeliveryForm from "@/components/form/delivery-form";
import PaymentForm from "@/components/form/payment-form";
import { useCheckoutForm } from "@/hooks/use-checkout-form";

export function CheckoutForm() {
  const { form, onSubmit, isSubmitting } = useCheckoutForm();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-between gap-20 md:flex-row"
      >
        <DeliveryForm form={form} />
        <div className="w-full space-y-4">
          <PaymentForm form={form} />

          <Button
            disabled={isSubmitting || !form.formState.isValid}
            type="submit"
            className="h-11 w-full select-none"
          >
            Order
            {isSubmitting && (
              <LoaderCircle size={22} className="ml-2 animate-spin" />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
