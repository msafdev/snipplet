"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { HTMLAttributes } from "react";
import {
  PiSealCheckFill,
  PiSealWarningFill,
  PiSealQuestionFill,
  PiTrafficConeFill,
} from "react-icons/pi";
import { cn } from "@/lib/utils";

type ToastVariant = "default" | "success" | "error" | "warning";

type ToastButtonProps = {
  children: React.ReactNode;
  toastTitle: string;
  toastDescription?: string;
  toastVariant?: ToastVariant;
  actionLabel?: string;
  onActionClick?: () => void;
  onBeforeToast?: () => void | Promise<void>; // <== ADD THIS
  customIcon?: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

const ToastButton = ({
  className,
  children,
  toastTitle,
  toastDescription,
  toastVariant = "default",
  actionLabel,
  onActionClick,
  onBeforeToast, // <== HERE TOO
  customIcon,
  ...buttonProps
}: ToastButtonProps) => {
  const getDefaultIcon = (variant: ToastVariant) => {
    switch (variant) {
      case "success":
        return <PiSealCheckFill className="text-green-400 size-4 mt-[2px]" />;
      case "error":
        return <PiSealWarningFill className="text-red-400 size-4 mt-[2px]" />;
      case "warning":
        return (
          <PiSealQuestionFill className="text-yellow-400 size-4 mt-[2px]" />
        );
      case "default":
      default:
        return (
          <PiTrafficConeFill className="text-muted-foreground size-4 mt-[2px]" />
        );
    }
  };

  const handleClick = async () => {
    if (onBeforeToast) await onBeforeToast();

    toast.custom(
      () => (
        <div className="flex items-start gap-3 px-4 py-3 bg-card border rounded-lg round">
          {customIcon ?? getDefaultIcon(toastVariant)}
          <div className="flex flex-col">
            <p className="text-sm font-medium text-foreground">{toastTitle}</p>
            {toastDescription && (
              <p className="text-sm text-muted-foreground">
                {toastDescription}
              </p>
            )}
            {actionLabel && onActionClick && (
              <button
                onClick={onActionClick}
                className="mt-2 text-sm text-primary underline underline-offset-4"
              >
                {actionLabel}
              </button>
            )}
          </div>
        </div>
      ),
      { duration: 2000 }
    );
  };

  return (
    <Button
      onClick={handleClick}
      {...buttonProps}
      size="sm"
      variant="secondary"
      className={cn("border", className)}
    >
      {children}
    </Button>
  );
};

export default ToastButton;
