import { profile } from "@/data/profile";

const telHref = `tel:${profile.phone.replace(/[^+\d]/g, "")}`;

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-800">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} {profile.name} ·{" "}
          <a
            className="underline underline-offset-2"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>{" "}
          ·{" "}
          <a className="underline underline-offset-2" href={telHref}>
            {profile.phone}
          </a>
        </p>

        <nav className="flex items-center gap-3">
          {/* GitHub */}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 hover:bg-neutral-800"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.33 1.12 2.9.86.09-.66.35-1.12.64-1.38-2.22-.26-4.55-1.13-4.55-5.04 0-1.11.39-2.01 1.03-2.72-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.03A9.3 9.3 0 0 1 12 7.1c.86 0 1.72.12 2.53.35 1.9-1.3 2.74-1.03 2.74-1.03.55 1.43.21 2.49.11 2.75.64.71 1.02 1.61 1.02 2.72 0 3.92-2.34 4.77-4.57 5.03.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 hover:bg-neutral-800"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.33V9h3.4v1.56h.05c.47-.89 1.62-1.83 3.33-1.83 3.56 0 4.21 2.35 4.21 5.41v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.11 20.45H3.58V9h3.53v11.45z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            title="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 hover:bg-neutral-800"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
            </svg>
          </a>

          {/* Phone */}
          <a
            href={telHref}
            aria-label="Phone"
            title="Call"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 hover:bg-neutral-800"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.09 15.09 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1v3.59a1 1 0 0 1-1 1A17.77 17.77 0 0 1 3 6a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1c0 1.22.2 2.42.57 3.56a1 1 0 0 1-.25 1.02l-2.3 2.21Z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
