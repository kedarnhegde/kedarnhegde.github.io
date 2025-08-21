import { profile } from "@/data/profile";

export default function AchievementsCard() {
  return (
    <div className="rounded-lg border border-neutral-800 p-5">
      <ul className="list-disc ml-5 space-y-2 text-neutral-200">
        {profile.achievements.map((a, i) => (
          <li key={i} className="whitespace-normal">
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}
