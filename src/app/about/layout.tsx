import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About VOXELWARE Studios",
  description:
    "Learn about VOXELWARE Studios, its software and Minecraft infrastructure projects, and its relationship with Infonix Studios.",
  openGraph: {
    title: "About VOXELWARE Studios",
    description:
      "Learn about VOXELWARE Studios, its software and Minecraft infrastructure projects, and its relationship with Infonix Studios.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
