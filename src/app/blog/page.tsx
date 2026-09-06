"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Calendar, User, Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PageTransition } from "@/components/shared/page-transition"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SectionHeader } from "@/components/shared/section-header"
import { MeshGradient } from "@/components/shared/mesh-gradient"
import { blogPosts as fallbackPosts, blogTags } from "@/data/blog"

export default function BlogPage() {
  const [posts, setPosts] = useState(fallbackPosts)
  const [search, setSearch] = useState("")
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const perPage = 12

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then((data) => {
        if (data?.length) {
          const mapped = data.map((p: any) => ({
            ...p,
            tags: typeof p.tags === "string" ? JSON.parse(p.tags) : p.tags,
          }))
          setPosts(mapped)
        }
      })
      .catch(() => {})
  }, [])

  const filtered = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
    const matchesTag = !activeTag || post.tags.includes(activeTag)
    return matchesSearch && matchesTag
  })

  const sorted = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const featured = sorted.find((p) => p.featured)
  const rest = sorted.filter((p) => p.id !== featured?.id)
  const paginated = rest.slice(0, page * perPage)
  const hasMore = paginated.length < rest.length

  return (
    <PageTransition>
      <section className="relative min-h-screen pt-24 pb-16">
        <MeshGradient />
        <div className="container-wide px-4">
          <SectionHeader
            badge="Blog"
            title="Development updates"
            description="Latest news, release notes, and insights from the Voxelware team."
          />

          <ScrollReveal delay={0.2}>
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                <Input
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    setPage(1)
                  }}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              <button
                onClick={() => {
                  setActiveTag(null)
                  setPage(1)
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  !activeTag
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "bg-white/5 text-muted hover:text-white border border-white/10"
                }`}
              >
                All
              </button>
              {blogTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setActiveTag(tag === activeTag ? null : tag)
                    setPage(1)
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeTag === tag
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "bg-white/5 text-muted hover:text-white border border-white/10"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {featured && (
            <ScrollReveal delay={0.3}>
              <Link href={`/blog/${featured.id || featured.slug}`}>
                <motion.div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary/5 via-surface/30 to-secondary/5 p-8 md:p-12 mb-12 card-hover">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] opacity-50" />
                  <div className="relative z-10 max-w-2xl">
                    <Badge variant="gradient" className="mb-4">
                      Featured
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-muted mb-4">{featured.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {featured.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        {featured.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featured.readingTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary font-medium group/link">
                      <span>Read article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={`${search}-${activeTag}-${page}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paginated.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Link href={`/blog/${post.slug || post.id}`}>
                    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-surface/30 backdrop-blur-sm p-6 card-hover h-full">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {(Array.isArray(post.tags) ? post.tags : []).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0.5">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {hasMore && (
            <ScrollReveal>
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" onClick={() => setPage(page + 1)}>
                  Load more articles
                </Button>
              </div>
            </ScrollReveal>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted">No articles found.</p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
