import React from 'react'
import { motion } from 'framer-motion'

const points = [
  { title: 'Principles', desc: 'Minimal interfaces, meaningful motion, measurable results.' },
  { title: 'Approach', desc: 'Research, iterate, and polish. Every pixel has a purpose.' },
  { title: 'Stack', desc: 'React, Tailwind, Framer Motion, Radix UI, and 3D with Spline.' },
]

const About = () => (
  <section id="about" className="relative bg-white py-24 dark:bg-neutral-950">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">Design with intention</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">I craft digital experiences that balance clarity and character. Subtle motion guides focus, type scales build hierarchy, and blue accents lead the eye.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p.title} className="rounded-2xl border border-neutral-200 p-6 transition hover:shadow-lg dark:border-white/10">
                <h3 className="text-sm font-semibold text-brand-700 dark:text-brand-300">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-brand-50 to-white shadow-inner dark:border-white/10 dark:from-neutral-900 dark:to-neutral-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(46,140,255,0.15),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(46,140,255,0.12),transparent_35%)]" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default About
