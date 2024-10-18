"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { LoginForm } from "@/components/form/login-form";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, UserRoundPlus } from "lucide-react";

export default function Login() {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <div className="mt-20 flex min-h-screen flex-col items-center gap-3">
      {isError && (
        <Alert className="w-full max-w-sm bg-white" variant="destructive">
          <AlertCircle className="size-4" />
          <AlertTitle>Invalid credentials</AlertTitle>
          <AlertDescription>
            Incorrect email or password. Please, try again.
          </AlertDescription>
        </Alert>
      )}
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">PourPal</CardTitle>
          <CardDescription>Best place to spend your money!</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm setIsError={setIsError} />
        </CardContent>
        <CardFooter className="justify-center">
          <small>
            Don't have an account yet?{" "}
            <Link href="/register" className="underline">
              Create an account
              <UserRoundPlus className="ml-1 inline underline " size={13} />
            </Link>
          </small>
        </CardFooter>
      </Card>
    </div>
  );
}
