import React from 'react'

const Footer = () => (
  <footer className="border-t border-neutral-200 bg-white py-12 dark:border-white/10 dark:bg-neutral-950">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-neutral-900 dark:text-white">
            <span className="inline-block h-3 w-3 rounded-sm bg-brand-600"></span>
            <span className="font-semibold tracking-tight">Web Design Art</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-neutral-600 dark:text-neutral-300">Modern, minimal, and distinctive web experiences built with care.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-900 dark:text-white">Work</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li><a href="#portfolio" className="hover:text-neutral-900 dark:hover:text-white">Portfolio</a></li>
            <li><a href="#services" className="hover:text-neutral-900 dark:hover:text-white">Services</a></li>
            <li><a href="#blog" className="hover:text-neutral-900 dark:hover:text-white">Articles</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-900 dark:text-white">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li><a href="#about" className="hover:text-neutral-900 dark:hover:text-white">About</a></li>
            <li><a href="#testimonials" className="hover:text-neutral-900 dark:hover:text-white">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-900 dark:text-white">Elsewhere</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">Dribbble</a></li>
            <li><a href="#" className="hover:text-neutral-900 dark:hover:text-white">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-neutral-200 pt-6 text-sm text-neutral-500 dark:border-white/10 dark:text-neutral-400">© {new Date().getFullYear()} Web Design Art. All rights reserved.</div>
    </div>
  </footer>
)

export default Footer
