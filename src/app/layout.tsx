import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ParticleBackground } from "@/components/shared/particle-background"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://voxelware.dev"),
  title: "Voxelware Studios | Software engineered for Minecraft communities",
  description:
    "Voxelware Studios creates plugins, infrastructure, developer tools, and Discord integrations powering the next generation of Minecraft servers.",
  keywords: [
    "Minecraft plugins",
    "Paper plugins",
    "Minecraft mods",
    "Discord bots",
    "server infrastructure",
    "CoreTuff",
    "SmokeUtils",
    "Voxelware",
  ],
  icons: {
    icon: "/images/vxl_small.png",
  },
  openGraph: {
    title: "Voxelware Studios",
    description: "Software engineered for Minecraft communities.",
    type: "website",
    images: ["/images/vxl.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <ParticleBackground />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
