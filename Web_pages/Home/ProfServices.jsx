import { Icon } from '@iconify/react'
import React from 'react'

const services = [
  {
    title: "SaaS Platform Development",
    desc: "Complete SaaS platforms with subscriptions, billing, and user management.",
    icon: "mdi:application-brackets-outline",
  },
  {
    title: "Web Application Development",
    desc: "High-performance web apps with modern stacks and clean architecture.",
    icon: "mdi:web",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps using React Native and Flutter.",
    icon: "mdi:cellphone",
  },
  {
    title: "Admin Dashboard Development",
    desc: "Powerful dashboards with analytics, reports, tables, and role management.",
    icon: "mdi:view-dashboard-outline",
  },
  {
    title: "Backend API Development",
    desc: "Robust APIs, authentication, integrations, and microservices.",
    icon: "mdi:api",
  },
  {
    title: "AI-Powered Features",
    desc: "AI integrations, automation, smart features, and data intelligence.",
    icon: "mdi:brain",
  },
  {
    title: "Subscription & Payment Systems",
    desc: "Stripe, invoices, plans, billing flows, and payment management.",
    icon: "mdi:credit-card-outline",
  },
  {
    title: "Cloud Deployment & DevOps",
    desc: "AWS, VPS, Docker, CI/CD pipelines, and production deployment.",
    icon: "mdi:cloud-cog-outline",
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
                        What I Can Help You Build
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
        </section>
    )
}
