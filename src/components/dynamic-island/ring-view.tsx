'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { CustomBell } from '../ui/custom-icons'

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
      initial={{
        opacity: 0,
        filter: 'blur(4px)',
      }}
      animate={{
        width: isSilent ? 155 : 130,
        opacity: 1,
        filter: 'blur(0px)',
      }}
      exit={{
        opacity: 0,
        filter: 'blur(4px)',
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
      <motion.div
        initial={false}
        className="relative h-5 w-5"
        animate={{
          rotate: isSilent
            ? [0, -15, 5, -2, 0] // silent to ring
            : [0, 20, -15, 12.5, -10, 10, -7.5, 7.5, -5, 5, 0], // ring to silent
          x: isSilent ? 5 : 0,
        }}
      >
        <div className="relative">
          <CustomBell className="h-5 w-5 fill-white" />
          {/* Bell Clapper */}
          <motion.div
            className="absolute left-[7px] top-[12px] h-[6px] w-[6px] rounded-full bg-white"
            animate={{
              translateX: isSilent ? [0, -6, 6, -2, 2, 0] : [0, -5, 5, -2, 0],
            }}
          />
          <CustomBell className="absolute top-0 h-5 w-5 fill-white" />
        </div>
        {/* Silent Slash */}
        <div className="absolute inset-0">
          <div className="h-5  -translate-y-[5.75px] translate-x-[7.25px] rotate-[-40deg] overflow-hidden">
            <motion.div
              animate={{ height: isSilent ? 20 : 0 }}
              transition={{
                ease: 'easeInOut',
                duration: isSilent ? 0.125 : 0.05,
                delay: isSilent ? 0.15 : 0,
              }}
              className="w-fit rounded-full"
            >
              <div className="flex h-full w-[3px] items-center justify-center rounded-full bg-[#FD4F30]">
                <div className="h-full w-[0.75px] rounded-full bg-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
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
