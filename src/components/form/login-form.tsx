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
import { useLoginForm } from "@/hooks/use-login-form";

interface LoginFormProps {
  setIsError: (isError: boolean) => void;
}

export function LoginForm({ setIsError }: LoginFormProps) {
  const { form, isSubmitting, onSubmit } = useLoginForm(setIsError);
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
        <Button
          disabled={isSubmitting || !form.formState.isValid}
          type="submit"
          className="h-11 w-full select-none"
        >
          Login
          {isSubmitting && (
            <LoaderCircle size={22} className="ml-2 animate-spin" />
          )}
        </Button>
      </form>
    </Form>
  );
}
