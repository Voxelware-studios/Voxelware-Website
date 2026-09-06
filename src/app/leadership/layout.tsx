import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leadership | Voxelware Studios",
  description:
    "Meet the leadership team behind Voxelware Studios, including Founder Membercatcousin and Owner & CEO Jeyakasinathan (Frontman).",
}

export default function LeadershipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
