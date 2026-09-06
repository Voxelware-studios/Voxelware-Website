import Database from "better-sqlite3"
import path from "path"

const dbPath = path.join(process.cwd(), ".next", "data.db")
const db = new Database(dbPath)

db.pragma("journal_mode = WAL")
db.pragma("foreign_keys = ON")

db.exec(`
  CREATE TABLE IF NOT EXISTS blog_posts (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT DEFAULT '',
    content TEXT DEFAULT '',
    date TEXT NOT NULL,
    author TEXT DEFAULT 'Admin',
    tags TEXT DEFAULT '[]',
    reading_time TEXT DEFAULT '1 min read',
    featured INTEGER DEFAULT 0,
    published INTEGER DEFAULT 1,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    tagline TEXT DEFAULT '',
    description TEXT DEFAULT '',
    category TEXT DEFAULT 'plugin',
    status TEXT DEFAULT 'In Development',
    version TEXT DEFAULT '0.1.0',
    icon TEXT DEFAULT '📦',
    gradient TEXT DEFAULT 'from-purple-600 to-fuchsia-500',
    technologies TEXT DEFAULT '[]',
    features TEXT DEFAULT '[]',
    screenshots TEXT DEFAULT '[]',
    downloads TEXT,
    documentation TEXT,
    changelog TEXT DEFAULT '[]',
    faq TEXT DEFAULT '[]',
    published INTEGER DEFAULT 1,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS site_content (
    id TEXT PRIMARY KEY,
    key TEXT UNIQUE NOT NULL,
    value TEXT NOT NULL DEFAULT '{}',
    updated_at TEXT DEFAULT (datetime('now'))
  );
`)

export { db }
