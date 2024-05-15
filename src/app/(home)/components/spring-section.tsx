'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, RotateCcw } from 'lucide-react'
import { useState } from 'react'

import SpringComponent from '@/components/spring-animations/spring-component'
import { Button } from '@/components/ui/button'

const playButtonVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
}

const SpringSection = () => {
  const [animateStatus, setAnimateStatus] = useState(false)

  const toggleAnimatingStatus = () => {
    setAnimateStatus((prev) => !prev)
  }

  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center  gap-4">
        <h2>Spring</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleAnimatingStatus}
          className="h-8 w-8 rounded-full"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {!animateStatus ? (
              <motion.span
                key="running"
                variants={playButtonVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Play className="h-4 w-4 text-zinc-700" />
              </motion.span>
            ) : (
              <motion.span
                key="stopped"
                variants={playButtonVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <RotateCcw className="h-4 w-4 text-zinc-700" />
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </header>
      <SpringComponent animateStatus={animateStatus} />
    </section>
  )
}

export default SpringSection
