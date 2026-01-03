"use client";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function EducationCard() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-6">
        {profile.education.map((edu, i) => (
          <motion.div
            key={i}
            className={i > 0 ? "pt-6 border-t border-gray-200" : ""}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-1">{edu.school}</h3>
            <p className="text-base text-gray-700 mb-1">{edu.detail}</p>
            <p className="text-sm text-gray-600">{edu.extra}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
