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
    <div className="flex w-full items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          setJustify('start')
        }}
      >
        <ArrowLeft />
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
        variant="outline"
        size="icon"
        onClick={() => {
          setJustify('end')
        }}
      >
        <ArrowRight />
      </Button>
    </div>
  )
}

export default EaseComponent
