'use client'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

import { Button } from '../ui/button'
import { Card } from '../ui/card'
import RingView from './ring-view'
import TimerView from './timer-view'

const DynamicIslandComponent = () => {
  const [view, setView] = useState('idle')

  const content = useMemo(() => {
    switch (view) {
      case 'idle':
        return <div className="h-5" />

      case 'ring':
        return <RingView />

      case 'timer':
        return <TimerView />

      default:
        break
    }
  }, [view])

  return (
    <Card className="relative flex min-h-[530px] w-full min-w-[350px] flex-col items-center justify-center gap-12 bg-white p-6">
      <motion.div
        layout
        className="h-fit min-w-[130px] overflow-hidden bg-black p-2"
        style={{
          borderRadius: 32,
        }}
      >
        {content}
      </motion.div>

      <div className="flex justify-evenly gap-4">
        <Button
          className="h-8 w-32 rounded-full border border-zinc-200 font-semibold text-zinc-600 shadow-sm transition-transform hover:bg-zinc-100 focus:animate-scale-animate"
          onClick={() => setView('idle')}
        >
          Idle
        </Button>
        <Button
          className="h-8 w-32 rounded-full border border-zinc-200 font-semibold text-zinc-600 shadow-sm transition-transform hover:bg-zinc-100 focus:animate-scale-animate"
          onClick={() => setView('ring')}
        >
          Ring
        </Button>
        <Button
          className="h-8 w-32 rounded-full border border-zinc-200 font-semibold text-zinc-600 shadow-sm focus:animate-scale-animate"
          onClick={() => setView('timer')}
        >
          Timer
        </Button>
      </div>
    </Card>
  )
}

export default DynamicIslandComponent
