'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Textarea } from '../ui/textarea'
import SubmissionButton from './submission-button'

const FeedbackPopoverComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [submissionState, setSubmissionState] = useState<
    'idle' | 'pending' | 'success'
  >('idle')

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

  const handleSubmit = async () => {
    setSubmissionState('pending')

    setTimeout(() => {
      setSubmissionState('success')
    }, 3000)

    setTimeout(() => {
      setSubmissionState('idle')
      resetStates()
    }, 6000)
  }

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

      <AnimatePresence initial={false} mode="popLayout">
        {isOpen && (
          <motion.div
            ref={ref}
            className="absolute h-[192px] w-[364px] overflow-hidden rounded-xl border border-zinc-300 bg-zinc-100 p-[6px] text-accent drop-shadow-sm"
            layoutId="feedback-root-container"
          >
            {submissionState === 'success' ? (
              <motion.div
                key="feedback-root-success"
                initial={{
                  y: -32,
                  opacity: 0,
                  filter: 'blur(4px)',
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  filter: 'blur(0px)',
                }}
                exit={{
                  y: 32,
                  opacity: 0,
                  filter: 'blur(4px)',
                }}
                transition={{
                  type: 'spring',
                  duration: 0.8,
                  bounce: 0,
                }}
                className="absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl bg-zinc-100"
              >
                <CheckCircle className="h-6 w-6 text-green-500" />
                <div className="space-y-1 text-center">
                  <p className="text-sm">
                    <motion.span layoutId="feedback-root-text">
                      Feedback
                    </motion.span>{' '}
                    sent!
                  </p>
                  <p className="text-xs text-zinc-500">
                    Thanks for helping me improve my animations.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="feedback-root-text"
                exit={{ y: 8, opacity: 0, filter: 'blur(4px)' }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                className="relative flex h-full w-full flex-col rounded-lg border border-zinc-300 bg-white px-1 py-1"
              >
                <motion.p
                  layoutId="feedback-root-text"
                  data-hasfeedback={!!feedback}
                  className="absolute left-4 top-3 text-sm text-zinc-600 data-[hasfeedback=true]:text-opacity-0"
                >
                  Feedback
                </motion.p>
                <Textarea
                  className="mb-auto h-[70%] w-full border-none bg-white outline-none ring-0 ring-offset-0 focus:border-none focus:outline-none focus:ring-0"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  autoFocus
                />
                <div className="absolute -left-1 bottom-11 z-10 h-2 w-2 rounded-r-full border border-zinc-300 bg-zinc-100" />
                <div className="absolute -left-[4.5px] bottom-11 z-20 h-2 w-1  bg-zinc-100" />
                <div className="absolute bottom-12 left-0 w-full border-t border-dashed border-zinc-200" />
                <div className="absolute -right-1 bottom-11 z-10 h-2 w-2 rounded-l-full border border-zinc-300 bg-zinc-100" />
                <div className="absolute -right-[4.5px] bottom-11 z-20 h-2 w-1  bg-zinc-100" />
                <div className="flex h-10 w-full items-center justify-end px-2 py-2">
                  <SubmissionButton
                    submissionState={submissionState}
                    handleSubmit={handleSubmit}
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

export default FeedbackPopoverComponent
