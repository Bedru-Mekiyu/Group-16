export default function GradientOrbs({}: Record<string, never> = {}) {
  return (
    <div className="absolute inset-0">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#4C7CF3]/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#60A5FA]/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl" />
      <style jsx>{`
        div :global(.orb) {
          animation: float 12s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          25% { transform: translateY(-8px) translateX(6px) scale(1.02); }
          50% { transform: translateY(2px) translateX(-8px) scale(0.98); }
          75% { transform: translateY(-4px) translateX(4px) scale(1.01); }
        }
      `}</style>
    </div>
  )
}
