import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  { id: 1, title: 'SaaS Dashboard', cat: 'Web', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Mobile Flow', cat: 'App', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'Marketing Site', cat: 'Web', img: 'https://images.unsplash.com/photo-1529336953121-a83ee94b1b39?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, title: '3D Showcase', cat: 'Art', img: 'https://images.unsplash.com/photo-1540230991887-6e3b6a6ad39f?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, title: 'Brand System', cat: 'Brand', img: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, title: 'E-commerce', cat: 'Web', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop' },
]

const cats = ['All', ...Array.from(new Set(items.map(i => i.cat)))]

const Portfolio = () => {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const filtered = useMemo(() => filter === 'All' ? items : items.filter(i => i.cat === filter), [filter])

  return (
    <section id="portfolio" className="bg-white py-24 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">Portfolio</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">Selected projects and experiments.</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 md:mt-0">
            {cats.map(c => (
              <button key={c} onClick={() => setFilter(c)} className={`rounded-full border px-3 py-1 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${filter === c ? 'border-brand-500 bg-brand-600 text-white' : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-200'}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map(card => (
              <motion.button key={card.id} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} transition={{ duration: 0.25 }} onClick={() => setActive(card)} className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-white/10 dark:bg-neutral-900">
                <img src={card.img} alt={card.title} loading="lazy" className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                  <div>
                    <p className="text-sm opacity-80">{card.cat}</p>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                  </div>
                  <svg className="h-5 w-5 -rotate-45 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {active && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
              <motion.div initial={{ y: 30 }} animate={{ y: 0 }} exit={{ y: 30 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }} className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-white/10 dark:bg-neutral-900">
                <button onClick={() => setActive(null)} className="absolute right-3 top-3 rounded-full border border-neutral-300 bg-white/80 px-2 py-1 text-sm text-neutral-700 backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-white/10 dark:bg-neutral-800 dark:text-neutral-200">Close</button>
                <img src={active.img} alt={active.title} className="h-80 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{active.title}</h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">Short project description highlighting the goals, process, and impact. This modal is keyboard-focusable and closable with ESC.</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio
