'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import { Card } from '../ui/card'

type Game = {
  title: string
  description: string
  longDescription: string
  image: string
}

const GAMES: Game[] = [
  {
    title: 'The Oddysey',
    description: 'Explore unknown galaxies.',
    longDescription:
      'Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.',
    image:
      'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png',
  },
  {
    title: 'Angry Rabbits',
    description: 'They are coming for you.',
    longDescription:
      'The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.',
    image:
      'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png',
  },
  {
    title: 'Ghost town',
    description: 'Find the ghosts.',
    longDescription:
      'You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.',
    image:
      'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp',
  },
  {
    title: 'Pirates in the jungle',
    description: 'Find the treasure.',
    longDescription:
      'You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.',
    image:
      'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png',
  },

  {
    title: 'Lost in the mountains',
    description: 'Find your way home.',
    longDescription:
      'You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.',
    image:
      'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp',
  },
]

const SharedLayoutComponent = () => {
  const [activeGame, setActiveGame] = useState<Game | null>(null)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setActiveGame(null))

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveGame(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <Card className="relative flex w-full min-w-[300px] items-center justify-center p-6">
      <AnimatePresence>
        {activeGame ? (
          <>
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
              className="pointer-events-none absolute inset-0 z-10 bg-black/20"
            />
            <div className="absolute inset-0 z-10 grid place-items-center">
              <motion.div
                layoutId={`${activeGame.title}-card`}
                className="flex h-fit max-w-[500px] cursor-pointer flex-col items-start gap-4 overflow-hidden border border-zinc-800 bg-zinc-900 p-4"
                ref={ref}
                style={{ borderRadius: 12 }}
              >
                <div className="flex w-full items-center gap-4">
                  <motion.span layoutId={activeGame.image}>
                    <Image
                      height={1000}
                      width={1000}
                      alt="Game"
                      src={activeGame.image}
                      style={{ borderRadius: 12 }}
                      className="h-14 w-14"
                    />
                  </motion.span>

                  <div className="flex flex-grow items-center justify-between">
                    <div className="flex flex-col py-3">
                      <motion.h2
                        layoutId={activeGame.title}
                        className="text-sm font-semibold"
                      >
                        {activeGame.title}
                      </motion.h2>
                      <motion.p
                        layoutId={activeGame.description}
                        className="text-sm text-stone-400"
                      >
                        {activeGame.description}
                      </motion.p>
                    </div>
                    <motion.button
                      layoutId={`get-button-${activeGame.title}`}
                      className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-blue-600"
                    >
                      Get
                    </motion.button>
                  </div>
                </div>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.05 },
                  }}
                  className="text-sm text-stone-400"
                >
                  {activeGame.longDescription}
                </motion.p>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
      <ul className="relative my-12 flex w-full flex-col items-center p-0">
        {GAMES.map((game) => (
          <motion.li
            layoutId={`${game.title}-card`}
            key={game.title}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
            className="flex w-full cursor-pointer items-center gap-4 p-0 sm:w-[368px]"
          >
            <motion.span layoutId={game.image}>
              <Image
                height={1000}
                width={1000}
                alt="Game"
                src={game.image}
                style={{ borderRadius: 12 }}
                priority
                className="h-14 w-14"
              />
            </motion.span>
            <div className="flex flex-grow items-center justify-between border-b border-b-zinc-800">
              <div className="flex flex-col py-4">
                <motion.h2
                  layoutId={game.title}
                  className="text-sm font-semibold text-gray-200 "
                >
                  {game.title}
                </motion.h2>
                <motion.p
                  layoutId={game.description}
                  className="text-sm text-stone-400"
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.button
                layoutId={`get-button-${game.title}`}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-blue-600"
              >
                Get
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </Card>
  )
}

export default SharedLayoutComponent
