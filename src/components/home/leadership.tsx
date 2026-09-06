"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SectionHeader } from "@/components/shared/section-header"

const founder = {
  name: "Jeyakasinathan",
  alias: "Frontman",
  role: "Founder & CEO of Voxelware Studios",
  description:
    "As Founder and CEO of Voxelware Studios, Jeyakasinathan aka Frontman leads the organization's long-term vision, product strategy, and technical innovation. His focus is on delivering high-quality software, infrastructure, and developer tools that empower modern Minecraft ecosystems.",
}

export function Leadership() {
  return (
    <section className="section-padding relative">
      <div className="container-wide px-4">
        <SectionHeader
          badge="Leadership"
          title="Meet the founder"
          description="The vision driving Voxelware Studios forward."
        />

        <ScrollReveal>
          <motion.div
            className="max-w-4xl mx-auto glass-strong rounded-2xl p-8 md:p-12"
            whileHover={{ scale: 1.005 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="relative shrink-0">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/10">
                  <Image
                    src="/images/fm.jpg"
                    alt={founder.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold">
                  {founder.name}{" "}
                  <span className="text-muted font-normal">
                    aka {founder.alias}
                  </span>
                </h3>
                <p className="text-primary font-medium mt-1 mb-4">
                  {founder.role}
                </p>
                <p className="text-muted leading-relaxed">
                  {founder.description}
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
