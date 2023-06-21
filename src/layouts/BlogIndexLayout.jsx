import { motion } from 'framer-motion'

import { Footer } from '@/components/nav/Footer'
import { Header } from '@/components/nav/Header'
import { SectionProvider } from '@/components/nav/SectionProvider'
import { Prose } from '@/components/mdx/Prose'

export function DefaultLayout({ title, description, children, sections = [] }) {
  return (
    <div className="">
      <motion.header
        layoutScroll
        className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
      >
        <div className="lg:pointer-events-auto lg:block lg:pb-8 lg:pt-4 ">
          <Header />
        </div>
      </motion.header>
      <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
        <main className="py-16 ">
          <Prose as="article">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-5xl">{title}</h1>
            </div>

            <p>{description}</p>

            {children}
          </Prose>
        </main>
        <Footer />
      </div>
    </div>
  )
}
