export interface Project {
  id: string
  slug?: string
  name: string
  tagline: string
  description: string
  category: "plugin" | "bot" | "tool" | "infrastructure"
  status: "Released" | "Insider" | "Nightly" | "Beta" | "In Development" | "Release Candidate"
  version: string
  icon: string
  gradient: string
  technologies: string[]
  features: string[]
  screenshots?: string[]
  downloads?: string
  documentation?: string
  changelog?: { version: string; date: string; notes: string[] }[]
  faq?: { question: string; answer: string }[]
}

export interface BlogPost {
  id: string
  slug?: string
  title: string
  description: string
  content: string
  date: string
  author: string
  tags: string[]
  readingTime: string
  featured?: boolean
  image?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface TrustMetric {
  label: string
  value: number
  suffix?: string
  prefix?: string
}

export interface Service {
  title: string
  description: string
  items: string[]
  icon: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
}
