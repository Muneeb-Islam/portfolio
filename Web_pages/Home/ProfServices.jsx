import { Icon } from '@iconify/react'
import Link from 'next/link';
import React from 'react'

const services = [
  {
    title: "SaaS Platform Development",
    desc: "Build scalable SaaS platforms with user accounts, subscriptions, billing, dashboards, and secure backend systems.",
    icon: "mdi:application-cog-outline",
  },
  {
    title: "Web Application Development",
    desc: "Develop fast, responsive, and production-ready web applications using modern frontend and backend technologies.",
    icon: "mdi:web",
  },
  {
    title: "Mobile App Development",
    desc: "Create cross-platform mobile apps using React Native and Flutter with clean UI and smooth user experience.",
    icon: "mdi:cellphone-cog",
  },
  {
    title: "Admin Dashboard Development",
    desc: "Build powerful admin dashboards with analytics, reports, tables, role management, and business insights.",
    icon: "mdi:view-dashboard-outline",
  },
  {
    title: "Backend API Development",
    desc: "Develop secure backend APIs with authentication, database management, integrations, and scalable architecture.",
    icon: "mdi:api",
  },
  {
    title: "AI-Powered Features",
    desc: "Add smart AI features, automation, chatbots, recommendations, and data-driven functionality to your product.",
    icon: "mdi:robot-outline",
  },
  {
    title: "Subscription & Payment Systems",
    desc: "Integrate Stripe, invoices, pricing plans, billing flows, payment tracking, and subscription management.",
    icon: "mdi:credit-card-sync-outline",
  },
  {
    title: "Cloud Deployment & DevOps",
    desc: "Deploy production-ready apps on AWS, VPS, Docker, CI/CD pipelines, and secure cloud infrastructure.",
    icon: "mdi:cloud-sync-outline",
  },
];

export default function ProfServices() {
  return (
    <section id="services" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Full-Stack Development Services for SaaS, Web Apps & Mobile Apps
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500">
                <Icon icon={service.icon} className="text-2xl" />
              </div>
              <h3 className="mt-5 text-lg font-black text-slate-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <p className=" leading-7 text-slate-600 text-center mx-auto max-w-150">
          Have an idea for a SaaS platform, web app, or mobile app? Let’s turn it into a scalable, production-ready digital product.
          </p>
        <div className="mt-3 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-6 py-3 text-sm font-bold text-indigo-600 shadow-sm transition hover:bg-indigo-50"
          >
            Start a Project
            <Icon icon="mdi:arrow-right" className="text-lg" />
          </Link>
        </div>
      </div>
    </section>
  )
}
