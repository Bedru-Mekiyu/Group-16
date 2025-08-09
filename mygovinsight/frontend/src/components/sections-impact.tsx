import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LineChart, Clock, Users, Sparkles } from 'lucide-react'
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

export default function ImpactSection({}: Record<string, never> = {}) {
  const { ref, inView } = useInView(0.15)

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5" ref={ref}>
      {/* Metrics */}
      <Card
        className={cn(
          "md:col-span-2 border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur transition duration-700",
          inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        )}
      >
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-[#4C7CF3]" />
          <div className="text-base font-semibold text-slate-900">Quantifiable results</div>
        </div>
        <ul className="grid grid-cols-2 gap-4 text-sm">
          <li className="rounded-lg border border-slate-200 p-3">
            <div className="flex items-center gap-2 text-slate-500">
              <Clock className="h-4 w-4" />
              Avg. wait time
            </div>
            <div className="mt-1 text-xl font-semibold text-slate-900">−18%</div>
            <div className="text-xs text-slate-500">since last quarter</div>
          </li>
          <li className="rounded-lg border border-slate-200 p-3">
            <div className="flex items-center gap-2 text-slate-500">
              <Users className="h-4 w-4" />
              Satisfaction
            </div>
            <div className="mt-1 text-xl font-semibold text-slate-900">+12%</div>
            <div className="text-xs text-slate-500">citizen-reported</div>
          </li>
          <li className="rounded-lg border border-slate-200 p-3">
            <div className="flex items-center gap-2 text-slate-500">
              <LineChart className="h-4 w-4" />
              Resolution rate
            </div>
            <div className="mt-1 text-xl font-semibold text-slate-900">+21%</div>
            <div className="text-xs text-slate-500">faster responses</div>
          </li>
          <li className="rounded-lg border border-slate-200 p-3">
            <div className="flex items-center gap-2 text-slate-500">
              <Sparkles className="h-4 w-4" />
              Positive trend
            </div>
            <div className="mt-1 text-xl font-semibold text-slate-900">+9%</div>
            <div className="text-xs text-slate-500">last 30 days</div>
          </li>
        </ul>
      </Card>

      {/* Timeline */}
      <Card
        className={cn(
          "md:col-span-3 border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur transition duration-700",
          inView ? "translate-y-0 opacity-100 delay-150" : "translate-y-3 opacity-0"
        )}
      >
        <div className="mb-3 flex items-center gap-2">
          <Badge className="border bg-white text-[#1f2a44] hover:bg-white">Impact timeline</Badge>
        </div>
        <ol className="relative space-y-6 before:absolute before:left-[13px] before:top-1 before:h-[calc(100%-0.5rem)] before:w-px before:bg-slate-200">
          {[
            {
              title: "Collect feedback",
              desc: "Survey responses and open comments roll in from citizens across regions.",
            },
            {
              title: "Analyze & prioritize",
              desc: "Themes and sentiment surface. Agencies plan improvements by urgency and impact.",
            },
            {
              title: "Deliver improvements",
              desc: "Changes rolled out; community informed with transparent progress updates.",
            },
          ].map((item, i) => (
            <li key={i} className="relative pl-8">
              <span className="absolute left-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-[#274cce]">
                {i + 1}
              </span>
              <div className="text-sm font-semibold text-slate-900">{item.title}</div>
              <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
            </li>
          ))}
        </ol>
      </Card>
    </div>
  )
}
