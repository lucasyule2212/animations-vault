/* eslint-disable react/no-unescaped-entities */
'use client'
import { motion, MotionConfig } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'

import useMeasure from '@/hooks/use-measure'

import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

const MultiStepComponent = () => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const ref = useRef(null)
  const { height } = useMeasure({ ref })

  const steps = useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <h2 className="mb-2 font-semibold">This is step one</h2>
            <p>
              This is a multi-step component. It's a great way to guide users
              through a process.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <Skeleton className="h-6 w-64 bg-zinc-200" />
              <Skeleton className="h-6 w-48 bg-zinc-200" />
              <Skeleton className="h-6 w-24 bg-zinc-200" />
              <Skeleton className="h-6 w-96 bg-zinc-200" />
            </div>
          </>
        )
      case 1:
        return (
          <>
            <h2 className="mb-2 font-semibold">This is step two</h2>
            <p>
              In this step we could explain for example that this component is
              created using Framer Motion and uses 2 concepts of motion.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <Skeleton className="h-6 w-64 bg-zinc-200" />
              <Skeleton className="h-6 w-48 bg-zinc-200" />
              <Skeleton className="h-6 w-96 bg-zinc-200" />
            </div>
          </>
        )
      case 2:
        return (
          <>
            <h2 className="mb-2 font-semibold">This is step three</h2>
            <p>
              The concepts are: Height Animations and Direction Awareness
              motion. Have you noticed how them work?
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <Skeleton className="h-6 w-64 bg-zinc-200" />
              <Skeleton className="h-6 w-48 bg-zinc-200" />
              <Skeleton className="h-6 w-32 bg-zinc-200" />
              <Skeleton className="h-6 w-64 bg-zinc-200" />
              <Skeleton className="h-6 w-96 bg-zinc-200" />
            </div>
          </>
        )
    }
  }, [currentStep])

  return (
    <Card className="flex min-h-[500px] w-full min-w-[300px] items-center justify-center p-6 text-black">
      <MotionConfig transition={{ type: 'spring', bounce: 0, duration: 0.5 }}>
        <motion.div
          animate={{ height }}
          className="relative mx-auto w-[550px] overflow-hidden rounded-lg bg-white shadow-sm"
        >
          <div ref={ref} className="p-6">
            <div>{steps}</div>
            <motion.div layout className="mt-8 flex justify-between">
              <Button
                className="h-8 w-fit rounded-full px-4 text-sm font-medium text-zinc-700 shadow-sm"
                disabled={currentStep === 0}
                onClick={() => {
                  if (currentStep === 0) {
                    return
                  }
                  setCurrentStep((prev) => prev - 1)
                }}
              >
                Back
              </Button>
              <Button
                className="relative h-8 w-fit rounded-full bg-gradient-to-b from-[#1994ff] to-[#157cff] px-5 text-sm font-medium text-white shadow-sm"
                disabled={currentStep === 2}
                onClick={() => {
                  if (currentStep === 2) {
                    setCurrentStep(0)
                    return
                  }
                  setCurrentStep((prev) => prev + 1)
                }}
              >
                Continue
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </MotionConfig>
    </Card>
  )
}

export default MultiStepComponent
