import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = db.prepare("SELECT * FROM blog_posts WHERE id = ?").get(id)
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json(post)
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const data = await req.json()
  const tags = JSON.stringify(data.tags || [])

  db.prepare(
    `UPDATE blog_posts SET slug=?, title=?, description=?, content=?, date=?, author=?, tags=?, reading_time=?, featured=?, published=?, updated_at=datetime('now') WHERE id=?`
  ).run(data.slug, data.title, data.description, data.content, data.date, data.author, tags, data.readingTime, data.featured ? 1 : 0, data.published !== false ? 1 : 0, id)

  const post = db.prepare("SELECT * FROM blog_posts WHERE id = ?").get(id)
  return NextResponse.json(post)
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  db.prepare("DELETE FROM blog_posts WHERE id = ?").run(id)
  return NextResponse.json({ success: true })
}
