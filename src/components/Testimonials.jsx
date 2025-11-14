import React, { useEffect, useState } from 'react'

const testimonials = [
  { id: 1, name: 'Ava K.', role: 'Product Lead', quote: 'The motion and clarity elevated our brand. Delightful, fast, and accessible.' },
  { id: 2, name: 'Liam S.', role: 'Founder', quote: 'A rare blend of taste and technical skill. Our conversion jumped 32%.' },
  { id: 3, name: 'Noah C.', role: 'Design Manager', quote: 'Elegant systems and crisp execution. A joy to collaborate with.' },
]

const Testimonials = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="testimonials" className="bg-white py-24 dark:bg-neutral-950">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-wider text-brand-700 dark:text-brand-300">What clients say</p>
        <div className="relative mt-6 overflow-hidden">
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
            {testimonials.map((t) => (
              <blockquote key={t.id} className="min-w-full px-6">
                <p className="mx-auto max-w-2xl text-2xl font-semibold leading-snug text-neutral-900 dark:text-white">“{t.quote}”</p>
                <footer className="mt-4 text-neutral-600 dark:text-neutral-300">{t.name} · {t.role}</footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} aria-label={`Go to slide ${i+1}`} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-brand-600' : 'bg-neutral-300 dark:bg-white/20'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
