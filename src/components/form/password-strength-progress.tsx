"use client";
import { Progress } from "@/components/ui/progress";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface PasswordStrengthProgressProps {
  progress: number;
  conditionsMet: {
    length: boolean;
    hasNumber: boolean;
    hasUppercase: boolean;
    hasSpecial: boolean;
  };
}

interface ConditionIndicatorProps {
  isMet: boolean;
}

export default function PasswordStrengthProgress({
  progress,
  conditionsMet,
}: PasswordStrengthProgressProps) {
  const allConditionsMet = Object.values(conditionsMet).every(Boolean);

  return (
    <div>
      <Progress
        value={progress}
        max={100}
        className={cn({
          "[&_div]:bg-red-500": progress === 25,
          "[&_div]:bg-yellow-500": progress === 50,
          "[&_div]:bg-blue-500": progress === 75,
          "[&_div]:bg-green-500": progress === 100,
        })}
      />
      {!allConditionsMet && (
        <small>
          <ul className="ml-2 mt-2">
            <li>
              <ConditionIndicator isMet={conditionsMet.length} />
              At least 6 characters
            </li>
            <li>
              <ConditionIndicator isMet={conditionsMet.hasNumber} />
              At least one number
            </li>
            <li>
              <ConditionIndicator isMet={conditionsMet.hasUppercase} />
              At least one uppercase letter
            </li>
            <li>
              <ConditionIndicator isMet={conditionsMet.hasSpecial} />
              At least one special character
            </li>
          </ul>
        </small>
      )}
    </div>
  );
}

const ConditionIndicator: FC<ConditionIndicatorProps> = ({
  isMet,
}: {
  isMet: boolean;
}) => {
  return (
    <span>
      {isMet ? (
        <span className="text-green-500">&#10003; </span>
      ) : (
        <span className="text-red-500">&#10008; </span>
      )}
    </span>
  );
};
