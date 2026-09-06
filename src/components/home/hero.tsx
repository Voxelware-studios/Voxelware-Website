"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MeshGradient } from "@/components/shared/mesh-gradient"

const fallback = {
  badge: "Building Minecraft's future.",
  headline: "Software engineered for Minecraft communities.",
  subheadline:
    "Voxelware Studios creates plugins, infrastructure, developer tools, and Discord integrations powering the next generation of Minecraft servers.",
}

export function Hero() {
  const [data, setData] = useState(fallback)
  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
    fetch("/api/site")
      .then((r) => r.json())
      .then((site) => {
        if (site?.hero) setData(site.hero)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) setShowScroll(false)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MeshGradient />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 container-wide px-4 text-center pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Badge variant="gradient" className="text-sm px-4 py-1.5">
            {data.badge}
          </Badge>
          <Badge variant="warning" className="text-xs px-2 py-0.5 ml-2">
            BETA
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex items-center justify-center mb-10"
        >
          <div className="absolute w-[130%] max-w-[1300px] aspect-[3/1] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(176,38,255,0.2),transparent_70%)]" />
          <div className="absolute w-[120%] max-w-[1200px] aspect-[3/1] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,0,255,0.1),transparent_70%)] blur-[60px]" />

          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-full max-w-[1150px] aspect-[5/1]"
          >
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(176,38,255,0.25),transparent_60%)] blur-[40px]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="relative z-10"
          >
            <Image
              src="/images/vxl.png"
              alt="Voxelware"
              width={1013}
              height={193}
              priority
              loading="eager"
              className="w-[74vw] md:w-[66vw] lg:w-[57vw] max-w-[1150px] h-auto object-contain drop-shadow-[0_0_40px_rgba(176,38,255,0.7)]"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          {data.headline.split("Minecraft")[0]}
          <span className="text-gradient">
            Minecraft{data.headline.includes("Minecraft") ? data.headline.split("Minecraft")[1] : " communities."}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {data.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/projects">
            <Button size="xl" variant="gradient" className="group">
              Explore Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/blog">
            <Button size="xl" variant="secondary">
              <BookOpen className="w-4 h-4" />
              Read Development Blogs
            </Button>
          </Link>
        </motion.div>

        {showScroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
        )}      </div>
    </section>
  )
}
