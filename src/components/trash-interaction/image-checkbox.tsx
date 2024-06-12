'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import { Checkbox } from '../ui/checkbox'

interface ImageCheckboxProps {
  image: string
  onClick: () => void
}

const ImageCheckbox = ({ image, onClick }: ImageCheckboxProps) => {
  const [checked, setChecked] = useState(false)

  const handleOnClick = () => {
    setChecked((prev) => !prev)
    onClick()
  }

  return (
    <motion.div
      layoutId={image}
      exit={{
        filter: 'blur(4px)',
      }}
      className="cursor-pointer"
      onClick={handleOnClick}
    >
      <Checkbox
        checked={checked}
        onChange={() => handleOnClick()}
        className="absolute right-2 top-2 rounded-full transition duration-200 ease-out data-[state=checked]:border-black data-[state=checked]:bg-black data-[state=checked]:text-white"
      />
      <Image
        src={`https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/why-framer-motion/${image}.webp`}
        width={500}
        height={500}
        alt={image}
        className="h-24 w-24 rounded-xl"
      />
    </motion.div>
  )
}

export default ImageCheckbox
