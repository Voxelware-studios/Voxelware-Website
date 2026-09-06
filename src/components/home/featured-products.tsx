"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SectionHeader } from "@/components/shared/section-header"
import { projects as fallback } from "@/data/projects"

export function FeaturedProducts() {
  const [projects, setProjects] = useState(fallback.slice(0, 3))

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => {
        if (data?.length) setProjects(data.slice(0, 3))
      })
      .catch(() => {})
  }, [])

  return (
    <section className="section-padding relative">
      <div className="container-wide px-4">
        <SectionHeader
          badge="Featured Products"
          title="Our flagship solutions"
          description="Production-tested plugins and tools trusted by Minecraft communities worldwide."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id || project.slug} delay={i * 0.15}>
              <Link href={`/projects/${project.slug || project.id}`}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/30 backdrop-blur-sm p-8 card-hover h-full"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden">
                        {project.icon?.startsWith("/") ? (
                          <Image src={project.icon} alt={`${project.name} logo`} width={48} height={48} className="object-contain p-1" />
                        ) : (
                          <span className="text-2xl">{project.icon || "📦"}</span>
                        )}
                      </div>
                      <Badge
                        variant={
                          project.status === "Released"
                            ? "success"
                            : project.status === "Insider"
                              ? "warning"
                              : "default"
                        }
                      >
                        v{project.version}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-sm text-muted mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {(typeof project.technologies === "string"
                        ? JSON.parse(project.technologies || "[]")
                        : project.technologies || []
                      )
                        .slice(0, 3)
                        .map((tech: string) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-md bg-white/5 text-muted border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-primary font-medium group/link">
                      <span>View details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="group">
                View all projects
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
