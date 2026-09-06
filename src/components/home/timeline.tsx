"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SectionHeader } from "@/components/shared/section-header"
import { timelineEvents as getFallbackTimeline } from "@/data/site"

export function Timeline() {
  const [events, setEvents] = useState(getFallbackTimeline)

  useEffect(() => {
    fetch("/api/site")
      .then((r) => r.json())
      .then((site) => {
        if (site?.timelineEvents) setEvents(site.timelineEvents)
      })
      .catch(() => {})
  }, [])

  return (
    <section className="section-padding relative">
      <div className="container-wide px-4">
        <SectionHeader
          badge="Timeline"
          title="Our journey"
          description="The story of Voxelware Studios from founding to the future."
        />

        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

          <div className="space-y-12">
            {events.map((event, i) => (
              <ScrollReveal
                key={`${event.year}-${event.title}`}
                delay={i * 0.15}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div className="relative flex items-start gap-6 md:gap-0">
                  <motion.div
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.15, type: "spring" }}
                  />

                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}
                  >
                    <span className="text-sm font-bold text-primary">{event.year}</span>
                    <h3 className="text-lg font-semibold mt-1">{event.title}</h3>
                    <p className="text-sm text-muted mt-1">{event.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
