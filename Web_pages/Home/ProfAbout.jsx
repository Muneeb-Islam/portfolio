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
            I’m a full-stack developer with 7+ years of experience building SaaS platforms, web applications, mobile apps, and backend systems for startups and businesses.
          </p>
          <p className="mt-3 leading-7 text-slate-600">
            I help turn ideas into scalable, reliable, and user-friendly digital products with clean architecture, modern technology, and a strong focus on real business results.
          </p>
          <p className="mt-3 leading-7 text-slate-600">
            I handle the complete product journey — from architecture and development to deployment, integrations, cloud setup, and long-term technical support.
          </p>

          {/* <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
              <p className="flex items-start gap-3 text-sm font-medium text-slate-700">
                <Icon
                  icon="mdi:email-fast-outline"
                  className="mt-1 shrink-0 text-xl text-indigo-500"
                />

                <span>
                  Currently building{" "}
                  <strong className="font-semibold text-slate-900">MailCub</strong> — an
                  email delivery and transactional communication platform for modern
                  teams.
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
              <p className="flex items-start gap-3 text-sm font-medium text-slate-700">
                <Icon
                  icon="mdi:account-tie-outline"
                  className="mt-1 shrink-0 text-xl text-indigo-500"
                />

                <span>
                  Currently building{" "}
                  <strong className="font-semibold text-slate-900">
                    Metalogix Support Portal
                  </strong>{" "}
                  — an HR and employee support portal for attendance, leaves, payroll,
                  loans, tickets, and feedback.
                </span>
              </p>
            </div>
          </div> */}
          {/* <div className="mt-6 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-4 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <Icon icon="mdi:progress-wrench" className="text-lg" />
              </span>

              <div>
                <h4 className="text-sm font-bold text-slate-900">Currently Building</h4>
                <p className="text-xs font-medium text-slate-500">
                  Active product development projects
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="group rounded-2xl border border-indigo-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon icon="mdi:email-fast-outline" className="text-2xl" />
                </div>

                <h5 className="text-sm font-bold text-slate-900">MailCub</h5>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Email delivery and transactional communication platform for modern teams.
                </p>
              </div>

              <div className="group rounded-2xl border border-indigo-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon icon="mdi:account-group-outline" className="text-2xl" />
                </div>

                <h5 className="text-sm font-bold text-slate-900">
                  Metalogix Support Portal
                </h5>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  HR and employee support portal for attendance, leaves, payroll, tickets,
                  and feedback.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-indigo-50" />

              <div className="relative flex items-start gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200">
                  <Icon icon="mdi:email-fast-outline" className="text-2xl" />
                </div>

                <div>
                  <span className="mb-1 inline-flex rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-600">
                    Currently Building
                  </span>

                  <h4 className="text-sm font-bold text-slate-900">MailCub</h4>

                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Email delivery and transactional communication platform for modern
                    teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-indigo-50" />

              <div className="relative flex items-start gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200">
                  <Icon icon="mdi:account-group-outline" className="text-2xl" />
                </div>

                <div>
                  <span className="mb-1 inline-flex rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-600">
                    Currently Building
                  </span>

                  <h4 className="text-sm font-bold text-slate-900">
                    Metalogix Support Portal
                  </h4>

                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    HR and employee support portal for attendance, leaves, payroll,
                    tickets, and feedback.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Currently Building</h4>
                <p className="mt-1 text-xs text-slate-500">
                  Active products under development
                </p>
              </div>

              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                2 Projects
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

              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:border-indigo-100 hover:bg-indigo-50/60">
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
              </div>
            </div>
          </div>



          <Link
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-600"
          >
            Explore My Experience
          </Link>
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
