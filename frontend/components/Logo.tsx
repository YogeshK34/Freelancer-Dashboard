import { motion } from "framer-motion";

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <rect width="40" height="40" rx="8" fill="currentColor" />
        <path
          d="M20 8L28 12V20C28 25.6 24.6 30.4 20 32C15.4 30.4 12 25.6 12 20V12L20 8Z"
          fill="white"
        />
        <path
          d="M18 22L16 20L17.4 18.6L18 19.2L20.6 16.6L22 18L18 22Z"
          fill="currentColor"
        />
      </motion.svg>
      <span className="text-xl font-bold">FreelancePro</span>
    </div>
  );
}
