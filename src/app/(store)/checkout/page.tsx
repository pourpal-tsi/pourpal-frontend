import { CheckoutForm } from "@/components/form/checkout-form";

export default function Checkout() {
  return (
    <div className="mx-auto h-full max-w-7xl rounded-lg bg-white p-10 shadow-lg lg:my-12 lg:h-full">
      <h1 className="mb-6 text-center text-3xl font-semibold md:text-left">
        Checkout
      </h1>
      <CheckoutForm />
    </div>
  );
}
