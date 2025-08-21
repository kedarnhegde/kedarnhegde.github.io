import Image from "next/image";

type Props = {
  name: string;
  date?: string;
  tech?: string[];
  bullets?: string[];
  repo?: string;
  demo?: string;
  image?: string;
};

export default function ProjectCard({
  name,
  date,
  tech = [],
  bullets = [],
  repo,
  demo,
  image,
}: Props) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
      {/* accent gradient on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(60%_60%_at_30%_0%,rgba(59,130,246,0.10),transparent_60%),radial-gradient(60%_60%_at_90%_10%,rgba(168,85,247,0.08),transparent_60%)]" />

      {image ? (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={image}
            alt={`${name} cover`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
        </div>
      ) : (
        <div className="h-2 w-full bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-emerald-400/40" />
      )}

      <div className="relative p-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-semibold text-lg text-neutral-100">{name}</h3>
          {date && <span className="text-xs text-neutral-400">{date}</span>}
        </div>

        {tech.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {bullets.length > 0 && (
          <ul className="mt-3 list-disc ml-5 space-y-1 text-neutral-200">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        {(repo || demo) && (
          <div className="mt-4 flex gap-4 text-sm">
            {repo && (
              <a
                className="underline underline-offset-4 hover:opacity-80 text-neutral-200"
                href={repo}
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            )}
            {demo && (
              <a
                className="underline underline-offset-4 hover:opacity-80 text-neutral-200"
                href={demo}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
