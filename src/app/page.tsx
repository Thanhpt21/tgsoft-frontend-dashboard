'use client'

import { Hero } from "@/components/layout/home"
import {AllFeatures} from "@/components/layout/home"
import {Rating} from "@/components/layout/home"
import {Contact} from "@/components/layout/home"
import {SuccessStories} from "@/components/layout/home"


export default function Page() {
  return (
    <main className="flex flex-col bg-gray-50">
      <Hero />
      <AllFeatures />
      <SuccessStories />
      <Rating />
      <Contact />
    </main>
  )
}