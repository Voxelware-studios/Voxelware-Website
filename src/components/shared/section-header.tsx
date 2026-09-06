"use client"

import { ScrollReveal } from "./scroll-reveal"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <ScrollReveal className={`mb-16 ${align === "center" ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </ScrollReveal>
  )
}
