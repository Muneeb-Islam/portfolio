import { Icon } from "@iconify/react";

export default function ProjectTechSection({ project }) {
  return (
    <section className="bg-slate-50 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-indigo-500">
            Technology
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Tools Used In This Project
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            This project was built using modern tools and technologies to keep
            it scalable, clean, and production-ready.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.tags?.map((tag) => (
            <div
              key={tag}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                <Icon icon="mdi:code-tags" className="text-2xl" />
              </div>

              <h3 className="mt-4 text-lg font-black text-slate-950">
                {tag}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}