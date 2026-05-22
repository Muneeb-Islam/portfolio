import { projectsData } from '@/utils/projectsData';
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const projects = [
  {
    title: "MailCub",
    desc: "Email deliverability and outreach platform for modern teams.",
    image: "/images/projects/mailcub.jpg",
    stack: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "AI Content Platform",
    desc: "AI-powered content generation and automation platform.",
    image: "/images/projects/ai-platform.jpg",
    stack: ["Next.js", "OpenAI", "PostgreSQL"],
  },
  {
    title: "Recruitment System",
    desc: "End-to-end recruitment and networking platform.",
    image: "/images/projects/recruitment.jpg",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "CRM Dashboard",
    desc: "Lead management system for business workflows.",
    image: "/images/projects/crm.jpg",
    stack: ["Next.js", "Node.js", "MySQL"],
  },
];

export default function ProfPojects() {
  return (
  <section id="projects" className="bg-slate-50 py-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">
        Featured Projects
      </p>

      <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
        Some Things I’ve Built
      </h2>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projectsData.slice(0,3).map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          key={project.id}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative h-44 bg-slate-200">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500">
              {project.sub_title}
            </p>

            <h3 className="mt-2 text-lg font-black text-slate-950">
              {project.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>

    <div className="mt-10 text-center">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-6 py-3 text-sm font-bold text-indigo-600 shadow-sm transition hover:bg-indigo-50"
      >
        View All Projects
        <Icon icon="mdi:arrow-right" className="text-lg" />
      </Link>
    </div>
  </div>
</section>
  )
}
