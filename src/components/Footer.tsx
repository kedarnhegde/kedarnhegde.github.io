"use client";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
