// src/app/page.tsx
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";
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

        <div>
          <SectionHeading>Skills</SectionHeading>
          <p className="mb-1">
            <span className="font-medium">Languages:</span>{" "}
            {profile.skills.languages.join(", ")}
          </p>
          <p className="mb-1">
            <span className="font-medium">Frameworks &amp; Tools:</span>{" "}
            {profile.skills.frameworksTools.join(", ")}
          </p>
          <p className="mb-1">
            <span className="font-medium">Databases:</span>{" "}
            {profile.skills.databases.join(", ")}
          </p>

          <SectionHeading className="mt-8">Education</SectionHeading>
          <ul className="list-disc ml-5 space-y-2">
            {profile.education.map((e, i) => (
              <li key={i}>
                <span className="font-medium">{e.school}</span> — {e.detail} ·{" "}
                <span className="text-neutral-600 dark:text-neutral-400">
                  {e.extra}
                </span>
              </li>
            ))}
          </ul>

          <SectionHeading className="mt-8">Achievements</SectionHeading>
          <ul className="list-disc ml-5 space-y-2">
            {profile.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
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
