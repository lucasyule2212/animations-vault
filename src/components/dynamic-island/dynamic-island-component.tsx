'use client'
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
        return

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
      <div className="h-10 w-36 rounded-full bg-black p-2">{content}</div>

      <div className="flex justify-evenly gap-4">
        <Button
          className="focus:animate-scale-animate h-8 w-32 rounded-full border border-zinc-200 font-semibold text-zinc-600 shadow-sm transition-transform hover:bg-zinc-100"
          onClick={() => setView('idle')}
        >
          Idle
        </Button>
        <Button
          className="focus:animate-scale-animate h-8 w-32 rounded-full border border-zinc-200 font-semibold text-zinc-600 shadow-sm transition-transform hover:bg-zinc-100"
          onClick={() => setView('ring')}
        >
          Ring
        </Button>
        <Button
          className="focus:animate-scale-animate h-8 w-32 rounded-full border border-zinc-200 font-semibold text-zinc-600 shadow-sm"
          onClick={() => setView('timer')}
        >
          Timer
        </Button>
      </div>
    </Card>
  )
}

export default DynamicIslandComponent
