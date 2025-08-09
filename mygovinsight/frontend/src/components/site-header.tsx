import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

const MenuItems = [
  {
    label: "Learn",
    sections: [
      {
        title: "Guides",
        links: [
          { name: "How it works", desc: "Understand how our platform operates", to: "/learn/how-it-works" },
          { name: "Security", desc: "Learn how we protect your data", to: "/learn/security" },
        ],
      },
      {
        title: "Resources",
        links: [
          { name: "Case Studies", desc: "Explore real success stories", to: "/learn/case-studies" },
          { name: "Community", desc: "Engage with fellow users", to: "/learn/community" },
        ],
      },
    ],
  },
  // Add more mega menus if needed
]

export default function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center px-4">
      <div className="flex w-full max-w-screen-xl items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 px-6 py-3 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-slate-50/50 transition-all">
        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-8 relative">
          <Link
            to="/"
            className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/listings"
            className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Services
          </Link>
          {MenuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </button>
              {activeMenu === item.label && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-full mt-2 w-[600px] rounded-2xl border border-slate-200 bg-white shadow-2xl p-6 grid grid-cols-2 gap-6 z-50"
                >
                  {item.sections.map((section) => (
                    <div key={section.title}>
                      <h4 className="text-sm font-semibold text-slate-900 mb-3">{section.title}</h4>
                      <ul className="space-y-3">
                        {section.links.map((link) => (
                          <li key={link.name}>
                            <Link
                              to={link.to}
                              className="block text-sm text-slate-700 hover:text-slate-900 transition"
                            >
                              <span className="font-medium">{link.name}</span>
                              <p className="text-xs text-slate-500">{link.desc}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="MygovInsights home">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-[#4C7CF3] to-[#60A5FA]" />
          <span className="text-lg font-semibold text-slate-900">MygovInsights</span>
        </Link>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="h-8 px-3 text-sm text-slate-700 hover:text-slate-900"
          >
            Login
          </Button>
          <Button
            className="h-8 rounded-full bg-gradient-to-b from-[#4C7CF3] to-[#60A5FA] px-4 text-sm font-semibold text-white hover:brightness-90"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
