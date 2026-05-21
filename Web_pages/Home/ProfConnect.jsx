import { Icon } from '@iconify/react'
import React from 'react'

export default function ProfConnect() {
  return (
    <section id="contact" className="bg-white pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.4fr_0.8fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-black text-slate-950">
              Let’s Connect
            </h2>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <p className="flex items-center gap-3">
                <Icon icon="mdi:email-outline" className="text-xl text-indigo-500" />
                hello@example.com
              </p>
              <p className="flex items-center gap-3">
                <Icon icon="mdi:phone-outline" className="text-xl text-indigo-500" />
                +92 300 1234567
              </p>
              <p className="flex items-center gap-3">
                <Icon icon="mdi:map-marker-outline" className="text-xl text-indigo-500" />
                Pakistan
              </p>
            </div>
          </div>



          <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="text-2xl font-black text-slate-950">
              Let’s Build Something Amazing Together
            </h2>



            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
              />
              <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500">
                <option>Project Type</option>
                <option>SaaS Platform</option>
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>Admin Dashboard</option>
              </select>
              <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500">
                <option>Budget Range</option>
                <option>$500 - $1,000</option>
                <option>$1,000 - $3,000</option>
                <option>$3,000 - $5,000</option>
                <option>$5,000+</option>
              </select>
            </div>



            <textarea
              rows="5"
              placeholder="Your Message"
              className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            />



            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-600"
            >
              Send Message
              <Icon icon="mdi:send" />
            </button>
          </form>



          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <Icon icon="mdi:clock-outline" className="text-4xl text-indigo-500" />
            <h3 className="mt-4 text-xl font-black text-slate-950">
              I usually reply within 24 hours
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Let’s discuss how I can help you build your next big product.
            </p>
          </div>
        </div>
      </section>
  )
}
