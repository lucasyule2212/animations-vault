'use client'

import { Lock, LucideProps, NotepadText, TriangleAlert, X } from 'lucide-react'
import { ReactNode } from 'react'
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
        'h-12 w-full items-center justify-start gap-2 rounded-xl bg-zinc-100 text-[17px] text-base font-semibold text-zinc-800 transition-all duration-150 hover:bg-zinc-200 focus:scale-95 active:scale-95',
        isDestructive && 'bg-red-100 text-red-500 hover:bg-red-200',
      )}
      onClick={() => setView(view)}
    >
      <Icon
        data-isdestructive={isDestructive}
        absoluteStrokeWidth
        className="h-5 w-5 text-zinc-400 data-[isdestructive=true]:text-red-500"
      />
      {title}
    </Button>
  )
}

export function Header({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <header className="mt-[21px]">
      {icon}
      <h2 className="mt-2.5 text-[22px] font-semibold text-[#222222] md:font-medium">
        {title}
      </h2>

      <p className="mt-3 text-[17px] font-medium leading-[24px] text-[#999999] md:font-normal">
        {description}
      </p>
    </header>
  )
}

export function MainButton({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: () => void
}) {
  return (
    <button
      data-vaul-no-drag=""
      className=" focus-visible:shadow-focus-ring-button flex h-12 w-full items-center gap-[15px] rounded-[16px] bg-[#F7F8F9] px-4 text-[17px] font-semibold text-[#222222] transition-transform focus:scale-95 active:scale-95 md:font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export function SecondaryButton({
  children,
  onClick,
  className,
}: {
  children: ReactNode
  onClick: () => void
  className: string
}) {
  return (
    <button
      data-vaul-no-drag=""
      className={cn(
        'focus-visible:shadow-focus-ring-button flex h-12 w-full items-center justify-center gap-[15px] rounded-full text-center text-[19px] font-semibold transition-transform focus:scale-95 active:scale-95 md:font-medium',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default DefaultView
