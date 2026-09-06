"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ArrowDown, ExternalLink, Zap, Layers, Server, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/shared/page-transition"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SectionHeader } from "@/components/shared/section-header"
import { MeshGradient } from "@/components/shared/mesh-gradient"
import { projects as allProjects } from "@/data/projects"

const principles = [
  {
    title: "Performance First",
    description: "Build systems that remain lightweight and scalable under real-world load.",
    icon: Zap,
  },
  {
    title: "Modern Architecture",
    description: "Use modern technologies and clean architecture to deliver reliable software.",
    icon: Layers,
  },
  {
    title: "Server Focused",
    description: "Build around the real needs of server administrators and their communities.",
    icon: Server,
  },
  {
    title: "Built to Scale",
    description: "Design projects with future growth and long-term maintainability in mind.",
    icon: TrendingUp,
  },
]

export default function AboutPage() {
  const coretuff = allProjects.find((p) => p.id === "coretuff")
  const featuredProjects = allProjects.slice(0, 3)

  return (
    <PageTransition>
      <section className="relative min-h-screen pt-24 pb-16">
        <MeshGradient />

        {/* Hero */}
        <div className="container-wide px-4 text-center pt-12 md:pt-20">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary mb-4">
                About
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                VOXELWARE{" "}
                <span className="text-gradient">Studios</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
                Modern software.<br className="hidden sm:inline" />
                Minecraft infrastructure.<br className="hidden sm:inline" />
                Built for what comes next.
              </p>
              <p className="text-base md:text-lg text-muted/70 max-w-2xl mx-auto mb-8 leading-relaxed">
                Building modern, performance-focused Minecraft software and infrastructure
                for the next generation of servers.
              </p>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Link href="/projects">
                <Button size="xl" variant="gradient" className="group">
                  Explore CoreTuff
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#what-we-build">
                <Button size="xl" variant="secondary" className="group">
                  Learn more
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* What We Build */}
        <div id="what-we-build" className="container-wide px-4">
          <SectionHeader
            badge="What We Build"
            title="Software for Minecraft and beyond"
            description="Voxelware develops tools, infrastructure, and software with a focus on performance, reliability, and modern architecture."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              "Minecraft server infrastructure",
              "Server administration tools",
              "Performance-focused plugins",
              "Developer tooling and APIs",
              "Web-based server management",
              "Quality-of-life software",
            ].map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.08}>
                <motion.div
                  className="flex items-start gap-3 p-5 rounded-xl border border-white/10 bg-surface/30 backdrop-blur-sm card-hover"
                  whileHover={{ y: -2 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                  <span className="text-sm text-white/80">{item}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Our Flagship Project */}
        <div className="container-wide px-4 mt-24">
          <SectionHeader
            badge="Flagship Project"
            title="CoreTuff"
            description="A modern, performance-focused Minecraft core and server-management platform for Paper and Folia."
          />

          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <motion.div
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/30 backdrop-blur-sm p-8 md:p-12 card-hover glow-border"
                whileHover={{ scale: 1.005 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    {coretuff?.icon && (
                      <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden">
                        <Image
                          src={coretuff.icon}
                          alt="CoreTuff logo"
                          width={56}
                          height={56}
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold">CoreTuff</h3>
                      <p className="text-sm text-primary font-medium">v{coretuff?.version || "2.0.0-nightly-2"}</p>
                    </div>
                  </div>

                  <p className="text-muted leading-relaxed mb-6">
                    CoreTuff combines server utilities, moderation tools, management features, diagnostics, and
                    web-based administration into a single, high-performance platform. Built for Paper and Folia
                    servers that demand reliability at scale.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {(coretuff?.technologies || ["Paper API", "Kotlin", "H2 Database", "Redis"]).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-muted border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link href="/projects/coretuff">
                    <Button variant="gradient" size="lg" className="group">
                      View CoreTuff
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Our Approach */}
        <div className="container-wide px-4 mt-24">
          <SectionHeader
            badge="Our Approach"
            title="How we build"
            description="The principles guiding every project we take on."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {principles.map((principle, i) => (
              <ScrollReveal key={principle.title} delay={i * 0.1}>
                <motion.div
                  className="rounded-xl border border-white/10 bg-surface/30 backdrop-blur-sm p-6 card-hover h-full"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <principle.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{principle.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Infonix Studios */}
        <div className="container-wide px-4 mt-24">
          <SectionHeader
            badge="Parent Company"
            title="Infonix Studios"
            description="Voxelware Studios operates as a subsidiary of Infonix Studios."
          />

          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <motion.div
                className="glass-strong rounded-2xl p-8 md:p-12 text-center glow-border"
                whileHover={{ scale: 1.005 }}
              >
                <div className="flex flex-col items-center gap-8">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl" />
                    <div className="relative w-40 h-auto mx-auto" style={{ aspectRatio: "262/232" }}>
                      <Image
                        src="/images/infonix-logo.png"
                        alt="Infonix Studios logo"
                        width={262}
                        height={232}
                        className="w-full h-auto object-contain"
                        style={{ width: "auto", height: "auto" }}
                        priority
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-1">Infonix Studios</h3>
                    <p className="text-primary font-medium mb-4">Programming & Software Development</p>
                    <div className="flex items-center justify-center gap-3 text-muted">
                      <span className="w-8 h-px bg-white/20" />
                      <ArrowDown className="w-5 h-5 text-primary" />
                      <span className="w-8 h-px bg-white/20" />
                    </div>
                    <div className="mt-4">
                      <p className="text-lg font-semibold mb-1">VOXELWARE Studios</p>
                      <p className="text-sm text-muted">Minecraft & Server Infrastructure</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed max-w-lg">
                    VOXELWARE Studios is a subsidiary of Infonix Studios, a programming and
                    software development company. Infonix Studios provides the broader software
                    development foundation that Voxelware builds upon for its Minecraft-focused
                    products.
                  </p>

                  <a
                    href="https://www.infonix.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="gradient" size="lg" className="group">
                      Visit Infonix Studios
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Projects */}
        <div className="container-wide px-4 mt-24">
          <SectionHeader
            badge="Projects"
            title="What we ship"
            description="Production-grade software for Minecraft communities and server operators."
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.15}>
                <Link href={`/projects/${project.slug || project.id}`}>
                  <motion.div
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/30 backdrop-blur-sm p-6 card-hover h-full"
                    whileHover={{ y: -4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden">
                          {project.icon?.startsWith("/") ? (
                            <Image
                              src={project.icon}
                              alt={`${project.name} logo`}
                              width={48}
                              height={48}
                              className="object-contain p-1"
                            />
                          ) : (
                            <span className="text-2xl">{project.icon || "\u{1F4E6}"}</span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                      <p className="text-sm text-muted mb-3">{project.tagline}</p>
                      <p className="text-sm text-muted/70 mb-4 line-clamp-2">{project.description}</p>

                      <div className="flex items-center gap-2 text-sm text-primary font-medium">
                        <span>View details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
