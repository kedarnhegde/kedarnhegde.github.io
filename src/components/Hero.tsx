"use client";
import { profile } from "@/data/profile";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden" aria-label="Intro">
      {/* Background: gradient mesh + subtle grid + noise (dark-optimized) */}
      <div className="pointer-events-none absolute inset-0">
        {/* gradient mesh */}
        <div className="absolute -inset-20 bg-[radial-gradient(60%_40%_at_20%_20%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(40%_60%_at_80%_20%,rgba(168,85,247,0.30),transparent_60%),radial-gradient(50%_50%_at_50%_80%,rgba(16,185,129,0.25),transparent_60%)]" />
        {/* animated blobs */}
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl animate-float" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl animate-float-slow" />
        <div className="absolute left-1/2 bottom-0 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/15 blur-3xl animate-float-fast" />
        {/* subtle grid (dark) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
        {/* noise */}
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22 viewBox=%220 0 160 160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.4%22/></svg>')]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 pt-28 pb-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Open to opportunities
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-neutral-100">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg text-neutral-300">
          {profile.role} · San Diego, CA · English & Japanese (JLPT N2)
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-200">
          {profile.summary}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* Primary (filled, high contrast on dark) */}
          <Link
            href={profile.links.resume}
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-neutral-900"
          >
            Resume
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 4v8m0 0l-3-3m3 3l3-3" />
              <path d="M4 14h12" />
            </svg>
          </Link>

          {/* Outline variants (dark-only) */}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-neutral-700 px-4 py-2 text-neutral-100 hover:bg-neutral-800"
          >
            Email Me
          </a>

          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-700 px-4 py-2 text-neutral-100 hover:bg-neutral-800"
          >
            GitHub
          </a>

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-700 px-4 py-2 text-neutral-100 hover:bg-neutral-800"
          >
            LinkedIn
          </a>

          {/* Optional: Resume link (drop your PDF in /public/resume.pdf) */}
          <a
            href="#projects"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-700 px-4 py-2 text-neutral-100 hover:bg-neutral-800"
          >
            Projects
          </a>

          {/* Optional: Phone (click-to-call) */}
          <a
            href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-2 rounded-md border border-neutral-700 px-4 py-2 text-neutral-100 hover:bg-neutral-800"
          >
            Call Me
          </a>
        </div>
      </div>
    </section>
  );
}
