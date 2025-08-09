import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Search, MessageSquare, ArrowLeft, Building2, HeartPulse, TrainFront, GraduationCap, Wrench, Cpu, VoteIcon, ArrowUp } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import FeedbackDialog from "@/components/feedback-dialog"

type Category = "Health" | "Transport" | "Education" | "Infrastructure" | "Digital Services"

type Service = {
  id: string
  name: string
  agency: string
  category: Category
  description: string
  tags: string[]
  votes: number
}

const initialServices: Service[] = [
  {
    id: "svc-1",
    name: "Community Health Clinics",
    agency: "Ministry of Health",
    category: "Health",
    description: "Access, wait times, and quality of care at community health clinics across regions.",
    tags: ["accessibility", "wait-times", "quality"],
    votes: 238,
  },
  {
    id: "svc-2",
    name: "Public Transit",
    agency: "Transit Authority",
    category: "Transport",
    description: "Buses and trains coverage, punctuality, cleanliness, and fare experience.",
    tags: ["coverage", "punctuality", "cleanliness"],
    votes: 512,
  },
  {
    id: "svc-3",
    name: "School Meal Program",
    agency: "Department of Education",
    category: "Education",
    description: "Nutritional value, variety, and distribution efficiency of school meals.",
    tags: ["nutrition", "equity", "distribution"],
    votes: 167,
  },
  {
    id: "svc-4",
    name: "Road Maintenance",
    agency: "Public Works",
    category: "Infrastructure",
    description: "Road quality, repairs, and construction impact on daily commutes.",
    tags: ["repairs", "safety", "traffic"],
    votes: 441,
  },
  {
    id: "svc-5",
    name: "Digital ID Portal",
    agency: "Government IT",
    category: "Digital Services",
    description: "Ease of use, uptime, accessibility, and security of the Digital ID platform.",
    tags: ["usability", "security", "performance"],
    votes: 329,
  },
  {
    id: "svc-6",
    name: "Public Parks",
    agency: "Parks & Recreation",
    category: "Infrastructure",
    description: "Maintenance, safety, and inclusivity of public parks and recreational spaces.",
    tags: ["safety", "cleanliness", "inclusion"],
    votes: 204,
  },
]

function CategoryIcon({ category, className = "h-5 w-5 text-slate-600" }: { category: Category; className?: string }) {
  switch (category) {
    case "Health":
      return <HeartPulse className={className} />
    case "Transport":
      return <TrainFront className={className} />
    case "Education":
      return <GraduationCap className={className} />
    case "Infrastructure":
      return <Wrench className={className} />
    case "Digital Services":
      return <Cpu className={className} />
  }
}

export default function ServicesPage() {
  const [query, setQuery] = useState("")
  const [services, setServices] = useState<Service[]>(initialServices)
  const [feedbackTarget, setFeedbackTarget] = useState<Service | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return services
    return services.filter((s) => {
      return (
        s.name.toLowerCase().includes(q) ||
        s.agency.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q))
      )
    })
  }, [services, query])

  function handleVote(id: string) {
    setServices((prev) => prev.map((s) => (s.id === id ? { ...s, votes: s.votes + 1 } : s)))
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-4xl px-4 py-8 sm:py-10">
        <div className="mb-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900" aria-label="Back to home">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">Services</h1>
          <p className="max-w-2xl text-slate-600">A simple list of government services open for feedback and voting.</p>
        </header>

        {/* Search */}
        <div className="mt-6">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              aria-label="Search services"
              placeholder="Search by name, agency, tag, or category..."
              className="pl-9"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <p className="mt-2 text-xs text-slate-500">{filtered.length} result{filtered.length === 1 ? "" : "s"}</p>
        </div>

        {/* Vertical list */}
        <div className="mt-6 space-y-3">
          {filtered.map((svc) => (
            <Card
              key={svc.id}
              className="group border-slate-200 bg-white transition-colors hover:border-slate-300"
              role="article"
              aria-labelledby={`${svc.id}-title`}
            >
              <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-start sm:justify-between">
                {/* Left: icon and text */}
                <div className="flex flex-1 items-start gap-3">
                  <div className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-md bg-slate-100">
                    <CategoryIcon category={svc.category} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 id={`${svc.id}-title`} className="text-base font-semibold text-slate-900">
                        {svc.name}
                      </h2>
                      <Badge variant="secondary" className="border-slate-200 text-slate-700">
                        {svc.category}
                      </Badge>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                      <Building2 className="h-4 w-4" />
                      <span className="truncate">{svc.agency}</span>
                      <span aria-hidden="true" className="mx-1">•</span>
                      <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-600">
                        {svc.votes} votes
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{svc.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {svc.tags.map((t) => (
                        <Badge key={t} variant="outline" className="border-slate-200 text-slate-600">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: actions */}
                <div className="flex w-full flex-none items-center justify-start gap-2 sm:w-auto sm:justify-end">
                  <Button
                    variant="outline"
                    className="h-9 gap-2 border-slate-200"
                    onClick={() => handleVote(svc.id)}
                    aria-label={`Vote for ${svc.name}`}
                    title="Vote"
                  >
                    <ArrowUp className="h-4 w-4" />
                    Vote
                  </Button>
                  <Button
                    className="h-9 gap-2 bg-[#4C7CF3] hover:bg-[#436ee9]"
                    onClick={() => setFeedbackTarget(svc)}
                    aria-label={`Give feedback for ${svc.name}`}
                  >
                    <MessageSquare className="h-4 w-4" />
                    Feedback
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filtered.length === 0 && (
          <div className="mt-16 rounded-lg border border-dashed border-slate-200 p-10 text-center">
            <p className="text-slate-600">No services found. Try a different search.</p>
          </div>
        )}
      </section>

      {/* Feedback dialog */}
      <FeedbackDialog
        open={!!feedbackTarget}
        onOpenChange={(o) => {
          if (!o) setFeedbackTarget(null)
        }}
        serviceName={feedbackTarget?.name ?? "Service"}
        onSubmit={() => {
          setFeedbackTarget(null)
        }}
      />
    </main>
  )
}
