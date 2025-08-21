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
          <div className="space-y-6">
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
          <section id="skills" className="mb-16 scroll-mt-24">
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
          <li>
            <span className="font-medium">Email:</span>{" "}
            <a
              className="underline underline-offset-4 hover:text-emerald-400 transition-colors"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </li>
          <li>
            <span className="font-medium">Phone:</span>{" "}
            <a
              className="underline underline-offset-4 hover:text-emerald-400 transition-colors"
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
            >
              {profile.phone}
            </a>
          </li>
          <li>
            <span className="font-medium">LinkedIn:</span>{" "}
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

      <footer className="mb-8 text-sm text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}
