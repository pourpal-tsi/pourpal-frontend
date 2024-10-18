import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { register } from "@/services/auth";

const registerSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .regex(/\d/, { message: "Password must contain at least one digit" }),
    passwordConfirmation: z.string().min(6),
    terms: z.boolean().refine((data) => data, {
      message: "You must agree to the terms of service",
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
  });
type RegisterForm = z.infer<typeof registerSchema>;

export function useRegisterForm(setIsError: (isError: boolean) => void) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
      terms: false,
    },
  });

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      router.push("/login");
    },
    onError: () => {
      setIsError(true);
    },
  });

  const onSubmit = (data: RegisterForm) => {
    setIsSubmitting(true);
    const { email, password } = data;
    mutation.mutate(
      { email, password },
      {
        onSettled: () => {
          setIsSubmitting(false);
        },
      },
    );
  };

  return { form, isSubmitting, onSubmit };
}
