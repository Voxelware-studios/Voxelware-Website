import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = db.prepare("SELECT * FROM projects WHERE id = ?").get(id)
  if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json(project)
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const data = await req.json()

  db.prepare(
    `UPDATE projects SET slug=?, name=?, tagline=?, description=?, category=?, status=?, version=?, icon=?, gradient=?, technologies=?, features=?, screenshots=?, downloads=?, documentation=?, changelog=?, faq=?, published=?, updated_at=datetime('now') WHERE id=?`
  ).run(
    data.slug, data.name, data.tagline, data.description, data.category, data.status,
    data.version, data.icon, data.gradient, JSON.stringify(data.technologies || []),
    JSON.stringify(data.features || []), JSON.stringify(data.screenshots || []),
    data.downloads, data.documentation, JSON.stringify(data.changelog || []),
    JSON.stringify(data.faq || []), data.published !== false ? 1 : 0, id
  )

  const project = db.prepare("SELECT * FROM projects WHERE id = ?").get(id)
  return NextResponse.json(project)
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  db.prepare("DELETE FROM projects WHERE id = ?").run(id)
  return NextResponse.json({ success: true })
}
