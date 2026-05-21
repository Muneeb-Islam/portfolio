import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ProjectDetailCTA() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 shadow-2xl shadow-slate-900/20 sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative flex flex-col gap-6 text-center sm:items-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-400/20">
              <Icon icon="mdi:rocket-launch-outline" className="text-3xl" />
            </div>

            <div>
              <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                Want to build something similar?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Let’s turn your idea into a clean, scalable, and professional
                digital product.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-black text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:bg-indigo-600"
              >
                Start a Project
                <Icon icon="mdi:arrow-right" className="text-lg" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/15"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}