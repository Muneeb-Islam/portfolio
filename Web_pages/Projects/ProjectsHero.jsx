import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const stats = [
  {
    id: 1,
    icon: "mdi:briefcase-outline",
    value: "20+",
    label: "Projects Delivered",
  },
  {
    id: 2,
    icon: "mdi:account-group-outline",
    value: "7+",
    label: "Years of Experience",
  },
];

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-[#080826] pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
      {/* Background Grid */}
      {/* <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" /> */}

      {/* Glow Effects */}
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-4 px-4 sm:px-6 lg:grid-cols-2 lg:gap-5 lg:px-8">
        {/* Left Content */}
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-indigo-400">
            All Projects
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl">
            SaaS, Web App & Mobile App Projects That Create {" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Real Impact
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
           Explore a collection of SaaS platforms, web applications, mobile apps, dashboards, and digital products I’ve built for startups and businesses. Each project reflects clean code, thoughtful design, scalable architecture, and real business value.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-indigo-500/30 transition hover:bg-indigo-400"
            >
              Start a Project
              <Icon icon="mdi:arrow-right" className="text-lg" />
            </Link>
            {/* <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
            >
              View My Work
            </Link> */}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            {stats.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-indigo-300 ring-1 ring-white/10">
                  <Icon icon={item.icon} className="text-xl" />
                </div>

                <div>
                  <h3 className="text-xl font-black text-white">
                    {item.value}
                  </h3>
                  <p className="text-sm font-medium text-slate-400">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
            <Image
              src="/assets/8.png"
              alt="Projects page hero illustration"
              fill
              priority
              className="object-contain rounded-3xl drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}