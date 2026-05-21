import { Icon } from '@iconify/react'
import React from 'react'

const processSteps = [
    {
        title: "Understand Idea & Goals",
        icon: "mdi:lightbulb-on-outline",
    },
    {
        title: "Plan Architecture",
        icon: "mdi:sitemap-outline",
    },
    {
        title: "Design UI / UX Flow",
        icon: "mdi:palette-outline",
    },
    {
        title: "Develop Frontend",
        icon: "mdi:monitor-dashboard",
    },
    {
        title: "Build Backend APIs",
        icon: "mdi:server-outline",
    },
    {
        title: "Test & Optimize",
        icon: "mdi:bug-check-outline",
    },
    {
        title: "Deploy to Cloud",
        icon: "mdi:cloud-upload-outline",
    },
    {
        title: "Support & Scale",
        icon: "mdi:chart-line",
    },
];

export default function ProfProcess() {
    return (
        <section id="process" className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">
                        My Process
                    </p>
                    <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                        How I Build Your Product
                    </h2>
                </div>

                <div className="mt-14 relative grid gap-6 sm:grid-cols-2 lg:grid-cols-8">
                    <div className="absolute hidden lg:block left-0 w-full right-0 top-6  px-14">
                        <div className='w-full border border-indigo-500 border-dashed '>
                        </div>
                        <div className="flex items-center justify-between px-20 -mt-[5px]">
                            <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                            <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                            <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                            <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                            <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                            <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                            <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                        </div>
                    </div>
                    {processSteps.map((step, index) => (
                        <div key={step.title} className="relative text-center">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/25">
                                <Icon icon={step.icon} className="text-2xl" />
                            </div>
                            <p className="mt-4 text-sm font-bold text-slate-800">
                                {index + 1}. {step.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
