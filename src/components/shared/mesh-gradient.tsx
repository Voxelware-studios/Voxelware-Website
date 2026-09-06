"use client"

export function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-mesh" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] animate-mesh" style={{ animationDelay: '-5s' }} />
      <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-mesh" style={{ animationDelay: '-10s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] animate-mesh" style={{ animationDelay: '-15s' }} />
    </div>
  )
}
