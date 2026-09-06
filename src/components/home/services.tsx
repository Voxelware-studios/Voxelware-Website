"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SectionHeader } from "@/components/shared/section-header"
import { services as getFallbackServices } from "@/data/site"

export function Services() {
  const [services, setServices] = useState(getFallbackServices)

  useEffect(() => {
    fetch("/api/site")
      .then((r) => r.json())
      .then((site) => {
        if (site?.services) setServices(site.services)
      })
      .catch(() => {})
  }, [])

  return (
    <section className="section-padding relative">
      <div className="container-wide px-4">
        <SectionHeader
          badge="Services"
          title="What we build"
          description="End-to-end software solutions for Minecraft communities and server operators."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <motion.div
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-surface/30 backdrop-blur-sm p-6 card-hover h-full"
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-white/70 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
