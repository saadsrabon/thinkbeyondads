import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RefreshCcw } from "lucide-react";

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center p-6">
      <div className="max-w-3xl text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          We Are Down for Maintenance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300"
        >
          Sorry for the inconvenience. We're working hard to get things back up and running as soon as possible. Thank you for your patience and understanding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            className="text-lg px-6 py-3 rounded-2xl font-semibold bg-white text-black hover:bg-gray-200"
            onClick={() => window.location.reload()}
          >
            Retry <RefreshCcw className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
