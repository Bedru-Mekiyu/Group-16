import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

export default function StatCard({ label, value }: { label: string; value: string }) {
  const controls = useAnimation()
  const numericValue = parseInt(value.replace(/\D/g, ""), 10)

  useEffect(() => {
    controls.start({ count: numericValue })
  }, [controls, numericValue])

  return (
    <motion.div
      className="min-w-[150px] flex-1 rounded-lg border border-slate-200 bg-white px-4 py-3 text-center sm:flex-none"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.span
        className="text-sm font-semibold text-slate-900"
        initial={{ count: 0 }}
        animate={controls}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {Math.round(numericValue).toLocaleString()}+
      </motion.span>
      <div className="text-xs text-slate-500">{label}</div>
    </motion.div>
  )
}
