import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { PasswordInput } from "@/components/form/password-input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useRegisterForm } from "@/hooks/use-register-form";
import { useEffect, useState } from "react";
import PasswordStrengthProgress from "@/components/form/password-strength-progress";
import { passwordStrength } from "@/utils/password-strenth";

interface RegisterFormProps {
  setIsError: (isError: boolean) => void;
}

export function RegisterForm({ setIsError }: RegisterFormProps) {
  const { form, isSubmitting, onSubmit } = useRegisterForm(setIsError);
  const [progress, setProgress] = useState<number>(0);
  const [conditionsMet, setConditionsMet] = useState({
    length: false,
    hasNumber: false,
    hasUppercase: false,
    hasSpecial: false,
  });

  useEffect(() => {
    const subscription = form.watch((values) => {
      const { value, conditions } = passwordStrength(values.password || "");
      setProgress(value);
      setConditionsMet(conditions);
    });

    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary">Email</FormLabel>
              <FormControl>
                <Input
                  className="h-11"
                  placeholder="savrasov@pourpal.site"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary">Password</FormLabel>
              <FormControl>
                <PasswordInput
                  className="h-11"
                  placeholder="••••••••"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.getValues().password && (
          <PasswordStrengthProgress
            progress={progress}
            conditionsMet={conditionsMet}
          />
        )}
        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary">Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput
                  className="h-11"
                  placeholder="••••••••"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center space-x-2">
              <FormControl>
                <Checkbox
                  className={
                    form.formState.errors.terms ? "border-red-500" : ""
                  }
                  {...field}
                  value={form.getValues().terms ? "true" : "false"}
                  onChange={() =>
                    form.setValue("terms", !form.getValues().terms)
                  }
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="pb-2 text-sm font-medium leading-none text-primary">
                I agree to the{" "}
                <Link
                  href="/terms-of-service"
                  className="text-primary underline"
                >
                  terms of service
                </Link>
              </FormLabel>
            </FormItem>
          )}
        />
        <Button
          disabled={isSubmitting || !form.formState.isValid}
          type="submit"
          className="h-11 w-full select-none"
        >
          Register
          {isSubmitting && (
            <LoaderCircle size={22} className="ml-2 animate-spin" />
          )}
        </Button>
      </form>
    </Form>
  );
}
