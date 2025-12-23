"use client";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const categories = [
  { key: "languages" as const, label: "Languages", color: "bg-blue-50 text-blue-700" },
  { key: "frameworksTools" as const, label: "Frameworks & Tools", color: "bg-purple-50 text-purple-700" },
  { key: "databases" as const, label: "Databases", color: "bg-green-50 text-green-700" },
  { key: "cloud" as const, label: "Cloud & DevOps", color: "bg-orange-50 text-orange-700" },
  { key: "infra" as const, label: "Infrastructure", color: "bg-pink-50 text-pink-700" },
  { key: "mldata" as const, label: "ML & Data", color: "bg-indigo-50 text-indigo-700" },
];

export default function SkillsCard() {
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
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h4 className="text-base font-bold text-gray-900 mb-3">{cat.label}</h4>
            <div className="flex flex-wrap gap-3">
              {profile.skills[cat.key].map((skill) => (
                <span key={skill} className={`${cat.color} px-4 py-2 rounded-full text-sm font-medium`}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
