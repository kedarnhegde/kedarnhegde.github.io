"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  anchor?: string; // optional id for in-page links
};

export default function SectionHeading({
  children,
  className = "",
  anchor,
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <h2
      id={anchor}
      ref={ref}
      className={`text-2xl font-semibold mb-4 will-change-transform transition-all duration-700 
        ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        } ${className}`}
    >
      {children}
      <span className="ml-2 inline-block h-[10px] w-[36px] align-bottom rounded-full bg-gradient-to-r from-blue-500/70 via-purple-500/70 to-emerald-400/70" />
    </h2>
  );
}
