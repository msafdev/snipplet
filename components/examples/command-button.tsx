"use client";

import { HTMLMotionProps, motion, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import React from "react";

interface SmashButtonProps extends HTMLMotionProps<"button"> {
  className?: string;
  children: React.ReactNode;
}

export const CommandButton = ({
  className,
  children,
  ...motionProps
}: SmashButtonProps) => {
  const baseClasses =
    "group font-medium rounded-lg relative select-none cursor-pointer";

  const defaultMotionProps: MotionProps = {
    initial: {
      y: 0,
    },
    whileHover: {
      y: 1,
      scaleY: 0.9,
    },
    whileTap: {
      y: 3,
      scaleY: 0.8,
    },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      mass: 0.1,
    },
    style: {
      transformOrigin: "center",
    },
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        "bg-muted/60 pb-1.5 focus-visible:ring-ring/40 transition-colors focus-visible:outline-none ring-transparent ring-2 ring-offset-background ring-offset-2",
        className
      )}
      {...defaultMotionProps}
      {...motionProps}
    >
      <span className="border rounded-lg w-full py-1.5 px-4 bg-secondary text-secondary-foreground text-sm inline-block">
        {children}
      </span>
    </motion.button>
  );
};
