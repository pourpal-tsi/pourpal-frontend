import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { userContext } from "@/context/user-context";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginForm = z.infer<typeof loginSchema>;

export function useLoginForm(setIsError: (isError: boolean) => void) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const { loginUser } = userContext();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      router.push("/catalogue");
    },
    onError: () => {
      setIsError(true);
    },
  });

  const onSubmit = (data: LoginForm) => {
    setIsSubmitting(true);
    mutation.mutate(data, {
      onSettled: () => {
        setIsSubmitting(false);
      },
    });
  };

  return { form, isSubmitting, onSubmit };
}
