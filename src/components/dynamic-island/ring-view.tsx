'use client'

import { Bell, BellSimpleSlash } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const RingView = () => {
  const [isSilent, setIsSilent] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => {
      setIsSilent((prev) => !prev)
    }, 3000)

    return () => clearTimeout(id)
  }, [isSilent])

  return (
    <motion.div
      className="relative flex h-5 items-center justify-between px-2.5"
      animate={{
        width: isSilent ? 155 : 130,
      }}
      transition={{
        type: 'spring',
        bounce: 0.5,
      }}
    >
      <AnimatePresence>
        {isSilent ? (
          <motion.div
            initial={{
              opacity: 0,
              transform: 'scaleX(0)',
              filter: 'blur(4px)',
            }}
            animate={{
              opacity: 1,
              transform: 'scaleX(1)',
              filter: 'blur(0px)',
            }}
            transition={{ type: 'spring', bounce: 0.35 }}
            className="absolute left-0 h-[25px] w-12 rounded-full bg-red-500"
            style={{
              originX: 'left',
            }}
          />
        ) : null}
      </AnimatePresence>
      {/* TODO: Animate the Bell wrapper + detailed bell animation */}
      {isSilent ? (
        <BellSimpleSlash className="z-10 ml-0.5 h-5 w-5" weight="fill" />
      ) : (
        <Bell className="h-5 w-5" weight="fill" />
      )}
      <AnimatePresence mode="popLayout" initial={false}>
        {isSilent ? (
          <motion.span
            key="silent"
            initial={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
            className="text-sm font-medium text-red-500"
          >
            Silent
          </motion.span>
        ) : (
          <motion.span
            key="ring"
            initial={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.25, filter: 'blur(4px)' }}
            className="text-sm font-medium text-white"
            style={{
              originX: 'right',
            }}
          >
            Ring
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default RingView
