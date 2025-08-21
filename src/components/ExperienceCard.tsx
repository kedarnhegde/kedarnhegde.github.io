import type { ExperienceGroup } from "@/data/profile";

export default function ExperienceCard({ group }: { group: ExperienceGroup }) {
  return (
    <article className="relative pl-10">
      {/* timeline node */}
      <span className="absolute left-3 top-1.5 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />

      <div className="rounded-xl border border-neutral-800 p-5">
        {/* Company header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h3 className="font-semibold">
            {group.company} · {group.location}
          </h3>
        </div>

        {/* Roles under company */}
        {group.roles.map((role, i) => (
          <div key={i} className={i === 0 ? "mt-3" : "mt-4"}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h4 className="font-medium">{role.title}</h4>
              <div className="text-sm text-neutral-400">{role.dates}</div>
            </div>

            {/* Bullets */}
            <ul className="list-disc ml-5 space-y-1 text-neutral-200">
              {role.bullets.map((b, j) => (
                <li key={j} className="whitespace-normal">
                  {b}
                </li>
              ))}
            </ul>

            {/* Tech tags (optional) */}
            {role.tech && role.tech.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {role.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
