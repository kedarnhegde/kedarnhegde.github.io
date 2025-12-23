"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  name: string;
  date?: string;
  tech?: string[];
  bullets?: string[];
  repo?: string;
};

export default function ProjectCard({ name, date, tech = [], bullets = [], repo }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-purple-200 transition-shadow"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        {date && (
          <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full whitespace-nowrap">
            {date}
          </span>
        )}
      </div>

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
              {t}
            </span>
          ))}
        </div>
      )}

      {bullets.length > 0 && (
        <ul className="space-y-2 mb-4">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed text-sm">
              <span className="text-purple-500 mt-1.5 text-xl">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      )}
    </motion.div>
  );
}
