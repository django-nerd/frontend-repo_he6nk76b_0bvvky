import React from 'react'
import { motion } from 'framer-motion'

const posts = [
  { id: 1, title: 'Designing with Motion', date: 'Aug 12, 2025', excerpt: 'Using motion to guide attention and create hierarchy without clutter.' },
  { id: 2, title: 'Blue as an Accent', date: 'Jul 22, 2025', excerpt: 'Why a restrained palette can make your brand feel more premium.' },
  { id: 3, title: 'Accessibility First', date: 'Jun 5, 2025', excerpt: 'Color contrast, focus states, and semantics that welcome everyone.' },
]

const Blog = () => (
  <section id="blog" className="bg-white py-24 dark:bg-neutral-950">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">Articles</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">Notes on design and development.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <motion.a key={p.id} href="#" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.03 }} className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-white/10 dark:bg-neutral-900">
            <p className="text-xs font-medium uppercase tracking-wide text-brand-700 dark:text-brand-300">{p.date}</p>
            <h3 className="mt-3 text-lg font-semibold text-neutral-900 group-hover:text-brand-700 dark:text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.excerpt}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
)

export default Blog
