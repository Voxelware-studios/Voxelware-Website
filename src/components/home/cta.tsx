"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

const fallback = {
  headline: "Ready to build something extraordinary?",
  description:
    "Join the growing community of server operators who trust Voxelware for their infrastructure needs.",
}

export function CTA() {
  const [data, setData] = useState(fallback)

  useEffect(() => {
    fetch("/api/site")
      .then((r) => r.json())
      .then((site) => {
        if (site?.cta) setData(site.cta)
      })
      .catch(() => {})
  }, [])

  return (
    <section className="section-padding relative">
      <div className="container-wide px-4">
        <ScrollReveal>
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 via-surface/50 to-secondary/5 p-8 md:p-16 text-center"
            whileHover={{ scale: 1.005 }}
          >
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {data.headline.split("extraordinary")[0]}
                <span className="text-gradient">extraordinary?</span>
              </h2>
              <p className="text-lg text-muted max-w-xl mx-auto mb-8">
                {data.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/projects">
                  <Button size="xl" variant="gradient" className="group">
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/discord">
                  <Button size="xl" variant="secondary" className="group">
                    <MessageSquare className="w-4 h-4" />
                    Join Discord
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
