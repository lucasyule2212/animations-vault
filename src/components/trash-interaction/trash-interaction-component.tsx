'use client'

import Image from 'next/image'

import { Card } from '../ui/card'
import { Checkbox } from '../ui/checkbox'

const IMAGES = ['japan', 'jungle', 'new-york', 'desert']

const TrashInteractionComponent = () => {
  return (
    <Card className="flex min-h-[500px] w-full min-w-[300px] items-center justify-center bg-white p-6">
      <div className="flex w-[300px] flex-wrap items-center justify-center gap-4">
        {IMAGES.map((image) => (
          <div key={image} className="relative">
            <Checkbox className="absolute right-2 top-2 rounded-full data-[state=checked]:border-black data-[state=checked]:bg-black data-[state=checked]:text-white" />
            <Image
              src={`https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/why-framer-motion/${image}.webp`}
              width={500}
              height={500}
              alt={image}
              className="h-24 w-24 rounded-xl"
            />
          </div>
        ))}
      </div>
    </Card>
  )
}

export default TrashInteractionComponent
