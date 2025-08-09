"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { ShieldCheck, Accessibility, LineChartIcon as ChartLine, MessageSquareHeart, LineChart, Star } from 'lucide-react'
import { cn } from "@/lib/utils"

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true)
            obs.unobserve(el)
          }
        })
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

function FeatureCard({
  title = "Feature",
  desc = "Description",
  accent = "from-[#4C7CF3] to-[#60A5FA]",
  children,
  className,
}: {
  title?: string
  desc?: string
  accent?: string
  children?: React.ReactNode
  className?: string
}) {
  const { ref, inView } = useInView(0.15)
  return (
    <Card
      ref={ref as any}
      className={cn(
        "group relative overflow-hidden border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur transition",
        "before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r",
        className
      )}
      style={
        {
          ["--accent" as any]: accent,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        aria-hidden="true"
      >
        <div className={cn("absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl", "bg-[#4C7CF3]/10")} />
      </div>
      <div
        className={cn(
          "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r",
          "before:from-[#4C7CF3] before:to-[#60A5FA]"
        )}
      />
      <div
        className={cn(
          "transition-all duration-700",
          inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        )}
      >
        <div className="space-y-1">
          <div className="text-base font-semibold text-slate-900">{title}</div>
          <p className="text-sm text-slate-600">{desc}</p>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </Card>
  )
}

export default function AnimatedBento({}: Record<string, never> = {}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
      {/* Satisfaction meter */}
      <FeatureCard
        title="Citizen Satisfaction"
        desc="Track satisfaction across regions and demographics."
        className="md:col-span-3"
      >
        <div className="flex items-end gap-4">
          {[72, 84, 66, 90, 78].map((v, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="relative w-8 overflow-hidden rounded-md bg-slate-100"
                aria-label={`Bar ${i + 1} at ${v}%`}
              >
                <div
                  className="h-24 origin-bottom bg-gradient-to-b from-[#60A5FA] to-[#4C7CF3]"
                  style={{ height: `${(v / 100) * 96}px` }}
                />
              </div>
              <span className="mt-1 text-xs text-slate-500">{["N", "E", "S", "W", "C"][i]}</span>
            </div>
          ))}
        </div>
      </FeatureCard>

      {/* Sentiment sparkline */}
      <FeatureCard
        title="Real-time Sentiment"
        desc="Summaries update as feedback arrives."
        className="md:col-span-3"
      >
        <div className="flex items-center gap-3">
          <LineChart className="h-5 w-5 text-[#4C7CF3]" />
          <span className="text-sm font-medium text-slate-900">Positive trend: +12%</span>
        </div>
        <svg
          viewBox="0 0 300 80"
          className="mt-3 h-20 w-full"
          role="img"
          aria-label="Sentiment sparkline rising"
        >
          <path d="M0,60 C40,50 60,62 80,40 C100,20 120,30 140,45 C160,60 180,55 200,38 C220,20 240,32 260,22 C280,12 300,25 300,25"
            fill="none" stroke="#4C7CF3" strokeWidth="3" />
          <circle cx="260" cy="22" r="4" fill="#60A5FA" />
        </svg>
      </FeatureCard>

      {/* Privacy */}
      <FeatureCard
        title="Privacy & Security"
        desc="Anonymous by default. Data encrypted in transit and at rest."
        className="md:col-span-2"
      >
        <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
          <ShieldCheck className="h-5 w-5 text-[#4C7CF3]" />
          <span className="text-sm text-slate-700">Compliant with data protection standards</span>
        </div>
      </FeatureCard>

      {/* Accessibility */}
      <FeatureCard
        title="Accessible to Everyone"
        desc="Built to meet WCAG AA standards."
        className="md:col-span-2"
      >
        <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
          <Accessibility className="h-5 w-5 text-[#4C7CF3]" />
          <span className="text-sm text-slate-700">Inclusive by design</span>
        </div>
      </FeatureCard>

      {/* Testimonial */}
      <FeatureCard
        title="Proven Impact"
        desc="Agencies are improving services with data-driven decisions."
        className="md:col-span-2"
      >
        <blockquote className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">
          “MygovInsights helped us prioritize what citizens care about most.”
          <footer className="mt-2 text-xs text-slate-500">— Program Director, Transit Authority</footer>
        </blockquote>
      </FeatureCard>

      {/* Preview image */}
      <FeatureCard
        title="Clear, Insightful Dashboards"
        desc="Communicate progress with transparency."
        className="md:col-span-4"
      >
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <Image
            src="/placeholder.svg?height=540&width=1080"
            width={1080}
            height={540}
            alt="Analytics dashboard preview"
            className="aspect-[16/8] w-full object-cover transition duration-500 group-hover:scale-[1.01]"
          />
        </div>
      </FeatureCard>
    </div>
  )
}
