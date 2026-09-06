"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  FileText,
  Scale,
  Ban,
  Globe,
  Lock,
  AlertTriangle,
  Info,
  Shield,
  Gavel,
  Eye,
  RefreshCw,
  BookOpen,
  Heart,
  Terminal,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from "@/components/shared/page-transition"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { MeshGradient } from "@/components/shared/mesh-gradient"

const sections = [
  {
    id: "grant-of-license",
    title: "1. Grant of License",
    icon: Scale,
    content: `Voxelware Studios grants the user a limited, non-exclusive, non-transferable, and revocable license to use the Software ("Software") for personal or commercial purposes, subject to the terms outlined in this License.`,
  },
  {
    id: "ownership",
    title: "2. Ownership",
    icon: Shield,
    content: `The Software is licensed, not sold. All rights, title, and interest in and to the Software, including all intellectual property rights, remain the exclusive property of Voxelware Studios.`,
  },
  {
    id: "free-and-premium",
    title: "3. Free and Premium Versions",
    icon: Heart,
    content: `The Software may be distributed in both free and premium versions.

3.1 Free Version
The free version of the Software may be used without payment, subject to the following conditions:
• You may not modify, decompile, or create derivative works from the free version.
• You may not remove branding, credits, or license information.
• The free version may have limited features compared to the premium version.

3.2 Premium Version
The premium version of the Software requires a valid purchase and is subject to stricter restrictions:
• Redistribution, resale, or sharing of the premium Software or license is strictly prohibited.
• Access is limited to the licensed individual or organization only.`,
  },
  {
    id: "restrictions",
    title: "4. Restrictions",
    icon: Ban,
    content: `You are strictly prohibited from:
• Decompiling, reverse engineering, disassembling, or attempting to derive the source code of the Software.
• Modifying, altering, or creating derivative works based on the Software.
• Redistributing, reselling, sublicensing, leasing, sharing, or otherwise transferring the Software or any license key to any third party (except where explicitly allowed for the free version).
• Removing, altering, or obscuring any proprietary notices or labels on the Software.`,
  },
  {
    id: "closed-source",
    title: "5. Closed Source Notice",
    icon: Terminal,
    content: `This Software is proprietary and closed-source. Access to source code is not provided under any circumstances unless explicitly authorized in writing by Voxelware Studios.`,
  },
  {
    id: "license-usage",
    title: "6. License Usage",
    icon: BookOpen,
    content: `Each purchased license is intended for use by a single individual or organization. Unauthorized sharing or distribution of license credentials is strictly prohibited and may result in termination of the license.`,
  },
  {
    id: "integrity",
    title: "7. Integrity and Security",
    icon: Shield,
    content: `Voxelware Studios develops the Software with the intent to be safe and secure. The Software does not intentionally contain malicious code, malware, or harmful components.`,
  },
  {
    id: "license-validation",
    title: "8. License Validation",
    icon: Lock,
    content: `Voxelware Studios reserves the right to implement license validation mechanisms within the Software. This may include online verification to confirm the authenticity and validity of a purchased license.

The Software may periodically communicate with Voxelware Studios' servers for the purpose of license verification. Failure to pass validation may result in restricted functionality or termination of access.`,
  },
  {
    id: "data-collection",
    title: "9. Data Collection and IP Logging",
    icon: Eye,
    content: `To protect against unauthorized usage and distribution, the Software may collect limited technical information, including but not limited to:
• Public IP address
• Server identifier, installation identifier, or device identifier
• Discord User ID, Discord Guild ID, or other platform-specific identifiers (where applicable)
• Software version and license status

This data is collected solely for:
• License validation
• Security
• Anti-piracy enforcement
• Product analytics and diagnostics

By using the Software, you consent to this data collection.

Voxelware Studios does not sell collected data to third parties except where required by law.`,
  },
  {
    id: "anti-piracy",
    title: "10. Anti-Leak and Anti-Piracy Enforcement",
    icon: AlertTriangle,
    content: `Any unauthorized distribution, leaking, sharing, or publication of the Software, whether modified or unmodified, is strictly prohibited.

Voxelware Studios reserves the right to:
• Revoke licenses associated with suspected unauthorized distribution
• Blacklist servers or users found violating this License
• Take legal action against individuals or entities involved in piracy or redistribution`,
  },
  {
    id: "tampering",
    title: "11. Tampering and Bypass Prohibition",
    icon: Ban,
    content: `You may not attempt to bypass, disable, or interfere with any license validation, security, or anti-piracy mechanisms implemented within the Software.

Any such attempt will be considered a violation of this License and may result in immediate termination of access and further action.`,
  },
  {
    id: "no-warranty",
    title: "12. No Warranty",
    icon: Info,
    content: `The Software is provided "AS IS", without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.

Voxelware Studios does not guarantee that the Software will be error-free or uninterrupted.`,
  },
  {
    id: "limitation-of-liability",
    title: "13. Limitation of Liability",
    icon: AlertTriangle,
    content: `In no event shall Voxelware Studios be liable for any damages, including but not limited to:
• Loss of data
• Loss of profits
• Server downtime
• Indirect, incidental, or consequential damages

arising from the use or inability to use the Software.`,
  },
  {
    id: "termination",
    title: "14. Termination",
    icon: Gavel,
    content: `This License is effective until terminated. It will terminate automatically if you fail to comply with any of its terms. Upon termination, you must cease all use of the Software and delete all copies.`,
  },
  {
    id: "enforcement",
    title: "15. Enforcement",
    icon: Gavel,
    content: `Voxelware Studios reserves the right to take legal action against individuals or entities that violate this License.`,
  },
  {
    id: "investigation",
    title: "16. Investigation Rights",
    icon: Eye,
    content: `Voxelware Studios reserves the right to investigate suspected violations of this License.

Failure to cooperate with reasonable requests related to license verification or anti-piracy investigations may result in suspension or termination of the license.`,
  },
  {
    id: "updates",
    title: "17. Updates and Changes",
    icon: RefreshCw,
    content: `Voxelware Studios reserves the right to modify or update this License.

Users will be notified of significant changes where reasonably possible. Continued use of the Software after such changes constitutes acceptance of the updated terms.

If you do not agree to the updated terms, you must discontinue use of the Software.`,
  },
  {
    id: "severability",
    title: "18. Severability",
    icon: FileText,
    content: `If any provision of this License is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.`,
  },
  {
    id: "entire-agreement",
    title: "19. Entire Agreement",
    icon: BookOpen,
    content: `This License constitutes the entire agreement between the user and Voxelware Studios regarding the Software and supersedes any prior agreements or understandings.`,
  },
  {
    id: "governing-law",
    title: "20. Governing Law",
    icon: Globe,
    content: `This License shall be governed and interpreted in accordance with the laws of India unless otherwise specified by Voxelware Studios.`,
  },
  {
    id: "changes-in-v11",
    title: "21. Changes in v1.1",
    icon: RefreshCw,
    content: `• Generalized the license for all Voxelware software.
• Added Discord bot and platform identifier coverage.
• Expanded data collection provisions.
• Clarified anti-piracy and license validation terms.
• Updated governing law language.
• Renamed Audit Rights to Investigation Rights.`,
  },
]

export default function LicensingPage() {
  const [search, setSearch] = useState("")
  const [activeSection, setActiveSection] = useState("grant-of-license")

  const filtered = search
    ? sections.filter(
        (s) =>
          s.title.toLowerCase().includes(search.toLowerCase()) ||
          s.content.toLowerCase().includes(search.toLowerCase())
      )
    : sections

  return (
    <PageTransition>
      <section className="relative min-h-screen pt-24 pb-16">
        <MeshGradient />
        <div className="container-wide px-4">
          <ScrollReveal className="text-center mb-12">
            <Badge variant="gradient" className="mb-4">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Voxelware Proprietary License v1.1
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Copyright &copy; Voxelware Studios. All rights reserved.
              <br />
              <em>Last Updated: 13 June 2026</em>
            </p>
          </ScrollReveal>

          <div className="relative max-w-sm mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <Input
              placeholder="Search license..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <ScrollReveal direction="left" className="lg:col-span-1">
              <nav className="sticky top-24 glass-strong rounded-xl p-4 max-h-[70vh] overflow-y-auto">
                <h3 className="text-sm font-semibold mb-3 px-3">Sections</h3>
                <div className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id)
                        document
                          .getElementById(section.id)
                          ?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-all ${
                        activeSection === section.id
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <section.icon className="w-3.5 h-3.5 shrink-0" />
                      {section.title}
                    </button>
                  ))}
                </div>
              </nav>
            </ScrollReveal>

            <div className="lg:col-span-3 space-y-8">
              {(search ? filtered : sections).map((section, i) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-8 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold">{section.title}</h2>
                  </div>
                  <div className="text-muted leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              ))}
              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted">
                    No sections found for &quot;{search}&quot;
                  </p>
                </div>
              )}

              <motion.div className="glass rounded-xl p-8 border-primary/20 bg-primary/5">
                <p className="text-center text-sm text-muted italic">
                  By downloading, purchasing, installing, or using the Software,
                  you acknowledge that you have read, understood, and agree to be
                  bound by this License.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
