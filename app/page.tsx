"use client"

import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-900">
      <div className="w-full max-w-xl mx-auto px-4">
        <section className="bg-green-800/80 border border-green-500/60 rounded-3xl shadow-2xl shadow-green-900/60 py-16 px-8 flex flex-col items-center justify-center text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-green-50 tracking-tight">
            Deploy with a single push
          </h1>
          <p className="text-green-100/90 max-w-md text-sm md:text-base">
            Your code is ready. Hit the button below to simulate a GitHub push on this green-powered landing page.
          </p>
          <Button
            className="mt-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-lg px-10 py-6 rounded-full shadow-lg shadow-emerald-900/50 transition-transform active:scale-95"
          >
            github push
          </Button>
        </section>
      </div>
    </main>
  )
}
