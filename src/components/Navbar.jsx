import React, { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const preferDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(preferDark)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#blog', label: 'Articles' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/60 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-neutral-950/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main">
        <a href="#" className="flex items-center gap-2 text-neutral-900 dark:text-white" aria-label="Home">
          <span className="inline-block h-3 w-3 rounded-sm bg-brand-600"></span>
          <span className="font-semibold tracking-tight">Web Design Art</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-neutral-700 transition hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-neutral-300 dark:hover:text-white">
              {item.label}
            </a>
          ))}
          <button aria-label="Toggle dark mode" onClick={() => setDark((d) => !d)} className="rounded-full border border-neutral-300 p-2 text-neutral-800 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-white/10 dark:text-white dark:hover:bg-white/10">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#portfolio" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
            Explore Work
          </a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <button aria-label="Toggle dark mode" onClick={() => setDark((d) => !d)} className="rounded-full border border-neutral-300 p-2 text-neutral-800 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-white/10 dark:text-white dark:hover:bg-white/10">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="rounded-md p-2 text-neutral-800 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-white dark:hover:bg-white/10">
            <Menu />
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-80 max-w-[80%] translate-x-0 overflow-y-auto border-l border-neutral-200 bg-white p-6 shadow-xl transition dark:border-white/10 dark:bg-neutral-900">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-semibold text-neutral-900 dark:text-white">Menu</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-md p-2 text-neutral-800 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-white dark:hover:bg-white/10">
                <X />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-neutral-200 dark:hover:bg-white/10">
                  {item.label}
                </a>
              ))}
              <a href="#portfolio" onClick={() => setOpen(false)} className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                Explore Work
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
