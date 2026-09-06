"use client"

import { motion } from "framer-motion"
import {
  MessageSquare,
  Users,
  Bell,
  Shield,
  Hash,
  Megaphone,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from "@/components/shared/page-transition"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SectionHeader } from "@/components/shared/section-header"
import { MeshGradient } from "@/components/shared/mesh-gradient"

const benefits = [
  {
    icon: Bell,
    title: "Beta Access",
    description: "Be the first to test new plugins, features, and tools before public release.",
  },
  {
    icon: Megaphone,
    title: "Development Updates",
    description: "Get real-time notifications about builds, releases, and project milestones.",
  },
  {
    icon: Shield,
    title: "Support Channels",
    description: "Direct access to our development team for technical support and troubleshooting.",
  },
  {
    icon: Hash,
    title: "Community Discussion",
    description: "Connect with other server operators, share ideas, and collaborate.",
  },
]

export default function DiscordPage() {
  return (
    <PageTransition>
      <section className="relative min-h-screen pt-24 pb-16">
        <MeshGradient />
        <div className="container-wide px-4">
          <SectionHeader
            badge="Community"
            title="Join our Discord"
            description="Connect with the Voxelware community for support, updates, and early access."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal direction="left">
              <div className="glass-strong rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Voxelware Community</h3>
                      <p className="text-sm text-muted">10+ members</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                      <Hash className="w-4 h-4 text-indigo-400" />
                      <div>
                        <p className="text-sm font-medium">#announcements</p>
                        <p className="text-xs text-muted">Latest releases and updates</p>
                      </div>
                      <Badge variant="default" className="ml-auto text-[10px]">
                        NEW
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                      <Hash className="w-4 h-4 text-green-400" />
                      <div>
                        <p className="text-sm font-medium">#support</p>
                        <p className="text-xs text-muted">Technical help and troubleshooting</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                      <Hash className="w-4 h-4 text-purple-400" />
                      <div>
                        <p className="text-sm font-medium">#beta-testing</p>
                        <p className="text-xs text-muted">Insider builds and feedback</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                      <Hash className="w-4 h-4 text-yellow-400" />
                      <div>
                        <p className="text-sm font-medium">#showcase</p>
                        <p className="text-xs text-muted">Share what you&apos;ve built</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://discord.com/invite/tuArC9pTbv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="xl" variant="gradient" className="w-full group">
                      <MessageSquare className="w-4 h-4" />
                      Join Discord
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl glass"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Growing community</h3>
              <p className="text-muted max-w-md mx-auto mb-6">
                Join over 1,200 developers, server operators, and Minecraft enthusiasts
                who make the Voxelware community great.
              </p>
              <a
                href="https://discord.com/invite/tuArC9pTbv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="gradient" className="group">
                  <MessageSquare className="w-4 h-4" />
                  Join 1,200+ members
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
