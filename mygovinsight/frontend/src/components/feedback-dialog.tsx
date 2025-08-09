"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function FeedbackDialog({
  open = false,
  onOpenChange = () => {},
  serviceName = "Service",
  onSubmit = () => {},
}: {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  serviceName?: string
  onSubmit?: (data: { name: string; feedback: string }) => void
}) {
  const [name, setName] = React.useState("")
  const [feedback, setFeedback] = React.useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit({ name, feedback })
    setName("")
    setFeedback("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby="feedback-desc">
        <DialogHeader>
          <DialogTitle>Feedback for {serviceName}</DialogTitle>
          <DialogDescription id="feedback-desc">
            Your feedback is anonymous by default. Please be specific and constructive.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name (optional)</Label>
            <Input
              id="name"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="feedback">Your Feedback</Label>
            <Textarea
              id="feedback"
              placeholder="Share your experience and suggestions..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </div>
          <DialogFooter className="mt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-[#4C7CF3] hover:bg-[#3f6fe1]">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
