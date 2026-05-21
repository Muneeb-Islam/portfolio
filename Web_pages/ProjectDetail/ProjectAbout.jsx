import { Icon } from "@iconify/react";

const highlights = [
  {
    id: 1,
    icon: "mdi:shield-check-outline",
    title: "Secure Structure",
    description: "Built with clean architecture and protected user workflows.",
  },
  {
    id: 2,
    icon: "mdi:speedometer",
    title: "Fast Performance",
    description: "Optimized layout, smooth experience, and scalable flow.",
  },
  {
    id: 3,
    icon: "mdi:chart-line",
    title: "Business Focused",
    description: "Designed to support real operations and better decisions.",
  },
];

export default function ProjectAboutSection({ project }) {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-indigo-500">
            Project Overview
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            About This Project
          </h2>

          <div
            className="prose prose-slate mt-6 max-w-none prose-p:text-base prose-p:leading-8 prose-p:text-slate-600"
            dangerouslySetInnerHTML={{ __html: project.about_description }}
          />
        </div>

        <div className="space-y-4">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Icon icon={item.icon} className="text-2xl" />
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}