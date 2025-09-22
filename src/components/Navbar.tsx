 
"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="flex justify-between items-center py-4 mb-6 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-bold">Daniel</h1>
      <div className="flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>

        {/* Dark Mode Toggle */}
        {mounted && (
          <button
            className="px-3 py-1 border rounded-md text-sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        )}
      </div>
    </nav>
  );
}
