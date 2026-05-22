import { Icon } from '@iconify/react';
import React from 'react'

const techStack = [
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Next.js",
    icon: "devicon:nextjs",
  },
//   {
//     name: "TypeScript",
//     icon: "logos:typescript-icon",
//   },
//   {
//     name: "Tailwind CSS",
//     icon: "logos:tailwindcss-icon",
//   },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Express.js",
    icon: "simple-icons:express",
  },
  {
    name: "NestJS",
    icon: "logos:nestjs",
  },
  {
    name: "MongoDB",
    icon: "devicon:mongodb",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "React Native",
    icon: "logos:react",
  },
  {
    name: "Flutter",
    icon: "logos:flutter",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
];

export default function ProfTech() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">
                        Tech Stack
                    </p>
                    <h2 className="mt-3 text-3xl font-black text-slate-950">
                        Tech Stack I Use to Build SaaS, Web Apps & Mobile Apps
                    </h2>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                        >
                            <Icon icon={tech.icon} className="text-3xl" />
                            <span className="text-sm font-bold text-slate-700">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
