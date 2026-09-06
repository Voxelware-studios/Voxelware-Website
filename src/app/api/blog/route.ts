import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  const posts = db.prepare("SELECT * FROM blog_posts ORDER BY date DESC").all()
  return NextResponse.json(posts)
}

export async function POST(req: Request) {
  const data = await req.json()
  const id = crypto.randomUUID()
  const slug = data.slug || id
  const date = data.date || new Date().toISOString().split("T")[0]
  const tags = JSON.stringify(data.tags || [])
  const author = data.author || "Admin"

  db.prepare(
    `INSERT INTO blog_posts (id, slug, title, description, content, date, author, tags, reading_time, featured, published)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(id, slug, data.title, data.description, data.content, date, author, tags, data.readingTime || "1 min read", data.featured ? 1 : 0, data.published !== false ? 1 : 0)

  const post = db.prepare("SELECT * FROM blog_posts WHERE id = ?").get(id)
  return NextResponse.json(post)
}
