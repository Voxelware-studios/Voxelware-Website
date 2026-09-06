"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from "@/components/shared/page-transition"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SectionHeader } from "@/components/shared/section-header"
import { MeshGradient } from "@/components/shared/mesh-gradient"
import { projects as fallback, projectCategories } from "@/data/projects"

export default function ProjectsPage() {
  const [projects, setProjects] = useState(fallback)
  const [activeCategory, setActiveCategory] = useState("all")

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => {
        if (data?.length) setProjects(data)
      })
      .catch(() => {})
  }, [])

  const parseField = (val: any) => {
    if (Array.isArray(val)) return val
    if (typeof val === "string") {
      try {
        return JSON.parse(val)
      } catch {
        return []
      }
    }
    return []
  }

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <PageTransition>
      <section className="relative min-h-screen pt-24 pb-16">
        <MeshGradient />
        <div className="container-wide px-4">
          <SectionHeader
            badge="Projects"
            title="Our software portfolio"
            description="Production-grade plugins, tools, and infrastructure for Minecraft communities."
          />

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {projectCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "bg-white/5 text-muted hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id || project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={`/projects/${project.slug || project.id}`}>
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/30 backdrop-blur-sm p-6 card-hover h-full">
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
                            {project.status}
                          </Badge>
                        </div>

                        <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                        <p className="text-sm text-muted mb-1">{project.tagline}</p>
                        <p className="text-xs text-muted/60 mb-4">v{project.version}</p>
                        <p className="text-sm text-muted mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {parseField(project.technologies)
                            .slice(0, 4)
                            .map((tech: string) => (
                              <span
                                key={tech}
                                className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-muted border border-white/5"
                              >
                                {tech}
                              </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-1 text-sm text-primary font-medium">
                          <span>Learn more</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  )
}
