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
    <Card className="relative flex h-[700px] w-full min-w-[300px] items-center justify-center p-6">
      <AnimatePresence>
        {isOpen ? (
          <div>
            <motion.div
              ref={ref}
              layoutId="card-container"
              className="absolute left-[25%] top-0 my-auto flex h-full w-[360px] select-none flex-col overflow-hidden bg-white"
            >
              <div className="relative flex h-[430px] w-[360px] flex-col items-center">
                <motion.span
                  layoutId="card-image"
                  className="absolute inset-0 h-full w-full"
                >
                  <Image
                    height={1000}
                    width={1000}
                    alt="Game"
                    src="https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game.webp"
                    className="pointer-events-none h-full w-full"
                  />
                </motion.span>

                <motion.div
                  layoutId="card-content"
                  className="absolute bottom-0 left-0 z-10 w-full"
                >
                  <div className="p-3">
                    <motion.p
                      layoutId="card-title"
                      className="max-w-[160px] text-left text-[40px] font-extrabold leading-10 tracking-wide"
                    >
                      GAME <br /> OF THE <br />
                      DAY
                    </motion.p>
                  </div>
                  <motion.div
                    layoutId="card-footer-container"
                    className="flex w-full items-center bg-black/20 p-3 backdrop-blur-[3px]"
                  >
                    <motion.span layoutId="card-footer-image">
                      <Image
                        height={1000}
                        width={1000}
                        alt="Game"
                        src="https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game-logo.webp"
                        className="h-10 w-10 rounded-md"
                      />
                    </motion.span>
                    <div className="ml-2">
                      <motion.p
                        layoutId="card-footer-title"
                        className="text-xs"
                      >
                        Vikings
                      </motion.p>
                      <motion.p
                        layoutId="card-footer-subtitle"
                        className="text-xs text-zinc-300"
                      >
                        A game about vikings
                      </motion.p>
                    </div>
                    <motion.button
                      layoutId="card-footer-button"
                      className="ml-auto rounded-full bg-zinc-400/40 px-5 py-2 text-xs font-semibold backdrop-blur-sm"
                    >
                      Get
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
              <motion.div
                layoutId="card-long-description"
                className="flex-1 p-4 leading-6 text-muted-foreground"
              >
                <div>
                  <p className="mb-4">
                    <b className="font-semibold text-background">
                      Are you ready?
                    </b>{' '}
                    A game about vikings, where you can play as a viking and
                    fight other vikings. You can also build your own viking
                    village and explore the world.
                  </p>
                  <p>
                    <b className="font-semibold text-background">
                      The never ending adventure{' '}
                    </b>
                    In this game set in a fairy tale world, players embark on a
                    quest through mystical lands filled with enchanting forests
                    and towering mountains. Players can explore the world, build
                    their own viking.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            layoutId="card-container"
            whileTap={{
              scale: 0.98,
            }}
            className="relative my-auto h-[370px] w-[320px] cursor-pointer select-none overflow-hidden"
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

            <motion.div
              layoutId="card-content"
              className="absolute bottom-0 left-0 z-10 w-full"
            >
              <div className="p-3">
                <motion.p
                  layoutId="card-title"
                  className="max-w-[160px] text-left text-[40px] font-extrabold leading-10 tracking-wide"
                >
                  GAME <br /> OF THE <br />
                  DAY
                </motion.p>
              </div>
              <motion.div
                layoutId="card-footer-container"
                className="relative flex w-full items-center bg-black/20 p-3 backdrop-blur-[3px]"
              >
                <motion.span layoutId="card-footer-image">
                  <Image
                    height={1000}
                    width={1000}
                    alt="Game"
                    src="https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game-logo.webp"
                    className="h-10 w-10 rounded-md"
                  />
                </motion.span>
                <div className="ml-2">
                  <motion.p layoutId="card-footer-title" className="text-xs">
                    Vikings
                  </motion.p>
                  <motion.p
                    layoutId="card-footer-subtitle"
                    className="text-xs text-zinc-300"
                  >
                    A game about vikings
                  </motion.p>
                </div>

                <motion.button
                  layoutId="card-footer-button"
                  className="ml-auto rounded-full bg-zinc-400/40 px-5 py-2 text-xs font-semibold backdrop-blur-sm"
                >
                  Get
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              layoutId="card-long-description"
              style={{
                opacity: 0,
                position: 'absolute',
                top: '100%',
              }}
              className="flex-1 bg-white p-4  text-sm leading-6 text-muted-foreground"
            >
              <div>
                <p className="mb-4">
                  <b className="text-background">Are you ready?</b> A game about
                  vikings, where you can play as a viking and fight other
                  vikings. You can also build your own viking village and
                  explore the world.
                </p>
                <p>
                  <b className="text-background">The never ending adventure </b>
                  In this game set in a fairy tale world, players embark on a
                  quest through mystical lands filled with enchanting forests
                  and towering mountains. Players can explore the world, build
                  their own viking.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

export default AppleStoreCardComponent
