import { Card } from "@/components/ui/card"
import { ShieldCheck, Accessibility, ThumbsUp, MessageSquare, LineChart, Library } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setShow(true), io.unobserve(el))),
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return { ref, show }
}

function Tile({
  title = "Feature",
  desc = "Description",
  icon,
  className,
}: {
  title?: string
  desc?: string
  icon?: React.ReactNode
  className?: string
}) {
  const { ref, show } = useReveal(0.2)
  return (
    <Card
      ref={ref as any}
      className={cn(
        "border-slate-200 bg-white p-5 transition-colors hover:border-slate-300",
        show ? "opacity-100" : "opacity-0 translate-y-2",
        "duration-700",
        className
      )}
    >
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-100">
        {icon}
      </div>
      <div className="text-base font-semibold text-slate-900">{title}</div>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </Card>
  )
}

export default function SimpleBento({}: Record<string, never> = {}) {
  const iconCls = "h-5 w-5 text-slate-600"
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Tile
        title="Privacy-first"
        desc="Anonymous by default. We collect only what’s needed."
        icon={<ShieldCheck className={iconCls} />}
      />
      <Tile
        title="Accessible"
        desc="Built to be understood by everyone."
        icon={<Accessibility className={iconCls} />}
      />
      <Tile
        title="Quick to contribute"
        desc="Find a service and share feedback in minutes."
        icon={<MessageSquare className={iconCls} />}
      />
      <Tile
        title="Vote on priorities"
        desc="Help set what should be improved first."
        icon={<ThumbsUp className={iconCls} />}
      />
      <Tile
        title="Clear insights"
        desc="Summaries turn feedback into action."
        icon={<LineChart className={iconCls} />}
      />
      <Tile
        title="Transparent updates"
        desc="Follow progress as improvements are delivered."
        icon={<Library className={iconCls} />}
      />
    </div>
  )
}
