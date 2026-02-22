"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [hasSavedTheme, setHasSavedTheme] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const techStack = [
    "Coding",
    "Cloud",
    "AI & ML",
    "Photography",
    "Writing",
    "Building",
  ];

  const nowItems = [
    "Building: ShareInRoom",
    "Sharing: Things I make",
    "Open to collabs",
  ];

  useEffect(() => {
    const cookieTheme = document.cookie
      .split("; ")
      .find((item) => item.startsWith("theme="))
      ?.split("=")[1];

    if (cookieTheme === "dark" || cookieTheme === "light") {
      setTheme(cookieTheme);
      setHasSavedTheme(true);
      setIsInitialized(true);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
    setHasSavedTheme(false);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) {
      return;
    }

    if (hasSavedTheme) {
      document.documentElement.setAttribute("data-theme", theme);
      document.cookie = `theme=${theme}; path=/; max-age=31536000; samesite=lax`;
      return;
    }

    document.documentElement.removeAttribute("data-theme");
  }, [theme, hasSavedTheme, isInitialized]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      setHasSavedTheme(true);
      return nextTheme;
    });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-[var(--page-bg)] text-[var(--page-text)] font-sans transition-colors duration-200">

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        className="fixed top-5 right-5 z-50 h-10 w-10 rounded-full border border-[var(--button-border)] bg-[var(--toggle-bg)] text-[var(--toggle-text)] flex items-center justify-center hover:opacity-90 hover:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 transition"
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3c0 0-1.13 3.94.8 5.87S18 9.79 21 12.79Z" />
          </svg>
        )}
      </button>

      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-[var(--hero-from)] via-[var(--hero-via)] to-[var(--hero-to)] transition-colors duration-200">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[var(--hero-grid-opacity)] [background-image:radial-gradient(circle_at_1px_1px,var(--panel-border)_1px,transparent_0)] [background-size:28px_28px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src="/sachin.jpg"
              alt="Sachin Joshi"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border border-[var(--avatar-border)]"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--heading-text)]">Sachin Joshi</h1>
          </div>

          <p className="text-2xl text-[var(--muted-text)] mb-8">
            Tinkering with ideas, code, and photos.
          </p>

          <p className="text-[var(--soft-text)]">A small space for the things I build and share — projects, pictures, notes.</p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {nowItems.map((item) => (
              <span key={item} className="px-3 py-1.5 rounded-full chip-fixed text-xs md:text-sm font-medium">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-4 text-sm font-medium text-[var(--quick-link-text)]">
            <a href="#projects" className="hover:text-[var(--accent)] transition">Projects</a>
            <span aria-hidden="true">•</span>
            <a href="mailto:sachinj@gmail.com" className="hover:text-[var(--accent)] transition">Email</a>
          </div>
        </div>

          <button
          type="button"
          onClick={scrollToAbout}
          aria-label="Scroll to About section"
          className="absolute bottom-14 flex flex-col items-center animate-bounce z-10"
        >
          <div className="w-12 h-12 border-2 border-current rounded-full flex items-center justify-center mb-2 shadow-lg shadow-[var(--scroll-shadow)]">
            <span className="text-2xl">↓</span>
          </div>
          <span className="text-sm text-[var(--heading-text)] tracking-widest">SCROLL</span>
        </button>

      </section>

      <section id="about" className="py-24 px-6 border-t border-[var(--section-border)] transition-colors duration-200">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-5">About Me</h2>
            <p className="text-[var(--muted-text)] text-lg md:text-base md:max-w-[65ch] leading-relaxed md:leading-loose">
              Hey, I&apos;m Sachin. I build small, clever things (some of them even work) and share what I learn.
              This is my tinkering corner where I hoard ideas, drop experiments, and occasionally confuse my future self.
              I add stuff slowly and with snacks. Want to collaborate or swap war stories? Use the Email link below.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">Interests</h3>
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
          <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

          <div className="max-w-2xl mx-auto w-full border border-[var(--panel-border)] p-10 rounded-3xl hover:scale-[1.01] hover:border-[var(--accent)]/50 transition text-center">
            <h3 className="text-2xl font-semibold mb-3">ShareInRoom</h3>
            <p className="text-[var(--muted-text)] mb-5">
              Made this to make quick file sharing easy. Create a room, drop files, share, and it auto-cleans after.
            </p>
            <a href="https://shareinroom.cloud" target="_blank" rel="noopener noreferrer" className="underline text-lg text-[var(--accent)]">
              Check it out →
            </a>
          </div>

          <p className="text-center text-[var(--subtle-text)] mt-8">More stuff coming: photos, essays, and random builds.</p>
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
