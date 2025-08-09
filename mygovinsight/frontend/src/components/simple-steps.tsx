"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Compass, MessageSquare, ThumbsUp, Activity } from 'lucide-react'

export default function SimpleSteps({}: Record<string, never> = {}) {
  const steps = [
    { title: "Find a service", desc: "Choose what matters to you.", icon: <Compass className="h-5 w-5 text-slate-600" /> },
    { title: "Share feedback", desc: "Explain what works or not.", icon: <MessageSquare className="h-5 w-5 text-slate-600" /> },
    { title: "Vote priorities", desc: "Upvote the most important issues.", icon: <ThumbsUp className="h-5 w-5 text-slate-600" /> },
    { title: "See progress", desc: "Follow updates and outcomes.", icon: <Activity className="h-5 w-5 text-slate-600" /> },
  ]
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {steps.map((s, i) => (
        <Card key={i} className="border-slate-200 bg-white p-5">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-100">
            {s.icon}
          </div>
          <div className="text-base font-semibold text-slate-900">{s.title}</div>
          <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
          {i === 0 && (
            <div className="mt-4">
              <Button asChild variant="outline" className="h-9 border-slate-200">
                <a href="/listings">Explore services</a>
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}
