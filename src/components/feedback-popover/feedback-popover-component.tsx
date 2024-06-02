'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Textarea } from '../ui/textarea'

const FeedbackPopoverComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState('')

  const ref = useRef(null)

  function resetStates() {
    setIsOpen(false)
    setFeedback('')
  }

  useOnClickOutside(ref, () => resetStates())

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        resetStates()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <Card className="relative flex min-h-[300px] w-full min-w-[300px] items-center justify-center bg-white p-6">
      <motion.span layoutId="feedback-root-container">
        <Button
          className="border border-zinc-300 bg-white"
          onClick={() => setIsOpen(true)}
        >
          <motion.span layoutId="feedback-root-text">Feedback</motion.span>
        </Button>
      </motion.span>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            ref={ref}
            className="absolute h-[192px] w-[364px] rounded-sm border border-zinc-300 bg-zinc-100 p-[6px] text-accent drop-shadow-sm"
            layoutId="feedback-root-container"
          >
            <motion.div className="relative flex h-full w-full flex-col rounded-sm border border-zinc-300 bg-white px-1 py-1">
              <motion.p
                layoutId="feedback-root-text"
                data-hasfeedback={!!feedback}
                className="absolute left-4 top-3 text-sm text-zinc-600 data-[hasfeedback=true]:text-opacity-0"
              >
                Feedback
              </motion.p>
              <Textarea
                className="h-full w-full border-none bg-white outline-none ring-0 ring-offset-0 focus:border-none focus:outline-none focus:ring-0"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                autoFocus
              />
              <div className="absolute -left-1 bottom-11 z-10 h-2 w-2 rounded-r-full border border-zinc-300 bg-zinc-100" />
              <div className="absolute -left-[4.5px] bottom-11 z-20 h-2 w-1  bg-zinc-100" />
              <div className="absolute bottom-12 left-0 w-full border-t border-dashed border-zinc-300" />
              <div className="absolute -right-1 bottom-11 z-10 h-2 w-2 rounded-l-full border border-zinc-300 bg-zinc-100" />
              <div className="absolute -right-[4.5px] bottom-11 z-20 h-2 w-1  bg-zinc-100" />
              <div className="flex h-10 w-full items-center justify-end">
                <Button
                  className="border-none bg-white text-accent"
                  onClick={() => resetStates()}
                >
                  Submit
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

export default FeedbackPopoverComponent
