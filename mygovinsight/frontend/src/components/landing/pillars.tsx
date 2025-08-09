import { Shield, MessagesSquare, Accessibility, CheckCircle } from 'lucide-react'

export default function Pillars({}: Record<string, never> = {}) {
  const items = [
    {
      title: "Trust",
      desc: "Privacy-conscious and transparent. Clear expectations and consent.",
      icon: <Shield className="h-5 w-5 text-slate-600" />,
    },
    {
      title: "Clarity",
      desc: "Plain language, focused visuals, and measured pacing.",
      icon: <CheckCircle className="h-5 w-5 text-slate-600" />,
    },
    {
      title: "Accessibility",
      desc: "Designed for everyone—readable type, contrast, and keyboard access.",
      icon: <Accessibility className="h-5 w-5 text-slate-600" />,
    },
    {
      title: "Dialogue",
      desc: "A respectful space for citizens and agencies to connect.",
      icon: <MessagesSquare className="h-5 w-5 text-slate-600" />,
    },
  ]

  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200 bg-white">
      <ul className="divide-y divide-slate-200">
        {items.map((i) => (
          <li key={i.title} className="flex items-start gap-4 p-5">
            <div className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-md bg-slate-100">{i.icon}</div>
            <div>
              <div className="text-base font-semibold text-slate-900">{i.title}</div>
              <p className="mt-1 text-sm text-slate-600">{i.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
