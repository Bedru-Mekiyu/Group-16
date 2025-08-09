"use client"

import { Card } from "@/components/ui/card"
import { Quote } from 'lucide-react'

export default function Testimonials({}: Record<string, never> = {}) {
  const items = [
    {
      quote:
        "A calm space for citizens to be heard. The feedback helped us focus on what mattered most.",
      author: "Program Director, Transit Authority",
    },
    {
      quote:
        "The process felt transparent and respectful. I could see how my vote influenced priorities.",
      author: "Citizen, East District",
    },
  ]
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {items.map((q, i) => (
        <Card key={i} className="border-slate-200 bg-white p-6">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-100">
            <Quote className="h-5 w-5 text-slate-600" />
          </div>
          <blockquote className="text-sm text-slate-700">“{q.quote}”</blockquote>
          <div className="mt-2 text-xs text-slate-500">— {q.author}</div>
        </Card>
      ))}
    </div>
  )
}
