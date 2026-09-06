import { Hero } from "@/components/home/hero"
import { FeaturedProducts } from "@/components/home/featured-products"
import { Services } from "@/components/home/services"
import { Timeline } from "@/components/home/timeline"
import { CTA } from "@/components/home/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Timeline />
      <CTA />
    </>
  )
}
