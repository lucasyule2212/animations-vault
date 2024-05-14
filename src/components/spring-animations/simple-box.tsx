'use client'

import { motion } from 'framer-motion'

type SimpleBoxProps = {
  animateStatus: string
  setAnimateStatus: (value: string) => void
}

const SimpleBox = ({ animateStatus, setAnimateStatus }: SimpleBoxProps) => {
  return (
    <motion.div
      onAnimationComplete={() => {
        setAnimateStatus('stopped')
      }}
      animate={
        animateStatus === 'running'
          ? {
              translateY: '150px',
            }
          : {}
      }
      transition={{
        type: 'spring',
        duration: 2.3,
        bounce: animateStatus === 'running' ? 0.7 : 0.2,
      }}
      className="z-10 h-12 w-12 rounded-full border bg-yellow-400 shadow-lg"
    />
  )
}

export default SimpleBox
