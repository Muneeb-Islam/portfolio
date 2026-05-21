import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export default function ProfIdea() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#080827] p-8 text-white shadow-2xl sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-indigo-400 bg-indigo-500/20">
                <Icon icon="mdi:rocket-launch-outline" className="text-3xl text-indigo-300" />
              </div>
              <h2 className="mt-5 text-3xl font-black">
                Have a SaaS or App Idea?
              </h2>
              <p className="mt-2 max-w-2xl text-white/70">
                Let’s build a scalable product that grows your business.
              </p>
            </div>



            <Link
              href="#contact"
              className="rounded-xl bg-indigo-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>
  )
}
