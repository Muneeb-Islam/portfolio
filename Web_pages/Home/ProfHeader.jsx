import Link from 'next/link'
import React from 'react'

export default function ProfHeader() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400 bg-white/10 text-lg font-bold text-white backdrop-blur">
            A
          </div>
          <div>
            <h1 className="text-sm font-bold leading-none text-white">
              Ali Developer
            </h1>
            <p className="mt-1 text-xs text-white/60">
              Full Stack Developer
            </p>
          </div>
        </Link>



        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
          <Link href="/#about" className="hover:text-white">
            About
          </Link>
          <Link href="/#services" className="hover:text-white">
            Services
          </Link>
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="/#process" className="hover:text-white">
            Process
          </Link>
          <Link href="/#contact" className="hover:text-white">
            Contact
          </Link>
        </nav>
        <Link
          href="#contact"
          className="rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
        >
          Hire Me
        </Link>
      </div>
    </header>
  )
}
