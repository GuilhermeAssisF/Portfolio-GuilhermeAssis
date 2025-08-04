"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  containerClassName?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, containerClassName, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 transition-colors duration-300 w-full",
        containerClassName
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className={cn(
          "absolute inset-0 bg-neutral-200 dark:bg-neutral-700 rounded-lg",
          className
        )}
      />
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
