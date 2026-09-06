"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MessageSquare, MapPin, Send, ExternalLink } from "lucide-react"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PageTransition } from "@/components/shared/page-transition"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SectionHeader } from "@/components/shared/section-header"
import { MeshGradient } from "@/components/shared/mesh-gradient"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "support@voxelware.org",
    href: "mailto:support@voxelware.org",
  },
  {
    icon: MessageSquare,
    title: "Discord",
    value: "Join our community",
    href: "https://discord.com/invite/tuArC9pTbv",
  },
  {
    icon: GithubIcon,
    title: "GitHub",
    value: "github.com/Voxelware-studios",
    href: "https://github.com/Voxelware-studios",
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageTransition>
      <section className="relative min-h-screen pt-24 pb-16">
        <MeshGradient />
        <div className="container-wide px-4">
          <SectionHeader
            badge="Contact"
            title="Get in touch"
            description="Have a question, project idea, or want to work with us? We'd love to hear from you."
          />

          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <ScrollReveal direction="left" className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
                  <p className="text-muted">
                    Thank you for reaching out. We typically respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="What is this regarding?" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about your project, question, or idea..."
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" variant="gradient" className="w-full group">
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    Send Message
                  </Button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="space-y-4">
                {contactMethods.map((method, i) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-xl glass block card-hover"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <method.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{method.title}</p>
                      <p className="text-sm text-muted truncate">{method.value}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted shrink-0 mt-1" />
                  </motion.a>
                ))}
              </div>

              <div className="glass rounded-xl p-6 mt-6">
                <MapPin className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Studio Hours</h3>
                <p className="text-sm text-muted">
                  9 AM to 9 PM IST
                </p>
                <p className="text-sm text-muted">
                  Weekend responses may be delayed
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
