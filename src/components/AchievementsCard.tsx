"use client";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AchievementsCard() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <ul className="space-y-4">
        {profile.achievements.map((a, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="text-xl text-purple-500 leading-none flex-shrink-0">✓</span>
            <span className="text-gray-700 leading-relaxed text-sm">{a}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
