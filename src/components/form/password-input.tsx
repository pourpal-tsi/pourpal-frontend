"use client";

import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes, useState } from "react";

export interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className="relative">
        <Input
          {...props}
          className={cn("pr-10", className)}
          type={showPassword ? "text" : "password"}
          ref={ref}
        />
        <span className="absolute right-3 top-[9px] cursor-pointer select-none">
          {showPassword ? (
            <EyeIcon
              className="opacity-100 transition-opacity duration-300 active:opacity-20"
              strokeWidth={1.2}
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <EyeOffIcon
              className="opacity-100 transition-opacity duration-300 active:opacity-20"
              strokeWidth={1.2}
              onClick={() => setShowPassword(true)}
            />
          )}
        </span>
      </div>
    );
  },
);
PasswordInput.displayName = "PasswordInput";
export { PasswordInput };
