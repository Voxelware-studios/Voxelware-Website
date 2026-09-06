import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  const projects = db.prepare("SELECT * FROM projects ORDER BY created_at DESC").all()
  return NextResponse.json(projects)
}

export async function POST(req: Request) {
  const data = await req.json()
  const id = crypto.randomUUID()
  const slug = data.slug || id

  db.prepare(
    `INSERT INTO projects (id, slug, name, tagline, description, category, status, version, icon, gradient, technologies, features, screenshots, downloads, documentation, changelog, faq, published)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    id, slug, data.name, data.tagline || "", data.description, data.category || "plugin",
    data.status || "In Development", data.version || "0.1.0", data.icon || "📦",
    data.gradient || "from-purple-600 to-fuchsia-500",
    JSON.stringify(data.technologies || []), JSON.stringify(data.features || []),
    JSON.stringify(data.screenshots || []), data.downloads || null, data.documentation || null,
    JSON.stringify(data.changelog || []), JSON.stringify(data.faq || []),
    data.published !== false ? 1 : 0
  )

  const project = db.prepare("SELECT * FROM projects WHERE id = ?").get(id)
  return NextResponse.json(project)
}
