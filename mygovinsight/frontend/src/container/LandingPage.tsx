import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SiteHeader from "@/components/site-header"

import Pillars from "@/components/landing/pillars"
import SimpleBento from "@/components/simple-bento"
import SimpleSteps from "@/components/simple-steps"
import ForRoles from "@/components/landing/for-roles"
import ImpactLite from "@/components/landing/impact-lite"
import Testimonials from "@/components/landing/testimonials"
import FAQ from "@/components/faq"
import CountUp from 'react-countup'

import Reveal from "@/components/reveal"

export default function Page() {
  
  return (
    <>
     <SiteHeader />
      <main className="min-h-screen bg-white">
        {/* 1. Hero (calm and clear) */}
        <section className="relative border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(50% 40% at 50% -10%, rgba(64,98,163,0.08), rgba(255,255,255,0) 60%)",
            }}
          />
          <div className="container relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 pb-16 pt-20 text-center md:gap-8 md:pb-20 md:pt-24">
            <Badge variant="secondary" className="border-slate-200 bg-white text-slate-700">
              A bridge between government and citizens
            </Badge>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Introducing MygovInsights Pro
            </h1>
            <p className="text-pretty mx-auto max-w-2xl text-slate-600 md:text-lg">
              A trusted, straightforward way to gather feedback on public services and projects. Share your
              experience, vote on priorities, and see progress—without noise.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Link to="/listings" aria-label="Explore services to give feedback">
                <Button className="h-11 gap-2 bg-gradient-to-b from-[#4C7CF3] to-[#60A5FA] hover:bg-gradient-to-br hover:from-[#4C7CF3] hover:to-[#60A5FA] px-6 text-white hover:ease-linear ">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#how" aria-label="Learn how to contribute">
                <Button variant="outline" className="h-11 gap-2 border-slate-200 bg-white px-6 text-slate-900 hover:bg-slate-50">
                  How it works
                </Button>
              </a>
            </div>

            {/* Gentle stats — flex row, not grid */}
            <div className="mt-6 flex w-full max-w-4xl flex-wrap items-stretch justify-center gap-3">
{[
  { label: "Active services", value: 120, suffix: "+" },
  { label: "Citizen responses", value: 25000, suffix: "+" },
  { label: "Agencies involved", value: 35 },
  { label: "Updates published", value: 900, suffix: "+" },
].map((s, i) => (
  <div
    key={i}
    className="min-w-[150px] flex-1 rounded-lg border border-slate-200 bg-white px-4 py-3 text-center sm:flex-none"
  >
    <div className="text-sm font-semibold text-slate-900">
      <CountUp end={s.value} duration={2} separator="," suffix={s.suffix || ''} />
    </div>
    <div className="text-xs text-slate-500">{s.label}</div>
  </div>
))}
            </div>
          </div>
        </section>

        {/* 2. Pillars — vertical media list (no grid) */}
        <section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
          <Reveal>
            <Pillars />
          </Reveal>
        </section>

        {/* 3. Features (Bento) — the ONLY grid */}
        <section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mx-auto mb-6 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Built for clarity</h2>
            <p className="mt-2 text-slate-600">Useful features that stay out of the way.</p>
          </div>
          <Reveal>
            <SimpleBento />
          </Reveal>
        </section>

        {/* 4. How it works — stacked steps (no grid) */}
        <section id="how" className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mx-auto mb-6 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">How you can contribute</h2>
            <p className="mt-2 text-slate-600">Find a service, share feedback, vote on priorities, and follow improvements.</p>
          </div>
          <Reveal>
            <SimpleSteps />
          </Reveal>
        </section>

        {/* 5. For Citizens & For Agencies — split panel (flex), not grid */}
        <section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
          <Reveal>
            <ForRoles />
          </Reveal>
        </section>

        {/* 6. Impact & Transparency — single elegant panel (flex rows), not grid */}
        <section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
          <Reveal>
            <ImpactLite />
          </Reveal>
        </section>

        {/* 7. Case study preview — quiet image */}
        <section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <img
                src="/feedbackform.png"
                width={1260}
                height={720}
                alt="Preview of feedback trends and progress updates"
                className="w-full object-cover"
              />
            </div>
          </Reveal>
        </section>

        {/* 8. Testimonials — vertical stack (no grid) */}
        <section className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
          <Reveal>
            <Testimonials />
          </Reveal>
        </section>

        {/* 9. FAQ */}
        <section aria-label="Frequently asked questions" className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
          <div className="mx-auto mb-6 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Questions, answered</h2>
            <p className="mt-2 text-slate-600">Short, clear answers to help you get started.</p>
          </div>
          <Reveal>
            <FAQ />
          </Reveal>
        </section>

        {/* 10. CTA */}
        <section className="border-t border-slate-200 bg-slate-50/60">
          <div className="container mx-auto max-w-6xl px-4 py-12 text-center md:py-16">
            <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">Your feedback shapes better services</h3>
            <p className="mx-auto mt-2 max-w-2xl text-slate-600">Share what works and what could be better. It takes minutes and makes a difference.</p>
            <div className="mt-6">
              <Link to="/listings">
                <Button className="h-11 bg-gradient-to-b from-[#4C7CF3] to-[#60A5FA] text-white hover:bg-[#38578f]">Explore Services</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="container mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-b from-[#4C7CF3] to-[#60A5FA] hover:bg-gradient-to-br hover:from-[#4C7CF3] hover:to-[#60A5FA]" aria-hidden="true" />
              <span className="font-semibold text-slate-800">MygovInsights</span>
            </div>
            <p className="text-center sm:text-right">© {new Date().getFullYear()} MygovInsights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
