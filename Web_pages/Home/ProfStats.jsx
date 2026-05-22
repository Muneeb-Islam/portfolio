import { Icon } from '@iconify/react'
import React from 'react'

const stats = [
  {
    value: "7+",
    label: "Years Experience",
    icon: "mdi:calendar-star",
  },
  {
    value: "20+",
    label: "Projects Completed",
    icon: "mdi:rocket-launch-outline",
  },
  {
    value: "30+",
    label: "Happy Clients",
    icon: "mdi:account-group-outline",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    icon: "mdi:star-outline",
  },
  {
    value: "24/7",
    label: "Support Available",
    icon: "mdi:headset",
  },
];

export default function ProfStats() {
  return (
    <section className="relative z-20 -mt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((item) => (
              <div
                key={item.label}
                className="border-b border-slate-200 p-6 text-center last:border-b-0 sm:border-r lg:border-b-0"
              >
                <Icon
                  icon={item.icon}
                  className="mx-auto text-3xl text-indigo-500"
                />
                <h3 className="mt-3 text-2xl font-black text-indigo-600">
                  {item.value}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
