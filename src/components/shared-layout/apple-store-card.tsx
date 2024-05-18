'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import { Card } from '../ui/card'

const AppleStoreCardComponent = () => {
  const [isOpen, setIsOpen] = useState(true)
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
    <Card className="relative flex w-full min-w-[300px] items-center justify-center p-6">
      <AnimatePresence>
        {isOpen ? (
          <>
            <div className="flex w-[320px] flex-col">
              <div
                className="relative flex h-full w-[320px] flex-col p-4"
                ref={ref}
                style={{ borderRadius: 12 }}
              >
                <motion.span
                  layoutId="card-image"
                  className="absolute inset-0 h-full w-full"
                >
                  <Image
                    height={1000}
                    width={1000}
                    alt="Game"
                    src="https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png"
                    className="h-full w-full rounded-3xl"
                  />
                </motion.span>

                <motion.div className="absolute bottom-0 left-0 z-10 w-full">
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
                      src="https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png"
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
                </motion.div>
              </div>
              <div className="h-full bg-white text-primary">
                <p className="mt-4 text-center text-xs text-zinc-300">
                  This is a game about vikings. You can play it on your phone.
                </p>
              </div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
      <div
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
            src="https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png"
            className="h-full w-full rounded-3xl"
          />
        </motion.span>

        <motion.div className="absolute bottom-0 left-0 z-10 w-full">
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
              src="https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png"
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
        </motion.div>
      </div>
    </Card>
  )
}

export default AppleStoreCardComponent
