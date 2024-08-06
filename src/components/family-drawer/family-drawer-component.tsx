'use client'
import { motion } from 'framer-motion'
import { Settings } from 'lucide-react'
import { useMemo, useState } from 'react'
import useMeasure from 'react-use-measure'
import { Drawer } from 'vaul'

import { Button } from '../ui/button'
import { Card } from '../ui/card'
import DefaultView from './default-view'
import KeyView from './key-view'
import PhraseView from './phrase-view'
import RemoveView from './remove-view'

const FamilyDrawerComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState('default')
  const [elementRef, bounds] = useMeasure()

  const content = useMemo(() => {
    switch (view) {
      case 'default':
        return <DefaultView setView={setView} />

      case 'phrase':
        return <PhraseView setView={setView} />

      case 'key':
        return <KeyView setView={setView} />

      case 'remove':
        return <RemoveView setView={setView} />

      default:
        break
    }
  }, [setView, view])

  return (
    <Card className="relative flex min-h-[500px] w-full min-w-[300px] items-center justify-center bg-white p-6 font-openRunde">
      <Button
        className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200 font-semibold text-zinc-600 shadow-sm hover:bg-zinc-100"
        onClick={() => setIsOpen(true)}
      >
        Settings{' '}
        <Settings className="ml-2 h-5 w-5 transition-all duration-100 group-hover:rotate-180" />
      </Button>
      <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Portal>
          <Drawer.Overlay
            className="fixed inset-0 z-10 bg-black/30"
            onClick={() => setIsOpen(false)}
          />
          <Drawer.Content
            asChild
            className="fixed inset-x-4 bottom-4 z-10 mx-auto w-[340px] overflow-hidden rounded-[36px] bg-[#FEFFFE] font-openRunde text-black outline-none md:mx-auto"
          >
            <motion.div
              animate={{
                height: bounds.height,
              }}
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.3,
              }}
            >
              <div className="px-6 pb-6 pt-2" ref={elementRef}>
                <Drawer.Handle className="mb-4 bg-zinc-200" />
                {content}
              </div>
            </motion.div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </Card>
  )
}

export default FamilyDrawerComponent
