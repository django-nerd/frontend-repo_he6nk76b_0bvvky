import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => (
  <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
    <Navbar />
    <main>{children}</main>
  </div>
)

export default Layout
