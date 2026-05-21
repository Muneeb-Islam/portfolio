import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export default function ProfHero() {
  return (
    <section className="relative overflow-hidden bg-[#07071f] pt-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.45),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.35),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />



        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-28 pt-0 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for new projects
            </div>



            <h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              I Build Complete{" "}
              <span className="text-indigo-400">SaaS Platforms</span>, Web Apps
              & Mobile Apps
            </h2>



            <p className="mt-5 max-w-xl text-xl font-medium text-white">
              From Idea to Production
            </p>



            <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
              I help startups and businesses build scalable, production-ready
              applications with modern technologies and clean architecture.
            </p>



            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-indigo-500/30 transition hover:bg-indigo-400"
              >
                Hire Me
                <Icon icon="mdi:arrow-right" className="text-lg" />
              </Link>



              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                View Projects
              </Link>
            </div>
          </div>



          <div className="relative">
            <div className="absolute left-4 top-16 z-10 rounded-2xl bg-indigo-500 px-5 py-4 text-center shadow-2xl shadow-indigo-500/40">
              <p className="text-2xl font-black">7+</p>
              <p className="text-xs font-medium text-white/80">Years</p>
            </div>



            <div className="relative mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-[#11112f] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm font-semibold text-white/70">
                    Dashboard
                  </p>
                  <Icon icon="mdi:dots-horizontal" className="text-white/50" />
                </div>



                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs text-white/50">Total Users</p>
                    <h3 className="mt-2 text-2xl font-black">24,980</h3>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs text-white/50">Revenue</p>
                    <h3 className="mt-2 text-2xl font-black">$98,540</h3>
                  </div>
                </div>



                <div className="mt-5 h-36 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-4">
                  <div className="flex h-full items-end gap-2">
                    {[45, 70, 50, 90, 65, 100, 80, 120, 95].map((height) => (
                      <div
                        key={height}
                        className="flex-1 rounded-t-lg bg-indigo-400"
                        style={{ height: `${height}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>



              <div className="absolute -right-8 bottom-10 hidden w-36 rounded-3xl border border-white/10 bg-[#0b0b28] p-4 shadow-2xl lg:block">
                <p className="text-xs text-white/50">Analytics</p>
                <div className="mt-4 flex h-20 w-20 items-center justify-center rounded-full border-8 border-indigo-500 text-lg font-black">
                  72%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
