import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function PUT(req: Request, { params }: { params: Promise<{ key: string }> }) {
  const { key } = await params
  const data = await req.json()
  const value = typeof data === "string" ? data : JSON.stringify(data)

  const existing = db.prepare("SELECT id FROM site_content WHERE key = ?").get(key)
  if (existing) {
    db.prepare("UPDATE site_content SET value = ?, updated_at = datetime('now') WHERE key = ?").run(value, key)
  } else {
    db.prepare("INSERT INTO site_content (id, key, value) VALUES (?, ?, ?)").run(crypto.randomUUID(), key, value)
  }

  return NextResponse.json({ success: true })
}
