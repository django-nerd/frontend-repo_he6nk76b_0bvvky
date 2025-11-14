import React from 'react'

const Contact = () => (
  <section id="contact" className="bg-white py-24 dark:bg-neutral-950">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">Let’s build something</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Tell me about your project and timeline.</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10">
            <iframe title="map" className="h-64 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434679144!2d144.95373631558447!3d-37.81720974201264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b1b5176c3b!2sDesign%20Hub!5e0!3m2!1sen!2s!4v1614144737284!5m2!1sen!2s"></iframe>
          </div>
        </div>
        <form className="grid gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! I\'ll get back soon.')}}>
          <div>
            <label htmlFor="name" className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Name</label>
            <input id="name" required className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none ring-brand-500 transition focus:ring-2 dark:border-white/10 dark:bg-neutral-900 dark:text-white" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Email</label>
            <input id="email" type="email" required className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none ring-brand-500 transition focus:ring-2 dark:border-white/10 dark:bg-neutral-900 dark:text-white" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Message</label>
            <textarea id="message" rows="5" required className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none ring-brand-500 transition focus:ring-2 dark:border-white/10 dark:bg-neutral-900 dark:text-white" />
          </div>
          <button className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">Send message</button>
        </form>
      </div>
    </div>
  </section>
)

export default Contact
