"use client";

import { useState } from "react";
import ToastButton from "@/components/client/toast-button";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <ToastButton
      toastTitle="Copied to clipboard"
      toastVariant="success"
      onBeforeToast={copyToClipboard}
      className="absolute cursor-pointer top-2 right-2 p-2 size-7 rounded-md bg-muted hover:bg-accent transition-colors duration-200 opacity-0 group-hover:opacity-100 ring-offset-transparent focus-visible:ring-offset-accent"
      title={copied ? "Copied!" : "Copy code"}
      aria-label={copied ? "Copied to clipboard" : "Copy code to clipboard"}
    >
      {copied ? (
        <svg
          className="size-4 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <svg
          className="size-4 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      )}
    </ToastButton>
  );
};

export default CopyButton;
