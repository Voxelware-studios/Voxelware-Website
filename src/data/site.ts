import { NavLink, TrustMetric, Service, TimelineEvent } from "@/types"

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Leadership", href: "/leadership" },
  { label: "Blog", href: "/blog" },
  { label: "Licensing", href: "/licensing" },
  { label: "Discord", href: "/discord" },
  { label: "Contact", href: "/contact" },
]

export const trustMetrics: TrustMetric[] = [
  { label: "Projects Released", value: 8, suffix: "+" },
  { label: "Development Blogs", value: 10, suffix: "+" },
  { label: "Discord Members", value: 500, suffix: "+" },
  { label: "Years Active", value: 2, suffix: "+" },
]

export const services: Service[] = [
  {
    title: "Minecraft Plugins",
    description: "Custom Paper plugin development for servers of any scale.",
    items: ["Custom plugin development", "Server infrastructure", "Performance optimization"],
    icon: "🛠️",
  },
  {
    title: "Discord Bots",
    description: "Feature-rich Discord bots for communities and servers.",
    items: ["Moderation systems", "Automation tools", "Community management"],
    icon: "🤖",
  },
  {
    title: "Developer Tools",
    description: "APIs and frameworks for Minecraft development.",
    items: ["REST APIs", "Development frameworks", "Utility libraries"],
    icon: "⚡",
  },
  {
    title: "Infrastructure",
    description: "Cloud services and deployment infrastructure.",
    items: ["License management", "Cloud services", "Deployment tools"],
    icon: "☁️",
  },
]

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2025",
    title: "Voxelware Founded",
    description: "Voxelware Studios was established with a mission to build premium Minecraft software.",
  },
  {
    year: "2025",
    title: "SmokeUtils Released",
    description: "Our first public plugin, SmokeUtils, launched to provide essential server utilities.",
  },
  {
    year: "2026",
    title: "CoreTuff Released",
    description: "Enterprise-grade server core officially released for Minecraft servers.",
  },
  {
    year: "Future",
    title: "Premium Infrastructure Ecosystem",
    description: "Expanding into cloud services, licensing platforms, and developer tools.",
  },
]
