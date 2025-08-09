import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, LineChart, Users } from 'lucide-react'

export default function ImpactLite({}: Record<string, never> = {}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
      <Card className="md:col-span-2 border-slate-200 bg-white p-5">
        <div className="mb-3 text-base font-semibold text-slate-900">Measured outcomes</div>
        <ul className="grid grid-cols-2 gap-4 text-sm">
          <li className="rounded-lg border border-slate-200 p-3">
            <div className="flex items-center gap-2 text-slate-500">
              <Clock className="h-4 w-4" />
              Wait times
            </div>
            <div className="mt-1 text-xl font-semibold text-slate-900">−18%</div>
            <div className="text-xs text-slate-500">last quarter</div>
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
              Resolution
            </div>
            <div className="mt-1 text-xl font-semibold text-slate-900">+21%</div>
            <div className="text-xs text-slate-500">faster responses</div>
          </li>
          <li className="rounded-lg border border-slate-200 p-3">
            <div className="flex items-center gap-2 text-slate-500">
              <LineChart className="h-4 w-4" />
              Positive trend
            </div>
            <div className="mt-1 text-xl font-semibold text-slate-900">+9%</div>
            <div className="text-xs text-slate-500">30 days</div>
          </li>
        </ul>
      </Card>

      <Card className="md:col-span-3 border-slate-200 bg-white p-5">
        <div className="mb-3">
          <Badge className="border bg-white text-slate-700 hover:bg-white">Transparent flow</Badge>
        </div>
        <ol className="relative space-y-6 before:absolute before:left-[13px] before:top-1 before:h-[calc(100%-0.5rem)] before:w-px before:bg-slate-200">
          {[
            { title: "Collect", desc: "Feedback and votes arrive from citizens across regions." },
            { title: "Analyze", desc: "Themes and sentiment highlight what matters most." },
            { title: "Improve", desc: "Agencies act and publish clear progress updates." },
          ].map((item, i) => (
            <li key={i} className="relative pl-8">
              <span className="absolute left-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-700">
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
