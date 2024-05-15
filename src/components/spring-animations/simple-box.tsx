'use client'

import { motion } from 'framer-motion'

type SimpleBoxProps = {
  animateStatus: boolean
}

const SimpleBox = ({ animateStatus }: SimpleBoxProps) => {
  return (
    <motion.div
      animate={{ translateY: animateStatus ? 150 : 0 }}
      transition={{
        type: 'spring',
        duration: 2.3,
        bounce: animateStatus ? 0.7 : 0.2,
      }}
      className="z-10 h-12 w-12 rounded-full border bg-yellow-400 shadow-lg"
    />
  )
}

export default SimpleBox
