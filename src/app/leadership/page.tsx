"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { PageTransition } from "@/components/shared/page-transition"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { MeshGradient } from "@/components/shared/mesh-gradient"

const leadership = [
  {
    name: "Akram",
    alias: "Membercatcousin",
    role: "Founder",
    accent: "Founder of Voxelware Studios",
    description:
      "Membercatcousin is the Founder of Voxelware Studios. He established the studio with the vision of creating high-quality software, powerful developer tools, and innovative infrastructure for the Minecraft community. His vision laid the foundation of the company and continues to inspire its long-term direction and values.",
    image: "/images/membercatcousin.png",
  },
  {
    name: "Jeyakasinathan",
    alias: "Frontman",
    role: "Owner & CEO",
    accent: "Owner & CEO of Voxelware Studios",
    description:
      "As Owner and CEO of Voxelware Studios, Jeyakasinathan, also known as Frontman, leads the company's long-term vision, product strategy, and technical innovation. His focus is on delivering high-quality software, infrastructure, and developer tools that empower modern Minecraft ecosystems.",
    image: "/images/fm.jpg",
  },
]

export default function LeadershipPage() {
  return (
    <PageTransition>
      <section className="relative min-h-screen pt-24 pb-16">
        <MeshGradient />
        <div className="container-wide px-4">
          <ScrollReveal className="text-center mb-20">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary mb-4">
              LEADERSHIP
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Meet Our Leadership
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              The people leading Voxelware Studios into the future.
            </p>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-16">
            {leadership.map((member, i) => {
              const isReversed = i % 2 !== 0
              return (
                <ScrollReveal key={member.name} direction={isReversed ? "right" : "left"}>
                  <motion.div
                    className={`glass-strong rounded-2xl p-8 md:p-12 flex flex-col ${
                      isReversed ? "md:flex-row-reverse" : "md:flex-row"
                    } items-center gap-8 md:gap-12 card-hover glow-border`}
                    whileHover={{ scale: 1.005 }}
                  >
                    <div className="relative shrink-0">
                      <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
                      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/10">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 160px, 192px"
                        />
                      </div>
                    </div>

                    <div className={`text-center ${isReversed ? "md:text-right" : "md:text-left"}`}>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {member.name}
                        {member.alias && (
                          <span className="text-muted font-normal">
                            {" "}aka {member.alias}
                          </span>
                        )}
                      </h3>
                      <p className="text-primary font-medium mt-1 mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted/70 mb-4">
                        {member.accent}
                      </p>
                      <p className="text-muted leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
