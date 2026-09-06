import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  const rows = db.prepare("SELECT * FROM site_content").all() as any[]
  const map: Record<string, any> = {}
  for (const row of rows) {
    try {
      map[row.key] = JSON.parse(row.value)
    } catch {
      map[row.key] = row.value
    }
  }
  return NextResponse.json(map)
}
