"use client";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import SkillsCard from "@/components/SkillsCard";
import AchievementsCard from "@/components/AchievementsCard";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Main content with white background */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
          {/* Experience */}
          <section id="experience">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Experience</h2>
              <p className="text-base text-gray-600 mb-10">My professional journey</p>
            </motion.div>
            <div className="space-y-8">
              {profile.experience.map((group, idx) => (
                <ExperienceCard key={idx} group={group} index={idx} />
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Projects</h2>
              <p className="text-base text-gray-600 mb-10">Things I've built</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {profile.projects.map((p, i) => (
                <ProjectCard key={i} name={p.name} date={p.date} tech={p.tech} bullets={p.bullets} repo={p.repo} />
              ))}
            </div>
          </section>

          {/* Skills */}
          <section id="skills">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Skills</h2>
              <p className="text-base text-gray-600 mb-10">Technologies I work with</p>
            </motion.div>
            <SkillsCard />
          </section>

          {/* Achievements */}
          <section id="achievements">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Achievements</h2>
              <p className="text-base text-gray-600 mb-10">Milestones & recognition</p>
            </motion.div>
            <AchievementsCard />
          </section>

          {/* Contact */}
          <section id="contact" className="pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Let's Connect</h2>
              <p className="text-base text-gray-600 mb-10">Get in touch with me</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.a
                href={`mailto:${profile.email}`}
                className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-3xl shadow-2xl hover:shadow-blue-300 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-2xl font-bold mb-2">Email</h3>
                <p className="text-white/90">{profile.email}</p>
              </motion.a>
              <motion.a
                href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-emerald-300 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-2xl font-bold mb-2">Phone</h3>
                <p className="text-white/90">{profile.phone}</p>
              </motion.a>
              <motion.a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-br from-[#0077b5] to-[#005582] text-white p-8 rounded-3xl shadow-2xl hover:shadow-blue-400 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-2xl font-bold mb-2">LinkedIn</h3>
                <p className="text-white/90">Connect with me</p>
              </motion.a>
              <motion.a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-br from-[#24292e] to-[#000000] text-white p-8 rounded-3xl shadow-2xl hover:shadow-gray-500 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-4xl mb-4">👨‍💻</div>
                <h3 className="text-2xl font-bold mb-2">GitHub</h3>
                <p className="text-white/90">View my code</p>
              </motion.a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
