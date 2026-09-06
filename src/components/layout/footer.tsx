import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="container-wide px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/vxl_small.png"
                alt="Voxelware"
                width={72}
                height={24}
                loading="eager"
                className="h-6 w-auto"
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <p className="text-sm text-muted max-w-xs">
              Software engineered for Minecraft communities.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects/coretuff" className="text-sm text-muted hover:text-white transition-colors">
                  CoreTuff
                </Link>
              </li>
              <li>
                <Link href="/projects/smokeutils" className="text-sm text-muted hover:text-white transition-colors">
                  SmokeUtils
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/licensing" className="text-sm text-muted hover:text-white transition-colors">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/discord" className="text-sm text-muted hover:text-white transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Voxelware-studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Voxelware Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/licensing" className="text-xs text-muted hover:text-white transition-colors">
              Voxelware Proprietary License
            </Link>
            <Link href="/contact" className="text-xs text-muted hover:text-white transition-colors">
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
