'use client'

import { useState } from 'react'

import { Card } from '../ui/card'
import ImageCheckbox from './image-checkbox'

const IMAGES = ['japan', 'jungle', 'new-york', 'desert']

const TrashInteractionComponent = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([])

  const handleImageClick = (image: string) => {
    setSelectedImages((prev) => {
      if (prev.includes(image)) {
        return prev.filter((prevImage) => prevImage !== image)
      }

      return [...prev, image]
    })
  }

  console.log(selectedImages)

  return (
    <Card className="flex min-h-[500px] w-full min-w-[300px] items-center justify-center bg-white p-6">
      <div className="flex w-[300px] flex-wrap items-center justify-center gap-4">
        {IMAGES.map((image) => (
          <div key={image} className="relative">
            <ImageCheckbox
              image={image}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
    </Card>
  )
}

export default TrashInteractionComponent
