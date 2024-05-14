'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, RotateCcw } from 'lucide-react'
import { useState } from 'react'

import EaseComponent from '@/components/easing-animations/ease-component'
import { Button } from '@/components/ui/button'

const playButtonVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
}

const EaseSection = () => {
  const [justifyAll, setJustifyAll] = useState<'start' | 'end'>('start')

  function handleToggleJustifyAll() {
    setJustifyAll((prev) => (prev === 'start' ? 'end' : 'start'))
  }
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center  gap-4">
        <h2>Easing</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggleJustifyAll}
          className="h-8 w-8 rounded-full"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {justifyAll === 'start' ? (
              <motion.span
                key="start"
                variants={playButtonVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Play className="h-4 w-4 text-zinc-700" />
              </motion.span>
            ) : (
              <motion.span
                key="end"
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
      <EaseComponent easing="linear" justifyAll={justifyAll} />
      <EaseComponent easing="ease-in" justifyAll={justifyAll} />
      <EaseComponent easing="ease-out" justifyAll={justifyAll} />
      <EaseComponent easing="ease-in-out" justifyAll={justifyAll} />
    </section>
  )
}

export default EaseSection
