'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, FileWarning, Trash2 } from 'lucide-react'

import { Button } from '../ui/button'

const Toolbar = () => {
  return (
    <motion.div
      initial={{
        y: 20,
        opacity: 0,
        filter: 'blur(4px)',
      }}
      animate={{
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
      }}
      exit={{
        y: 20,
        opacity: 0,
        filter: 'blur(4px)',
      }}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.5,
        ease: 'easeOut',
      }}
      className="absolute bottom-10 flex gap-1 rounded-xl bg-white p-[5px] leading-5 shadow-[inset_0px_0.0px_0px_1px_#65656522] drop-shadow-sm"
    >
      <Button className="flex w-12 flex-col items-center rounded-lg bg-[#F9F9F8] pb-1 pt-[6px] text-[10px] font-medium text-[#8D8D86] transition-colors hover:text-black">
        <ArrowLeft className="h-4 w-4 flex-shrink-0" />
        Back
      </Button>
      <Button className="flex w-12 flex-col items-center rounded-lg bg-[#F9F9F8] pb-1 pt-[6px] text-[10px] font-medium text-[#8D8D86] transition-colors hover:bg-red-50 hover:text-red-500">
        <Trash2 className="h-4 w-4 flex-shrink-0" />
        Trash
      </Button>
      <Button className="flex  w-12 flex-col items-center rounded-lg bg-[#F9F9F8] pb-1 pt-[6px] text-[10px] font-medium text-[#8D8D86] hover:bg-orange-50 hover:text-orange-500">
        <FileWarning className="h-4 w-4 flex-shrink-0" />
        Report
      </Button>
    </motion.div>
  )
}

export default Toolbar
