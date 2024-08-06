'use client'

import { Lock, LucideProps, NotepadText, TriangleAlert, X } from 'lucide-react'
import { Drawer } from 'vaul'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

const DefaultView = ({
  setView,
}: {
  setView: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-b-zinc-100 pb-4">
        <p className="font-medium">Options</p>
        <Drawer.Close className="h-fit w-fit rounded-full bg-zinc-100 p-1">
          <X
            className="h-4 w-4 stroke-[3px] text-zinc-400"
            absoluteStrokeWidth
          />
        </Drawer.Close>
      </div>
      <div className="mt-4 flex flex-col items-start gap-2">
        <OptionsButton
          title="View private key"
          view="key"
          setView={setView}
          icon={Lock}
        />
        <OptionsButton
          title="View recovery phrase"
          view="phrase"
          setView={setView}
          icon={NotepadText}
        />
        <OptionsButton
          title="Remove wallet"
          view="remove"
          setView={setView}
          icon={TriangleAlert}
          isDestructive
        />
      </div>
    </div>
  )
}

const OptionsButton = ({
  title,
  view,
  setView,
  icon: Icon,
  isDestructive,
}: {
  title: string
  view: string
  setView: React.Dispatch<React.SetStateAction<string>>
  icon: React.ComponentType<Omit<LucideProps, 'ref'> & { className?: string }>
  isDestructive?: boolean
}) => {
  return (
    <Button
      className={cn(
        'h-12 w-full items-center justify-start gap-2 rounded-xl bg-zinc-100 text-base font-semibold text-zinc-600 transition-all duration-150 focus:scale-95 active:scale-95',
        isDestructive && 'bg-red-100 text-red-400 hover:bg-red-50',
      )}
      onClick={() => setView(view)}
    >
      <Icon
        data-isdestructive={isDestructive}
        absoluteStrokeWidth
        className="h-4 w-4 stroke-[3px] text-zinc-400 data-[isdestructive=true]:text-red-400"
      />
      {title}
    </Button>
  )
}

export default DefaultView
