import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const aboutPoints = [
  {
    title: "Full-stack Development",
    icon: "mdi:code-tags",
  },
  {
    title: "SaaS Product Development",
    icon: "mdi:layers-outline",
  },
  {
    title: "Cloud Deployment & DevOps",
    icon: "mdi:cloud-upload-outline",
  },
  {
    title: "AI-Powered Features",
    icon: "mdi:robot-outline",
  },
  {
    title: "Clean Architecture",
    icon: "mdi:source-branch",
  },
  {
    title: "Long-Term Technical Partner",
    icon: "mdi:handshake-outline",
  },
];
export default function ProfAbout() {
  return (
    <section id="about" className="py-16">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">
                  About Me
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                  Building Digital Products That <span className='text-indigo-500'>Drive Real Results</span>
                </h2>
                <p className="mt-5 leading-7 text-slate-600">
                  I’m a full-stack developer with 7+ years of experience in
                  building SaaS platforms, web applications, mobile apps, and
                  backend systems. I work with startups and businesses to turn ideas
                  into scalable, reliable, and user-friendly products.
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  I handle everything from architecture, development, deployment,
                  and long-term support.
                </p>
    
    
    
                <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
                  <p className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <Icon icon="mdi:email-fast-outline" className="mt-1 text-xl text-indigo-500" />
                    Currently building <strong>MailCub</strong> — an email
                    deliverability and outreach platform for modern teams.
                  </p>
                </div>
    
    
    
                <Link
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-600"
                >
                  More About Me
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
