'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

import SimpleBox from '../simple-box'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

type EaseComponentProps = {
  easing?: 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'
}

const EaseComponent = ({ easing = 'linear' }: EaseComponentProps) => {
  const [justify, setJustify] = useState('start')

  const justifyClass: Record<string, string> = {
    start: 'justify-start',
    end: 'justify-end',
  }

  const easingClass: Record<string, string> = {
    'ease-in': 'ease-in-circ',
    'ease-out': 'ease-out-circ',
    'ease-in-out': 'ease-in-out-circ',
    linear: 'ease-linear',
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
        <Card
          className={cn(
            'flex w-full p-6',
            justifyClass[justify],
            easingClass[easing],
          )}
        >
          <SimpleBox />
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
