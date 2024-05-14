'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import { Card } from '../ui/card'
import SimpleBox from './simple-box'

type EaseComponentProps = {
  easing?: 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'
  justifyAll?: 'start' | 'end'
}

const EaseComponent = ({
  easing = 'linear',
  justifyAll = 'start',
}: EaseComponentProps) => {
  const [justify, setJustify] = useState(justifyAll)

  useEffect(() => {
    setJustify(justifyAll)
  }, [justifyAll])

  const justifyClass: Record<string, string> = {
    start: 'justify-start',
    end: 'justify-end',
  }

  const easingClass: Record<string, number[]> = {
    'ease-in': [0.55, 0.055, 0.675, 0.19], // -- ease-in-cubic
    'ease-out': [0.23, 1, 0.32, 1], // -- ease-out-quint
    'ease-in-out': [0.785, 0.135, 0.15, 0.86], // -- ease-in-out-circ
    linear: [0, 0, 1, 1],
  }

  return (
    <div className="mt-4 flex w-full flex-col gap-2">
      <p className="ml-12 text-sm text-zinc-400">{easing}</p>
      <div className="flex w-full items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setJustify('start')
          }}
        >
          <ArrowLeft className="h-4 w-4 text-zinc-700" />
        </Button>
        <Card className={cn('flex w-full p-6', justifyClass[justify])}>
          <SimpleBox easing={easingClass[easing]} />
        </Card>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setJustify('end')
          }}
        >
          <ArrowRight className="h-4 w-4 text-zinc-700" />
        </Button>
      </div>
    </div>
  )
}

export default EaseComponent
