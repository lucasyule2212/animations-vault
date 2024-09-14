/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'

import { Button } from '../ui/button'
import { Card } from '../ui/card'
import RingView from './ring-view'
import TimerView from './timer-view'

const DynamicIslandComponent = () => {
  const [view, setView] = useState('idle')
  const [variantKey, setVariantKey] = useState('idle')

  const content = useMemo(() => {
    switch (view) {
      case 'idle':
        return <div className="h-5" />

      case 'ring':
        return <RingView />

      case 'timer':
        return <TimerView setMode={setView} />

      default:
        break
    }
  }, [view])

  const variants = {
    exit: (transition: any) => {
      return {
        ...transition,
        opacity: [1, 0],
        filter: 'blur(5px)',
      }
    },
  }

  const ANIMATION_VARIANTS: Record<string, any> = {
    'ring-idle': {
      scale: 0.9,
      scaleX: 0.9,
      bounce: 0.5,
    },
    'timer-ring': {
      scale: 0.7,
      y: -7.5,
      bounce: 0.35,
    },
    'ring-timer': {
      scale: 1.4,
      y: 7.5,
      bounce: 0.35,
    },
    'timer-idle': {
      scale: 0.7,
      y: -7.5,
      bounce: 0.3,
    },
  }

  const BOUNCE_VARIANTS: Record<string, any> = {
    idle: 0.5,
    'ring-idle': 0.5,
    'timer-ring': 0.35,
    'ring-timer': 0.35,
    'timer-idle': 0.3,
    'idle-timer': 0.3,
    'idle-ring': 0.5,
  }

  const CONTAINER_POSITION_VARIANTS: Record<string, any> = {
    'idle-ring': 40.5,
    'ring-idle': 40.5,
    'ring-timer': 40.5,
    'timer-ring': 38.55,
    'idle-timer': 38.55,
    'timer-idle': 38.55,
  }

  return (
    <Card className="relative flex min-h-[530px] w-full min-w-[350px] flex-col items-center justify-center gap-12 bg-white p-6">
      <motion.div
        layout
        transition={{
          type: 'spring',
          bounce: BOUNCE_VARIANTS[variantKey],
        }}
        style={{ borderRadius: 32 }}
        className="mx-auto w-fit min-w-[130px] overflow-hidden rounded-full bg-black p-2"
      >
        <motion.div
          transition={{
            type: 'spring',
            bounce: BOUNCE_VARIANTS[variantKey],
          }}
          initial={{
            scale: 0.9,
            opacity: 0,
            filter: 'blur(5px)',
            originX: 0.5,
            originY: 0.5,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
            originX: 0.5,
            originY: 0.5,
            transition: {
              delay: 0.05,
            },
          }}
          key={view}
        >
          {content}
        </motion.div>
      </motion.div>

      <div
        className="pointer-events-none absolute left-1/2 flex h-[200px] w-[300px] -translate-x-1/2 items-start justify-center"
        style={{
          top: `${CONTAINER_POSITION_VARIANTS[variantKey]}%`,
        }}
      >
        <AnimatePresence
          mode="popLayout"
          custom={ANIMATION_VARIANTS[variantKey]}
        >
          <motion.div
            initial={{ opacity: 0 }}
            exit="exit"
            variants={variants}
            key={view}
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div layout className="flex justify-evenly gap-4">
        <Button
          className="h-8 w-32 rounded-full border border-zinc-200 font-semibold text-zinc-600 shadow-sm transition-transform hover:bg-zinc-100 focus:animate-scale-animate"
          onClick={() => {
            setView('idle')
            setVariantKey(`${view}-idle`)
          }}
        >
          Idle
        </Button>
        <Button
          className="h-8 w-32 rounded-full border border-zinc-200 font-semibold text-zinc-600 shadow-sm transition-transform hover:bg-zinc-100 focus:animate-scale-animate"
          onClick={() => {
            setView('ring')
            setVariantKey(`${view}-ring`)
          }}
        >
          Ring
        </Button>
        <Button
          className="h-8 w-32 rounded-full border border-zinc-200 font-semibold text-zinc-600 shadow-sm focus:animate-scale-animate"
          onClick={() => {
            setView('timer')
            setVariantKey(`${view}-timer`)
          }}
        >
          Timer
        </Button>
      </motion.div>
    </Card>
  )
}

export default DynamicIslandComponent
