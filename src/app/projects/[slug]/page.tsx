"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, Check, Download, BookOpen, MessageSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { PageTransition } from "@/components/shared/page-transition"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { MeshGradient } from "@/components/shared/mesh-gradient"
import { projects as fallback } from "@/data/projects"

function parseField(val: any) {
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

export default function ProjectDetailPage() {
  const params = useParams()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => {
        const found = data?.find(
          (p: any) => p.slug === params.slug || p.id === params.slug
        )
        if (found) setProject(found)
        else {
          const fb = fallback.find((p) => p.id === params.slug)
          if (fb) setProject(fb)
        }
        setLoading(false)
      })
      .catch(() => {
        const fb = fallback.find((p) => p.id === params.slug)
        if (fb) setProject(fb)
        setLoading(false)
      })
  }, [params.slug])

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-muted">Loading...</div>
        </div>
      </PageTransition>
    )
  }

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project not found</h1>
            <Link href="/projects">
              <Button variant="outline">Back to projects</Button>
            </Link>
          </div>
        </div>
      </PageTransition>
    )
  }

  const features = parseField(project.features)
  const technologies = parseField(project.technologies)
  const changelog = parseField(project.changelog)
  const faq = parseField(project.faq)

  return (
    <PageTransition>
      <section className="relative min-h-screen pt-24 pb-16">
        <MeshGradient />
        <div className="container-wide px-4">
          <ScrollReveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to projects
            </Link>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center overflow-hidden">
                  {project.icon?.startsWith("/") ? (
                    <Image src={project.icon} alt={`${project.name} logo`} width={64} height={64} className="object-contain p-1.5" />
                  ) : (
                    <span className="text-3xl">{project.icon || "📦"}</span>
                  )}
                </div>
                <div>
                  <Badge
                    variant={
                      project.status === "Released"
                        ? "success"
                        : project.status === "Insider"
                          ? "warning"
                          : "default"
                    }
                    className="mb-2"
                  >
                    {project.status}
                  </Badge>
                  <p className="text-sm text-muted">Version {project.version}</p>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.name}</h1>
              <p className="text-xl text-primary font-medium mb-4">{project.tagline}</p>
              <p className="text-lg text-muted mb-8 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.downloads && (
                  <a href={project.downloads} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient" size="lg" className="group">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </a>
                )}
                <Button variant="secondary" size="lg" className="group">
                  <BookOpen className="w-4 h-4" />
                  Documentation
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-muted border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 via-surface/50 to-secondary/10 flex items-center justify-center overflow-hidden">
                  {project.screenshots?.[0] ? (
                    <Image
                      src={project.screenshots[0]}
                      alt={`${project.name} logo`}
                      fill
                      className="object-contain p-8"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="text-6xl opacity-30">{project.icon || "📦"}</div>
                  )}
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-[60px]" />
              </div>
            </ScrollReveal>
          </div>

          <Separator className="mb-16" />

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl font-bold mb-6">Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature: string, i: number) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                    >
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal delay={0.2}>
                <div className="glass-strong rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    {project.downloads && (
                      <a href={project.downloads} target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" className="w-full justify-start">
                          <Download className="w-4 h-4" />
                          Download Latest
                        </Button>
                      </a>
                    )}
                    <Button variant="secondary" className="w-full justify-start">
                      <BookOpen className="w-4 h-4" />
                      Documentation
                    </Button>
                    <Button variant="secondary" className="w-full justify-start">
                      <MessageSquare className="w-4 h-4" />
                      Get Support
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {changelog.length > 0 && (
            <>
              <Separator className="mb-16" />
              <ScrollReveal>
                <h2 className="text-2xl font-bold mb-8">Changelog</h2>
                <div className="space-y-6">
                  {changelog.map((entry: any) => (
                    <div key={entry.version} className="glass rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">v{entry.version}</h3>
                        <span className="text-sm text-muted">{entry.date}</span>
                      </div>
                      <ul className="space-y-2">
                        {entry.notes.map((note: string) => (
                          <li key={note} className="text-sm text-muted flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </>
          )}

          {faq.length > 0 && (
            <>
              <Separator className="mb-16" />
              <ScrollReveal>
                <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faq.map((item: any) => (
                    <div key={item.question} className="glass rounded-xl p-6">
                      <h3 className="font-medium mb-2">{item.question}</h3>
                      <p className="text-sm text-muted">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
