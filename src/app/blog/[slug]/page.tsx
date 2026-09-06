"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/shared/page-transition"
import { MeshGradient } from "@/components/shared/mesh-gradient"
import { blogPosts as fallback } from "@/data/blog"

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then((data) => {
        const found = data?.find(
          (p: any) => p.slug === params.slug || p.id === params.slug
        )
        if (found) {
          const mapped = {
            ...found,
            tags: typeof found.tags === "string" ? JSON.parse(found.tags) : found.tags,
          }
          setPost(mapped)
        } else {
          const fallbackPost = fallback.find((p) => p.id === params.slug)
          if (fallbackPost) setPost(fallbackPost)
        }
        setLoading(false)
      })
      .catch(() => {
        const fallbackPost = fallback.find((p) => p.id === params.slug)
        if (fallbackPost) setPost(fallbackPost)
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

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <Link href="/blog">
              <Button variant="outline">Back to blog</Button>
            </Link>
          </div>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <article className="relative min-h-screen pt-24 pb-16">
        <MeshGradient />
        <div className="container-wide px-4 max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {(Array.isArray(post.tags) ? post.tags : []).map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-muted mb-8">{post.description}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-12 pb-8 border-b border-white/10">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            {post.content ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold mt-12 mb-4">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold mt-8 mb-3">{children}</h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-lg font-bold mt-6 mb-2">{children}</h4>
                  ),
                  p: ({ children }) => (
                    <p className="leading-relaxed text-white/80 mb-4">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-2 my-4 list-disc pl-6">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="space-y-2 my-4 list-decimal pl-6">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-white/80">{children}</li>
                  ),
                  strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
                  code: ({ children }) => (
                    <code className="text-sm px-1.5 py-0.5 rounded bg-white/5 text-primary font-mono">
                      {children}
                    </code>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted">
                  Full content coming soon. Stay tuned for updates.
                </p>
              </div>
            )}
          </div>
        </div>
      </article>
    </PageTransition>
  )
}
