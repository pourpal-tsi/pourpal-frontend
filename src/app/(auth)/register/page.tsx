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
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, LogIn } from "lucide-react";
import { RegisterForm } from "@/components/form/register-form";

export default function Login() {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <div className="mt-20 flex min-h-screen flex-col items-center gap-3">
      {isError && (
        <Alert className="w-full max-w-sm bg-white" variant="destructive">
          <AlertCircle className="size-4" />
          <AlertTitle>Invalid credentials</AlertTitle>
          <AlertDescription>
            User with provided email already exists
          </AlertDescription>
        </Alert>
      )}
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">PourPal</CardTitle>
          <CardDescription>
            We value our clients, their desires, and their money. Gents, don't
            be shy create an account!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm setIsError={setIsError} />
        </CardContent>
        <CardFooter className="justify-center">
          <small>
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
              <LogIn className="ml-0.5 inline underline" size={13} />
            </Link>
          </small>
        </CardFooter>
      </Card>
    </div>
  );
}
