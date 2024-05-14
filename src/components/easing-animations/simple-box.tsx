'use client'

import { motion } from 'framer-motion'

type SimpleBoxProps = {
  easing?: number[]
}

const SimpleBox = ({ easing }: SimpleBoxProps) => {
  return (
    <motion.div
      layout
      transition={{
        duration: 1,
        ease: easing,
      }}
      className="h-12 w-12 rounded-full border bg-blue-400 shadow-lg"
    />
  )
}

export default SimpleBox
