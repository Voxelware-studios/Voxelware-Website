import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { blogPosts } from "@/data/blog"
import { projects } from "@/data/projects"
import { trustMetrics, services, timelineEvents } from "@/data/site"

export async function POST() {
  db.exec("DELETE FROM blog_posts")
  db.exec("DELETE FROM projects")
  db.exec("DELETE FROM site_content")

  const insertPost = db.prepare(
    `INSERT INTO blog_posts (id, slug, title, description, content, date, author, tags, reading_time, featured, published)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  )

  for (const post of blogPosts) {
    insertPost.run(
      crypto.randomUUID(), post.id, post.title, post.description, post.content,
      post.date, post.author, JSON.stringify(post.tags), post.readingTime,
      post.featured ? 1 : 0, 1
    )
  }

  const insertProject = db.prepare(
    `INSERT INTO projects (id, slug, name, tagline, description, category, status, version, icon, gradient, technologies, features, changelog, faq, published)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  )

  for (const project of projects) {
    insertProject.run(
      crypto.randomUUID(), project.id, project.name, project.tagline, project.description,
      project.category, project.status, project.version, project.icon, project.gradient,
      JSON.stringify(project.technologies), JSON.stringify(project.features),
      JSON.stringify(project.changelog || []), JSON.stringify(project.faq || []), 1
    )
  }

  const insertContent = db.prepare(
    "INSERT INTO site_content (id, key, value) VALUES (?, ?, ?)"
  )

  insertContent.run(crypto.randomUUID(), "trustMetrics", JSON.stringify(trustMetrics))
  insertContent.run(crypto.randomUUID(), "services", JSON.stringify(services))
  insertContent.run(crypto.randomUUID(), "timelineEvents", JSON.stringify(timelineEvents))
  insertContent.run(crypto.randomUUID(), "hero", JSON.stringify({
    badge: "Building Minecraft's future.",
    headline: "Software engineered for Minecraft communities.",
    subheadline:
      "Voxelware Studios creates plugins, infrastructure, developer tools, and Discord integrations powering the next generation of Minecraft servers.",
  }))
  insertContent.run(crypto.randomUUID(), "cta", JSON.stringify({
    headline: "Ready to build something extraordinary?",
    description:
      "Join the growing community of server operators who trust Voxelware for their infrastructure needs.",
  }))

  return NextResponse.json({ success: true, message: "Database seeded!" })
}
