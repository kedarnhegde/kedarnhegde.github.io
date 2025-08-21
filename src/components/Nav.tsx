"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.getAttribute("id");
            if (id) setActive(id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-900/85 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/70">
      <div className="mx-auto max-w-5xl px-6 py-4">
        {/* Desktop / tablet: regular links */}
        <div className="hidden sm:flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold text-lg tracking-tight text-neutral-100"
          >
            Kedar Hegde
          </Link>
          <div className="flex items-center gap-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`text-[0.95rem] ${
                  active === s.id
                    ? "underline underline-offset-4"
                    : "hover:underline underline-offset-4"
                } text-neutral-300`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile: breadcrumb-style */}
        <div className="sm:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-semibold text-base text-neutral-100">
              Kedar Hegde
            </Link>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 px-2 sm:px-0">
            {sections.map((s, i) => (
              <div key={s.id} className="flex items-center">
                <a
                  href={`#${s.id}`}
                  className={`px-2 py-1 rounded-md text-sm ${
                    active === s.id
                      ? "bg-neutral-800 text-neutral-100"
                      : "text-neutral-300 hover:bg-neutral-800"
                  }`}
                >
                  {s.label}
                </a>
                {i < sections.length - 1 && (
                  <span className="mx-1 text-neutral-600">›</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
