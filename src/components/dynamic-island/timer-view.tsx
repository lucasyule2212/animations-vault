import { Pause, Play } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '../ui/button'

interface TimerViewProps {
  setMode: React.Dispatch<React.SetStateAction<string>>
}
const TimerView = ({ setMode }: TimerViewProps) => {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="flex w-[248px] justify-between px-1">
      <div className="flex items-center gap-2">
        <Button
          className="h-10 w-10 rounded-full bg-yellow-600/50 transition-colors hover:bg-yellow-600/60"
          size="icon"
          onClick={() => setIsPaused((prev) => !prev)}
          asChild
        >
          <motion.button
            whileTap={{
              scale: 0.95,
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isPaused ? (
                <motion.div
                  key="play"
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    filter: 'blur(4px)',
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    filter: 'blur(4px)',
                  }}
                  transition={{
                    duration: 0.1,
                  }}
                >
                  <Play weight="fill" className="h-4 w-4 text-yellow-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="pause"
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    filter: 'blur(4px)',
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    filter: 'blur(4px)',
                  }}
                  transition={{
                    duration: 0.1,
                  }}
                >
                  <Pause weight="fill" className="h-4 w-4 text-yellow-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </Button>
        <Button
          className="h-10 w-10 rounded-full bg-neutral-700/90 transition-colors hover:bg-neutral-600"
          size="icon"
          onClick={() => setMode('idle')}
          asChild
        >
          <motion.button
            whileTap={{
              scale: 0.95,
            }}
          >
            <X className="h-6 w-6 text-white" />
          </motion.button>
        </Button>
      </div>
      <div className="ml-auto flex items-baseline gap-2 pr-0.5 text-sm text-yellow-500">
        <p className="text-sm font-medium leading-none">Timer</p>
        <Countdown isPaused={isPaused} />
      </div>
    </div>
  )
}

export default TimerView

const Countdown = ({ isPaused }: { isPaused: boolean }) => {
  const [count, setCount] = useState(60)

  useEffect(() => {
    if (isPaused) return

    const id = setInterval(() => {
      setCount((c) => {
        if (c === 0) {
          return 60
        }
        return c - 1
      })
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [isPaused])

  const countArray = count.toString().padStart(2, '0').split('')

  return (
    <div className="relative w-[64px] overflow-hidden whitespace-nowrap text-3xl font-light">
      0:
      <AnimatePresence mode="popLayout" initial={false}>
        {countArray.map((n, i) => (
          <motion.div
            className="inline-block tabular-nums"
            key={n + i}
            initial={{ y: '12px', filter: 'blur(2px)', opacity: 0 }}
            animate={{ y: '0', filter: 'blur(0px)', opacity: 1 }}
            exit={{ y: '-12px', filter: 'blur(2px)', opacity: 0 }}
            transition={{ type: 'spring', bounce: 0.35 }}
          >
            {n}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
