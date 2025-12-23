"use client";
import { motion } from "framer-motion";

export default function WindowChrome({ 
  title, 
  children,
  className = ""
}: { 
  title: string; 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`rounded-lg border border-[#30363d] bg-[#0d1117] overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 border-b border-[#30363d] bg-[#161b22] px-4 py-2">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="ml-2 text-xs text-[#8b949e]">{title}</span>
      </div>
      <div className="p-4">{children}</div>
    </motion.div>
  );
}
