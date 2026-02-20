export default function Home() {
  return (
    <main className="bg-black text-white font-sans">

      {/* FULLSCREEN HERO WITH ANIMATED BACKGROUND */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Sachin Joshi
          </h1>

          {/* Tagline */}
          <p className="text-2xl text-gray-300">
            Learning and building simple cool things.
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-14 flex flex-col items-center animate-bounce z-10">
          <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mb-2 shadow-lg shadow-purple-500/30">
            <span className="text-2xl">↓</span>
          </div>
          <span className="text-sm text-gray-400 tracking-widest">SCROLL</span>
        </div>

      </section>

      {/* PROJECTS */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="max-w-xl w-full border border-gray-700 p-10 rounded-3xl hover:scale-105 transition text-center">
          <h3 className="text-2xl font-semibold mb-3">ShareInRoom</h3>
          <p className="text-gray-300 mb-5">
            Create a room → share files instantly → everything auto-deletes. No signup. Just share.
          </p>
          <a href="https://shareinroom.cloud" target="_blank" rel="noopener noreferrer" className="underline text-lg">
            Open shareinroom.cloud →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 mt-20 py-12 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-2">Let’s build something cool together ✨</p>
          <p className="text-gray-400 mb-6">Feel free to reach out anytime</p>

          <a
            href="mailto:www.sachinj@gmail.com"
            className="inline-flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition"
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
            www.sachinj@gmail.com
          </a>

          <p className="text-gray-600 text-sm mt-8">© {new Date().getFullYear()} Sachin Joshi</p>
        </div>
      </footer>

          
    </main>
  );
}
