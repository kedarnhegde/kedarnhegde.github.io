"use client";
import type { ExperienceGroup } from "@/data/profile";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ExperienceCard({ group, index }: { group: ExperienceGroup; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{group.company}</h3>
          <p className="text-sm text-gray-600">{group.location}</p>
        </div>
      </div>

      {group.roles.map((role, i) => (
        <div key={i} className={i > 0 ? "mt-8 pt-8 border-t border-gray-200" : ""}>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
            <h4 className="text-base font-semibold text-gray-900">{role.title}</h4>
            <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full w-fit">
              {role.dates}
            </span>
          </div>

          <ul className="space-y-2 mb-4">
            {role.bullets.map((bullet, j) => (
              <li key={j} className="flex items-start gap-3 text-gray-700 leading-relaxed text-sm">
                <span className="text-purple-500 text-xl leading-none flex-shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {role.tech && role.tech.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {role.tech.map((t) => (
                <span
                  key={t}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
}
