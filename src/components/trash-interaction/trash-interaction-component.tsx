'use client'

import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '../ui/button'
import { Card } from '../ui/card'
import ImageCheckbox from './image-checkbox'
import Toolbar from './toolbar'
import { TrashBack, TrashFront } from './trash-assets'

const IMAGES = ['japan', 'jungle', 'new-york', 'desert']

const TrashInteractionComponent = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [readyToDelete, setReadyToDelete] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleImageClick = (image: string) => {
    setSelectedImages((prev) => {
      if (prev.includes(image)) {
        return prev.filter((prevImage) => prevImage !== image)
      }

      return [...prev, image]
    })
  }

  const handleDelete = () => {
    setReadyToDelete(true)
  }

  const handleDeleteImages = () => {
    setIsDeleting(true)
  }

  useEffect(() => {
    if (isDeleting) {
      setTimeout(() => {
        setSelectedImages([])
        setReadyToDelete(false)
        setIsDeleting(false)
      }, 1200)
    }
  }, [isDeleting])

  return (
    <Card className="relative flex min-h-[500px] w-full min-w-[300px] items-center justify-center bg-white p-6">
      <MotionConfig
        transition={{
          type: 'spring',
          duration: 0.5,
          bounce: 0.2,
        }}
      >
        <AnimatePresence>
          {readyToDelete && (
            <div className="absolute top-1/2 z-10 h-[114px] w-24 -translate-y-1/2">
              <motion.div
                initial={{
                  scale: 1.2,
                  opacity: 0,
                  filter: 'blur(4px)',
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  filter: 'blur(0px)',
                }}
                exit={{
                  scale: 1.2,
                  opacity: 0,
                  filter: 'blur(4px)',
                }}
                className="w-[92px]"
              >
                <TrashBack />
              </motion.div>
              <motion.div
                animate={{
                  y: isDeleting ? 110 : 73,
                  scale: isDeleting ? 0.9 : 1,
                  filter: isDeleting ? 'blur(2px)' : 'blur(0px)',
                }}
                transition={
                  isDeleting
                    ? { duration: 0.3, type: 'spring', bounce: 0 }
                    : { delay: 0.13 }
                }
                className="absolute top-[-60px] flex w-full flex-col-reverse items-center"
              >
                {selectedImages.map((image, index) => (
                  <li key={image} className="flex h-1 items-center gap-2">
                    <motion.img
                      layoutId={image}
                      className="h-16 w-16 rounded"
                      alt={image}
                      src={`https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/why-framer-motion/${image}.webp`}
                      style={{
                        rotate:
                          index % 2 === 0
                            ? 4 * (selectedImages.length - index + 1)
                            : -1 * (selectedImages.length - index + 1) * 4,
                      }}
                    />
                  </li>
                ))}
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  delay: isDeleting ? 0 : 0.1,
                  duration: 0,
                }}
                className="absolute bottom-[0] left-[2px] h-full w-[90px]"
              >
                <TrashFront />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!readyToDelete && (
            <div className="flex w-[300px] flex-wrap items-center justify-center gap-4">
              {IMAGES.map((image) => {
                const isSelected = selectedImages.includes(image)
                return (
                  <motion.div
                    exit={
                      isSelected
                        ? {}
                        : {
                            opacity: 0,
                            filter: 'blur(4px)',
                            transition: {
                              ease: 'easeOut',
                              duration: 0.17,
                            },
                          }
                    }
                    key={image}
                    className="relative select-none"
                  >
                    <ImageCheckbox
                      image={image}
                      onClick={() => handleImageClick(image)}
                    />
                  </motion.div>
                )
              })}
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout" initial={false}>
          {selectedImages.length > 0 && !readyToDelete && (
            <Toolbar onDelete={handleDelete} />
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout" initial={false}>
          {readyToDelete && (
            <Button
              data-isdeleting={isDeleting}
              className="absolute bottom-12 h-fit w-[160px] rounded-full bg-red-500 text-white hover:bg-red-500/90 data-[isdeleting=true]:bg-green-500 data-[isdeleting=true]:hover:bg-green-500/90"
              onClick={handleDeleteImages}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={isDeleting ? 'deleting' : 'trash'}
                  initial={{
                    opacity: 0,
                    filter: 'blur(4px)',
                    y: -25,
                  }}
                  animate={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    filter: 'blur(4px)',
                    y: 25,
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  {isDeleting ? (
                    <div className="flex items-center gap-2">
                      Done
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    </div>
                  ) : (
                    <>
                      Trash {selectedImages.length}
                      {selectedImages.length > 1
                        ? ' collectibles'
                        : ' collectible'}
                    </>
                  )}
                </motion.span>
              </AnimatePresence>
            </Button>
          )}
        </AnimatePresence>
      </MotionConfig>
    </Card>
  )
}

export default TrashInteractionComponent
