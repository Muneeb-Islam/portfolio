import { Icon } from '@iconify/react';
import React from 'react'

const whyMe = [
  {
    title: "Complete Ownership",
    desc: "I handle the full product journey from planning and development to deployment and support.",
    icon: "mdi:shield-check-outline",
  },
  {
    title: "Scalable Solutions",
    desc: "I build products with performance, security, and future growth in mind.",
    icon: "mdi:trending-up",
  },
  {
    title: "Clean Code",
    desc: "I write maintainable, modular, and well-structured code for long-term stability.",
    icon: "mdi:code-braces",
  },
  {
    title: "Clear Communication",
    desc: "You get regular updates, transparent progress, and smooth collaboration.",
    icon: "mdi:message-text-outline",
  },
  {
    title: "Reliable Delivery",
    desc: "I deliver high-quality work on time with proper testing and attention to detail.",
    icon: "mdi:clock-check-outline",
  },
  {
    title: "Long-Term Support",
    desc: "I provide ongoing support, improvements, and technical guidance after launch.",
    icon: "mdi:lifebuoy",
  },
];

export default function ProfChooseMe() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">
            Why Work With Me
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Why Clients Choose Me
          </h2>
        </div>
        <p className=" leading-3 mt-3 text-slate-600 text-center">
          I focus on clean development, reliable delivery, and long-term product growth.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyMe.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Icon icon={item.icon} className="text-4xl text-indigo-500" />
              <h3 className="mt-4 text-lg font-black text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}
