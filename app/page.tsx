"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Docker",
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
  };

  return (
    <main className="bg-[var(--page-bg)] text-[var(--page-text)] font-sans transition-colors duration-200">

      <button
        type="button"
        onClick={toggleTheme}
        className="fixed top-5 right-5 z-50 px-4 py-2 rounded-full border border-[var(--button-border)] bg-[var(--toggle-bg)] text-[var(--toggle-text)] text-sm hover:opacity-90 transition"
      >
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </button>

      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-[var(--hero-from)] via-[var(--hero-via)] to-[var(--hero-to)] transition-colors duration-200">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[var(--blob-purple)] blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[var(--blob-blue)] blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src="/profile-placeholder.svg"
              alt="Sachin Joshi"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border border-[var(--avatar-border)]"
            />
            <h1 className="text-5xl md:text-7xl font-bold">Sachin Joshi</h1>
          </div>

          <p className="text-2xl text-[var(--muted-text)] mb-8">
            Learning and building simple cool things.
          </p>

          <p className="text-[var(--soft-text)]">Just sharing what I&apos;m making as I learn.</p>
        </div>

        <div className="absolute bottom-14 flex flex-col items-center animate-bounce z-10">
          <div className="w-12 h-12 border-2 border-current rounded-full flex items-center justify-center mb-2 shadow-lg shadow-[var(--scroll-shadow)]">
            <span className="text-2xl">↓</span>
          </div>
          <span className="text-sm text-[var(--soft-text)] tracking-widest">SCROLL</span>
        </div>

      </section>

      <section className="py-24 px-6 border-t border-[var(--section-border)] transition-colors duration-200">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-5">About Me</h2>
            <p className="text-[var(--muted-text)] text-lg leading-relaxed">
              I like building small web things that are useful, clean, and fun to use.
              Right now I&apos;m exploring full-stack development and posting projects as I go.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-[var(--panel-border)] text-[var(--muted-text)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 border-t border-[var(--section-border)] transition-colors duration-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Projects so far</h2>

          <div className="max-w-2xl mx-auto w-full border border-[var(--panel-border)] p-10 rounded-3xl hover:scale-[1.01] transition text-center">
            <h3 className="text-2xl font-semibold mb-3">ShareInRoom</h3>
            <p className="text-[var(--muted-text)] mb-5">
              Made this to make quick file sharing easy. Create a room, drop files, share, and it auto-cleans after.
            </p>
            <a href="https://shareinroom.cloud" target="_blank" rel="noopener noreferrer" className="underline text-lg">
              Check it out →
            </a>
          </div>

          <p className="text-center text-[var(--subtle-text)] mt-8">More side projects soon :)</p>
        </div>
      </section>

      <footer className="border-t border-[var(--section-border)] mt-20 py-12 text-center px-6 transition-colors duration-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-2">Say hi anytime 👋</p>
          <p className="text-[var(--soft-text)] mb-6">sachinj@gmail.com</p>

          <a
            href="mailto:sachinj@gmail.com"
            className="inline-flex items-center gap-2 border border-[var(--button-border)] px-6 py-3 rounded-2xl hover:bg-[var(--page-text)] hover:text-[var(--page-bg)] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.5 7 8.1 6.25a.75.75 0 0 0 .9 0L20.5 7" />
            </svg>
            Email Me
          </a>

          <p className="text-[var(--subtle-text)] text-sm mt-8">© {new Date().getFullYear()} Sachin Joshi</p>
        </div>
      </footer>

    </main>
  );
}
