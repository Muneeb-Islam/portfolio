import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ProjectDetailHero({ project }) {
  return (
    <section className="relative overflow-hidden bg-[#080826] pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14">
      {/* <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" /> */}
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-white"
        >
          <Icon icon="mdi:arrow-left" className="text-lg" />
          Back to Projects
        </Link>

        <div className="mt-5 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-indigo-400">
              {project.sub_title || "Featured Project"}
            </p>

            <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-indigo-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.metrics?.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur"
                >
                  <h3 className="text-2xl font-black text-white">
                    {metric.value}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/30">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}