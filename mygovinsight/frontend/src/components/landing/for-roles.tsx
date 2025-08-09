"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Building2 } from 'lucide-react'

export default function ForRoles({}: Record<string, never> = {}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card className="border-slate-200 bg-white p-6">
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-100">
          <Users className="h-5 w-5 text-slate-600" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">For citizens</h3>
        <p className="mt-1 text-sm text-slate-600">
          Share your experiences and ideas. Vote on what matters most. See how your input turns into action.
        </p>
        <div className="mt-4">
          <Button asChild variant="outline" className="h-9 border-slate-200">
            <a href="/listings">Find a service</a>
          </Button>
        </div>
      </Card>
      <Card className="border-slate-200 bg-white p-6">
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-100">
          <Building2 className="h-5 w-5 text-slate-600" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">For agencies</h3>
        <p className="mt-1 text-sm text-slate-600">
          Understand priorities at a glance. Act on feedback, then publish progress for transparent accountability.
        </p>
        <div className="mt-4">
          <Button variant="outline" className="h-9 border-slate-200" disabled>
            Contact team
          </Button>
        </div>
      </Card>
    </div>
  )
}
