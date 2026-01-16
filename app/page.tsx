"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.password) return
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col bg-green-900 text-white">
      <header className="flex items-center justify-between px-8 py-4 border-b border-green-700/60 bg-green-950/60 backdrop-blur">
        <div className="text-lg font-semibold tracking-tight">GreenStack</div>
        <nav className="flex items-center gap-6 text-sm text-green-100/80">
          <button className="hover:text-white transition-colors">Features</button>
          <button className="hover:text-white transition-colors">Pricing</button>
          <button className="hover:text-white transition-colors">Docs</button>
        </nav>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4">
        <section className="flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row">
          <div className="flex-1 text-center md:text-left space-y-6">
            <p className="inline-flex items-center rounded-full bg-green-800/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-green-100/80 ring-1 ring-green-500/40">
              🚀 Zero-downtime deployments
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Push to GitHub.
              <span className="block text-green-300">We handle the rest.</span>
            </h1>
            <p className="max-w-xl text-sm md:text-base text-green-100/80">
              Connect your repository and ship production-ready apps with every
              <span className="font-semibold text-green-200"> github push</span>. No YAML, no servers, just green builds.
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-400 text-green-950 font-semibold px-10 py-6 text-lg rounded-full shadow-lg shadow-green-900/40 border border-green-300/60"
              >
                github push
              </Button>
            </div>

            <p className="mt-4 text-xs text-green-100/70">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="rounded-2xl border border-green-500/40 bg-green-950/70 p-6 shadow-xl shadow-green-900/40 backdrop-blur">
              <h2 className="text-xl font-semibold mb-1">Create your account</h2>
              <p className="mb-6 text-xs text-green-100/80">
                Sign up in under a minute and connect your first repository.
              </p>

              {submitted ? (
                <div className="rounded-xl border border-green-500/60 bg-green-900/80 px-4 py-3 text-sm text-green-50">
                  <p className="font-medium">Welcome aboard, {form.name || "there"}!</p>
                  <p className="text-xs mt-1 text-green-100/80">
                    Your account has been created locally. In a real app, this would now call your backend to finish setup.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs text-green-100">
                      Full name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ada Lovelace"
                      className="border-green-600/60 bg-green-900/60 text-sm placeholder:text-green-200/50 focus-visible:ring-green-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs text-green-100">
                      Work email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="border-green-600/60 bg-green-900/60 text-sm placeholder:text-green-200/50 focus-visible:ring-green-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-xs text-green-100">
                      Password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="border-green-600/60 bg-green-900/60 text-sm placeholder:text-green-200/50 focus-visible:ring-green-400"
                    />
                    <p className="text-[10px] text-green-200/70">
                      At least 8 characters, including a number and a symbol.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-400 text-green-950 font-semibold mt-2"
                    disabled={!form.name || !form.email || !form.password}
                  >
                    Create free account
                  </Button>

                  <p className="text-[10px] text-green-100/70 text-center mt-2">
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-between px-8 py-4 text-[11px] text-green-100/70 border-t border-green-800/60 bg-green-950/80">
        <p>© {new Date().getFullYear()} GreenStack, Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <button className="hover:text-white transition-colors">Status</button>
          <button className="hover:text-white transition-colors">Security</button>
          <button className="hover:text-white transition-colors">Changelog</button>
        </div>
      </footer>
    </div>
  )
}
