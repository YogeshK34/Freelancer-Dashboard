"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white";
}

export function Logo({ size = "md", variant = "default" }: LogoProps) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Shield
          className={`${sizes[size]} ${
            variant === "white" ? "text-white" : "text-primary"
          }`}
        />
        <motion.div
          className={`absolute inset-0 ${
            variant === "white" ? "text-white/20" : "text-primary/20"
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Shield className={sizes[size]} />
        </motion.div>
      </motion.div>
      <motion.span
        className={`font-bold ${textSizes[size]} ${
          variant === "white" ? "text-white" : "text-foreground"
        }`}
        whileHover={{ scale: 1.02 }}
      >
        FreelancePro
      </motion.span>
    </motion.div>
  );
}
