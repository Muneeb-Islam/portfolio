import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];

const servicesLinks = [
  {
    label: "SaaS Development",
    href: "/services#saas-development",
  },
  {
    label: "Web Apps",
    href: "/services#web-apps",
  },
  {
    label: "Mobile Apps",
    href: "/services#mobile-apps",
  },
  {
    label: "Cloud Deployment",
    href: "/services#cloud-deployment",
  },
];

const socialLinks = [
  {
    icon: "mdi:linkedin",
    href: "https://www.linkedin.com/in/m-muneeb-islam/",
    label: "LinkedIn",
  },
  {
    icon: "mdi:github",
    href: "https://github.com/Muneeb-Islam",
    label: "GitHub",
  },
  // {
  //   icon: "mdi:twitter",
  //   href: "https://twitter.com/",
  //   label: "Twitter",
  // },
  {
    icon: "mdi:email",
    href: "mailto:muneebch6@gmail.com",
    label: "Email",
  },
];

export default function ProfFooter() {
  return (
    <footer className="bg-[#07071f] py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400 text-lg font-bold">
              A
            </div>
            <div>
              <h3 className="text-sm font-bold">Ali Developer</h3>
              <p className="text-xs text-white/50">Full Stack Developer</p>
            </div>
          </Link>

          <p className="mt-4 text-sm leading-6 text-white/60">
            Building scalable SaaS platforms, web apps, and mobile apps.
          </p>
        </div>

        <div>
          <h4 className="font-bold">Quick Links</h4>

          <div className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-white/60 transition hover:text-indigo-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold">Services</h4>

          <div className="mt-4 space-y-2 text-sm">
            {servicesLinks.map((link) => (
              <p
                key={link.label}
                // href={link.href}
                className="block text-white/60 "
              >
                {link.label}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold">Let’s Connect</h4>

          <div className="mt-4 flex gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-indigo-500"
              >
                <Icon icon={item.icon} className="text-xl" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}