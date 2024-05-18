'use client'
import { cva } from 'class-variance-authority'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { ShieldAlert, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

import { AppleSpinner } from '../ui/apple-spinner'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

const buttonStates = {
  idle: {
    text: 'secure',
    icon: <ShieldAlert className="h-4 w-4" />,
  },
  loading: {
    text: 'securing',
    icon: <AppleSpinner size={16} color="rgba(255, 255, 255, 0.65)" />,
  },
  success: {
    text: 'wallet secured',
    icon: <ShieldCheck className="h-4 w-4" />,
  },
}

const animationVariants: Variants = {
  initial: { opacity: 0, y: -25 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 25 },
}

const MultipleStateButtonComponent = () => {
  const [buttonState, setButtonState] =
    useState<keyof typeof buttonStates>('idle')

  const buttonStyleVariants = cva(
    'w-[150px] overflow-hidden rounded-2xl bg-zinc-900 shadow-[inset_0px_0.5px_0px_1px_#65656522] drop-shadow-md transition-colors disabled:opacity-100',
    {
      variants: {
        variant: {
          idle: 'text-red-500 hover:bg-red-300/10',
          loading: 'text-primary hover:bg-zinc-400/10',
          success: 'text-green-500 bg-green-300/10',
        },
      },
      defaultVariants: {
        variant: 'idle',
      },
    },
  )

  return (
    <Card className="flex w-full min-w-[300px] items-center justify-center p-6">
      <Button
        className={cn(buttonStyleVariants({ variant: buttonState }))}
        disabled={buttonState !== 'idle'}
        onClick={() => {
          setButtonState('loading')

          setTimeout(() => {
            setButtonState('success')
          }, 2350)

          setTimeout(() => {
            setButtonState('idle')
          }, 7000)
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={buttonState}
            className="flex items-center gap-2"
            variants={animationVariants}
            initial="initial"
            animate="visible"
            exit="exit"
            transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
          >
            {buttonStates[buttonState].icon}
            {buttonStates[buttonState].text}
          </motion.span>
        </AnimatePresence>
      </Button>
    </Card>
  )
}

export default MultipleStateButtonComponent
