import { Icon } from '@iconify/react'
import React from 'react'

const testimonials = [
  {
    name: "Startup Founder",
    role: "SaaS Product Client",
    text: "He understood our product requirements quickly and delivered a clean, scalable web application with smooth performance.",
  },
  {
    name: "Business Owner",
    role: "Web Application Client",
    text: "Communication was clear throughout the project. The final product was delivered on time, well-structured, and easy to manage.",
  },
  {
    name: "Product Lead",
    role: "SaaS Platform Client",
    text: "He helped us build a SaaS platform from scratch, including frontend, backend, dashboard, and deployment support.",
  },
];

export default function ProfTestmonials() {
  return (
    <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Client Feedback From SaaS, Web App & Mobile App Projects
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Icon icon="mdi:format-quote-open" className="text-4xl text-indigo-400" />
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                <div className="mt-6">
                  <h3 className="font-black text-slate-950">{item.name}</h3>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
