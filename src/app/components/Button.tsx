"use client";

import { useRouter } from "next/navigation";
import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export function Button({
  className = "",
  children,
  onClick,
  ...props
}: ButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    router.push("/contact");
  };

  return (
    <button
      className={`px-4 py-2 rounded font-semibold text-white transition-colors ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
