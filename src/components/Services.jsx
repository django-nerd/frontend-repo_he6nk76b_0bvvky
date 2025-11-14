import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Layout, Palette, MonitorCog } from 'lucide-react'

const services = [
  { icon: Layout, title: 'UI/UX Design', desc: 'Modern, minimal, accessible interfaces with strong hierarchy.' },
  { icon: Palette, title: 'Brand Systems', desc: 'Visual identity, components, tokens, and documentation.' },
  { icon: MonitorCog, title: 'Web Development', desc: 'Responsive, performant, scalable front-ends.' },
  { icon: Sparkles, title: 'Micro-interactions', desc: 'Meaningful motion and delightful feedback.' },
]

const Services = () => (
  <section id="services" className="bg-white py-24 dark:bg-neutral-950">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">Services</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">Design-forward, engineering-backed.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <motion.div key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-neutral-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:scale-105 dark:bg-white/5 dark:text-brand-300">
              <Icon />
            </div>
            <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Services
