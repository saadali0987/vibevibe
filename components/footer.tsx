import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-900/10 bg-white/80 py-10 text-slate-600 backdrop-blur-md dark:border-white/5 dark:bg-slate-950/70 dark:text-slate-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
            CodeVibe Collective
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-300">
            (c) 2025 CodeVibe Collective - Still debugging life.
          </p>
        </div>
        <div className="flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/50">
          <Link href="#story" className="transition hover:text-slate-900 dark:hover:text-white">
            Our Story
          </Link>
          <Link href="#team" className="transition hover:text-slate-900 dark:hover:text-white">
            Team
          </Link>
          <Link href="#projects" className="transition hover:text-slate-900 dark:hover:text-white">
            Projects
          </Link>
          <Link href="#contact" className="transition hover:text-slate-900 dark:hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
