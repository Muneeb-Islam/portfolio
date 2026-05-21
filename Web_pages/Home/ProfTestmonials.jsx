import { Icon } from '@iconify/react'
import React from 'react'

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Founder, TechFlow",
    text: "He understood our requirements quickly and delivered a clean, scalable product.",
  },
  {
    name: "Sarah Johnson",
    role: "CEO, MarketLab",
    text: "Communication was excellent, and the final product was smooth, fast, and reliable.",
  },
  {
    name: "David Williams",
    role: "CTO, Metro",
    text: "He built our SaaS platform from scratch and made the whole process easy.",
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
              What Clients Say About Me
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
