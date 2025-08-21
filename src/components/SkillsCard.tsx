import { profile } from "@/data/profile";

const labels: Record<keyof typeof profile.skills, string> = {
  languages: "Programming Languages",
  frameworksTools: "Frameworks & Tools",
  databases: "Databases",
};

export default function SkillsCard() {
  const s = profile.skills;
  return (
    <div className="rounded-lg border border-neutral-800 p-5 space-y-3">
      {(Object.keys(s) as (keyof typeof s)[]).map((k) => (
        <p key={k} className="text-neutral-200">
          <span className="font-semibold text-neutral-100">{labels[k]}:</span>{" "}
          {s[k].join(", ")}
        </p>
      ))}
    </div>
  );
}
