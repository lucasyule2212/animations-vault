'use client'
import { Play } from 'lucide-react'
import { useState } from 'react'

import EaseComponent from '@/components/easing-animations/ease-component'
import { Button } from '@/components/ui/button'

const EaseSection = () => {
  const [justifyAll, setJustifyAll] = useState<'start' | 'end'>('start')

  function handleToggleJustifyAll() {
    setJustifyAll((prev) => (prev === 'start' ? 'end' : 'start'))
  }
  return (
    <section className="mt-24 flex flex-col gap-4 px-52">
      <header className="flex items-center  gap-4">
        <h2>Easing</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggleJustifyAll}
          className="h-8 w-8 rounded-full"
        >
          <Play className="h-4 w-4 text-zinc-700" />
        </Button>
      </header>
      <EaseComponent easing="linear" justifyAll={justifyAll} />
      <EaseComponent easing="ease-in" justifyAll={justifyAll} />
      <EaseComponent easing="ease-out" justifyAll={justifyAll} />
      <EaseComponent easing="ease-in-out" justifyAll={justifyAll} />{' '}
    </section>
  )
}

export default EaseSection
