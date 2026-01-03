"use client";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">
              Available for Summer 2026 Internships
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            {profile.name}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-light mb-4">
            {profile.role}
          </p>

          <p className="text-base md:text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            {profile.summary}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
            <motion.a
              href={`mailto:${profile.email}`}
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </motion.a>
            <motion.a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.33V9h3.4v1.56h.05c.47-.89 1.62-1.83 3.33-1.83 3.56 0 4.21 2.35 4.21 5.41v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.11 20.45H3.58V9h3.53v11.45z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          const element = document.getElementById('experience');
          if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }}
      >
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
