'use client'

import { motion } from 'framer-motion'

const SimpleBox = () => {
  return (
    <motion.div
      layout
      className="h-12 w-12 rounded-full border bg-blue-400 shadow-lg"
    />
  )
}

export default SimpleBox
