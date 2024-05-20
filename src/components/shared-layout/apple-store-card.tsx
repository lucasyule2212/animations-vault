'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import { Card } from '../ui/card'

const AppleStoreCardComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setIsOpen(false))

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <Card className="flex w-full min-w-[300px] items-center justify-center p-6">
      <AnimatePresence>
        {isOpen ? (
          <div className="flex w-[320px] flex-col items-center">
            <motion.div
              ref={ref}
              layoutId="card-container"
              className="relative flex h-[370px] w-full cursor-pointer flex-col items-center"
            >
              <motion.span
                layoutId="card-image"
                className="absolute inset-0 h-full w-full"
              >
                <Image
                  height={1000}
                  width={1000}
                  alt="Game"
                  src="https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game.webp"
                  className="h-full w-full"
                />
              </motion.span>

              <div className="absolute bottom-0 left-0 z-10 w-full">
                <motion.p
                  layoutId="card-title"
                  className="text-balance p-3 text-[40px] font-extrabold leading-10 tracking-wide"
                >
                  GAME <br /> OF THE <br />
                  DAY
                </motion.p>
                <motion.div
                  layoutId="card-footer"
                  className="flex w-full items-center bg-black/20 p-3 backdrop-blur-[3px]"
                >
                  <Image
                    height={1000}
                    width={1000}
                    alt="Game"
                    src="https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game-logo.webp"
                    className="h-10 w-10 rounded-md"
                  />
                  <div className="ml-2">
                    <p className="text-xs">Vikings</p>
                    <p className="text-xs text-zinc-300">
                      A game about vikings
                    </p>
                  </div>
                  <motion.button className="ml-auto rounded-full bg-zinc-400/40 px-5 py-2 text-xs font-semibold backdrop-blur-sm">
                    Get
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div className="flex w-full flex-col gap-4 bg-white p-4 text-left text-muted-foreground">
              <p>
                <b className="text-background">Are you ready?</b> A game about
                vikings, where you can play as a viking and fight other vikings.
                You can also build your own viking village and explore the
                world.
              </p>
              <p>
                <b className="text-background">The never ending adventure </b>
                In this game set in a fairy tale world, players embark on a
                quest through mystical lands filled with enchanting forests and
                towering mountains. Players can explore the world, build their
                own viking
              </p>
            </motion.div>
          </div>
        ) : (
          <motion.div
            layoutId="card-container"
            className="relative my-12 flex h-[370px] w-[320px] cursor-pointer flex-col items-center"
            onClick={() => setIsOpen(true)}
          >
            <motion.span
              layoutId="card-image"
              className="absolute inset-0 h-full w-full"
            >
              <Image
                height={1000}
                width={1000}
                alt="Game"
                src="https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game.webp"
                className="h-full w-full rounded-3xl"
              />
            </motion.span>

            <div className="absolute bottom-0 left-0 z-10 w-full">
              <motion.p
                layoutId="card-title"
                className="text-balance p-3 text-[40px] font-extrabold leading-10 tracking-wide"
              >
                GAME <br /> OF THE <br />
                DAY
              </motion.p>
              <motion.div
                layoutId="card-footer"
                className="flex w-full items-center bg-black/20 p-3 backdrop-blur-[3px]"
              >
                <Image
                  height={1000}
                  width={1000}
                  alt="Game"
                  src="https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game-logo.webp"
                  className="h-10 w-10 rounded-md"
                />
                <div className="ml-2">
                  <p className="text-xs">Vikings</p>
                  <p className="text-xs text-zinc-300">A game about vikings</p>
                </div>

                <motion.button className="ml-auto rounded-full bg-zinc-400/40 px-5 py-2 text-xs font-semibold backdrop-blur-sm">
                  Get
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

export default AppleStoreCardComponent
