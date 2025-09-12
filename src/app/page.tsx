import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";
import SkillsCard from "@/components/SkillsCard";
import AchievementsCard from "@/components/AchievementsCard";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      <Hero />

      <section id="experience" className="mb-16 scroll-mt-24">
        <SectionHeading>Experience</SectionHeading>
        <div className="relative">
          {/* vertical guide */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-800" />
          <div className="space-y-8">
            {profile.experience.map((group, idx) => (
              <ExperienceCard key={idx} group={group} />
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mb-16 scroll-mt-24">
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-4">
          {profile.education.map((e, i) => (
            <div key={i} className="rounded-lg border border-neutral-800 p-4">
              <h4 className="font-semibold text-neutral-100">{e.school}</h4>
              <p className="text-neutral-200">{e.detail}</p>
              <p className="text-neutral-400 text-sm">{e.extra}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects + Skills */}
      <section
        id="projects"
        className="mb-16 grid gap-10 md:grid-cols-2 scroll-mt-24"
      >
        <div>
          <SectionHeading>Projects</SectionHeading>
          <div className="space-y-12">
            {profile.projects.map((p, i) => (
              <ProjectCard
                key={i}
                name={p.name}
                date={p.date}
                tech={p.tech}
                bullets={p.bullets}
                repo={p.repo}
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Skills */}
          <section id="skills" className="mb-8 scroll-mt-24">
            <SectionHeading>Skills</SectionHeading>
            <SkillsCard />
          </section>

          {/* Achievements */}
          <section id="achievements" className="mb-16 scroll-mt-24">
            <SectionHeading>Achievements</SectionHeading>
            <AchievementsCard />
          </section>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mb-24 scroll-mt-24">
        <SectionHeading>Contact</SectionHeading>
        <ul className="space-y-3 text-lg">
          <li className="flex items-center gap-3">
            {/* Email icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-neutral-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
            </svg>
            <a
              className="underline underline-offset-4 hover:text-emerald-400 transition-colors"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </li>

          <li className="flex items-center gap-3">
            {/* Phone icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-neutral-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.09 15.09 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1v3.59a1 1 0 0 1-1 1A17.77 17.77 0 0 1 3 6a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1c0 1.22.2 2.42.57 3.56a1 1 0 0 1-.25 1.02l-2.3 2.21Z" />
            </svg>
            <a
              className="underline underline-offset-4 hover:text-emerald-400 transition-colors"
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
            >
              {profile.phone}
            </a>
          </li>

          <li className="flex items-center gap-3">
            {/* LinkedIn icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-neutral-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.33V9h3.4v1.56h.05c.47-.89 1.62-1.83 3.33-1.83 3.56 0 4.21 2.35 4.21 5.41v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.11 20.45H3.58V9h3.53v11.45z" />
            </svg>
            <a
              className="underline underline-offset-4 hover:text-emerald-400 transition-colors"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {profile.links.linkedin.replace("https://", "")}
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
