import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Compass, MessageSquare, ThumbsUp, Activity } from 'lucide-react'
import { cn } from "@/lib/utils"

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setInView(true), obs.unobserve(el))),
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function HowContribute({}: Record<string, never> = {}) {
  const steps = [
    {
      id: 1,
      title: "Discover services",
      desc: "Browse services and projects that matter to you.",
      icon: <Compass className="h-5 w-5 text-[#4C7CF3]" />,
      cta: { href: "/listings", label: "Explore" },
    },
    {
      id: 2,
      title: "Share feedback",
      desc: "Tell us what works and what doesn’t—anonymously by default.",
      icon: <MessageSquare className="h-5 w-5 text-[#4C7CF3]" />,
      cta: { href: "/listings", label: "Give feedback" },
    },
    {
      id: 3,
      title: "Vote priorities",
      desc: "Upvote issues and suggestions to guide what’s tackled first.",
      icon: <ThumbsUp className="h-5 w-5 text-[#4C7CF3]" />,
      cta: { href: "/listings", label: "Start voting" },
    },
    {
      id: 4,
      title: "Track progress",
      desc: "See how agencies respond and measure improvements over time.",
      icon: <Activity className="h-5 w-5 text-[#4C7CF3]" />,
      cta: { href: "#learn-more", label: "View insights" },
    },
  ]
  const { ref, inView } = useInView(0.15)

  return (
    <div ref={ref} className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {steps.map((s, idx) => (
        <Card
          key={s.id}
          className={cn(
            "relative overflow-hidden border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur transition",
            inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            "duration-700",
            idx % 2 === 0 ? "delay-100" : "delay-200"
          )}
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4C7CF3] to-[#60A5FA]" aria-hidden="true" />
          <div className="mb-3 flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#4C7CF3]/10">
              {s.icon}
            </div>
            <span className="text-xs font-semibold text-[#274cce]">Step {s.id}</span>
          </div>
          <div className="text-base font-semibold text-slate-900">{s.title}</div>
          <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
          <div className="mt-4">
            <Button asChild variant="outline" className="h-9 border-slate-200">
              <a href={s.cta.href}>{s.cta.label}</a>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}
