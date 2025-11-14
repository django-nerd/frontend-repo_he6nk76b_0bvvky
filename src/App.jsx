import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Testimonials />
        <Contact />
        <Footer />
      </Layout>
    </AnimatePresence>
  )
}

export default App
