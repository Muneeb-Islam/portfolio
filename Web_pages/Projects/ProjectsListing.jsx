"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useMemo, useState } from "react";
import { projectsData } from "@/utils/projectsData";

const filters = [
  "All Projects",
  "Web Development",
  "Mobile Apps",
  "SaaS Platforms",
  "DevOps",
  "UI / UX",
];

function getProjectCategory(project) {
  const text = `${project.title} ${project.description} ${project.tags?.join(" ")}`.toLowerCase();

  if (
    text.includes("mobile") ||
    text.includes("react native") ||
    text.includes("flutter") ||
    text.includes("app")
  ) {
    return "Mobile Apps";
  }

  if (
    text.includes("saas") ||
    text.includes("crm") ||
    text.includes("platform") ||
    text.includes("dashboard")
  ) {
    return "SaaS Platforms";
  }

  if (
    text.includes("devops") ||
    text.includes("docker") ||
    text.includes("ci/cd") ||
    text.includes("deployment") ||
    text.includes("aws")
  ) {
    return "DevOps";
  }

  if (
    text.includes("ui") ||
    text.includes("ux") ||
    text.includes("frontend") ||
    text.includes("product ui")
  ) {
    return "UI / UX";
  }

  return "Web Development";
}

export default function ProjectsGridSection() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") return projectsData;

    return projectsData.filter(
      (project) => getProjectCategory(project) === activeFilter
    );
  }, [activeFilter]);

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        {/* <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                  isActive
                    ? "border-indigo-500 bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div> */}

        {/* Projects Grid */}
        <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-indigo-500">
                  {project.sub_title || "Featured Project"}
                </p>

                <Link href={`/projects/${project.slug}`}>
                  <h3 className="mt-3 text-xl font-black text-slate-950 transition group-hover:text-indigo-600">
                    {project.title}
                  </h3>
                </Link>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-black text-indigo-600 transition hover:gap-3"
                >
                  View Details
                  <Icon icon="mdi:arrow-right" className="text-lg" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="mt-14 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
            <h3 className="text-xl font-black text-slate-950">
              No projects found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try selecting another project category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}