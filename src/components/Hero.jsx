import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[86vh] overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white dark:from-neutral-950/30 dark:via-neutral-950/60 dark:to-neutral-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 sm:pt-32 sm:pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-white/60 px-3 py-1 text-xs font-medium text-brand-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg.white/5 dark:text-white">
            Web Design Art
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl dark:text-white">
            Minimal, modern, artful web design
          </h1>
          <p className="mt-5 max-w-xl text-lg text-neutral-600 dark:text-neutral-300">
            A portfolio template with smooth interactions, crisp typography, and a playful 3D hero.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="group inline-flex items-center rounded-full bg-brand-600 px-5 py-3 text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:ring-offset-neutral-900">
              Explore Work
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-5 py-3 text-neutral-900 transition hover:border-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:border.white/10 dark:bg-white/5 dark:text-white dark:ring-offset-neutral-900">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
