import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const aboutPoints = [
  {
    title: "Full-Stack Development",
    icon: "mdi:code-braces",
  },
  {
    title: "SaaS Product Development",
    icon: "mdi:application-cog-outline",
  },
  {
    title: "Web & Mobile App Development",
    icon: "mdi:devices",
  },
  {
    title: "Cloud Deployment & DevOps",
    icon: "mdi:cloud-sync-outline",
  },
  {
    title: "AI-Powered Features",
    icon: "mdi:robot-outline",
  },
  {
    title: "Long-Term Technical Support",
    icon: "mdi:handshake-outline",
  },
];
export default function ProfAbout() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">
            ABOUT ME
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Full-Stack Developer Building SaaS Platforms, <span className='text-indigo-500'>Web Apps & Mobile Apps</span>
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            I’m a full-stack developer with 7+ years of experience building SaaS platforms, web apps, mobile apps, and backend systems for startups and businesses.
          </p>

          <p className="mt-3 leading-7 text-slate-600">
            I help turn ideas into scalable digital products, handling everything from planning and development to deployment, integrations, and long-term support.
          </p>
          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Currently Building</h4>
                <p className="mt-1 text-xs text-slate-500">
                  Active products under development
                </p>
              </div>

              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                1 Project
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/60">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                  <Icon icon="mdi:email-fast-outline" className="text-2xl" />
                </div>

                <div>
                  <h5 className="text-sm font-bold text-slate-900">MailCub</h5>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Email delivery and transactional communication platform for modern
                    teams.
                  </p>
                </div>
              </div>

              {/* <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/60">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                  <Icon icon="mdi:account-tie-outline" className="text-2xl" />
                </div>

                <div>
                  <h5 className="text-sm font-bold text-slate-900">
                    Metalogix Support Portal
                  </h5>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    HR and employee support portal for attendance, leaves, payroll,
                    tickets, and feedback.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="flex gap-3 mt-7 items-center">
            <Link
            href="/projects"
            className=" inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-600"
          >
            Explore My Experience
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-6 py-3 text-sm font-bold text-indigo-600 shadow-sm transition hover:bg-indigo-50"
          >
            Start a Project
            <Icon icon="mdi:arrow-right" className="text-lg" />
          </Link>
          </div>
        </div>



        <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl lg:grid-cols-2">
          <div className="space-y-3">
            {aboutPoints.map((point) => (
              <div
                key={point.title}
                className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <div className="flex items-center gap-3">
                  <Icon icon={point.icon} className="text-2xl text-indigo-500" />
                  <p className="text-sm font-bold text-slate-800">
                    {point.title}
                  </p>
                </div>
                <Icon icon="mdi:chevron-right" className="text-slate-400" />
              </div>
            ))}
          </div>



          <div className="relative hidden overflow-hidden rounded-2xl bg-slate-900 lg:block">
            <Image
              src="/assets/2.png"
              alt="Developer workspace"
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
