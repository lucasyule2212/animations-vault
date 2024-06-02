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
            <motion.div className="relative flex h-full w-full flex-col rounded-sm bg-white px-1 py-1">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

export default FeedbackPopoverComponent
