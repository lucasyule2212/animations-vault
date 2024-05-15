'use client'

import { Card } from '../ui/card'
import SimpleBox from './simple-box'

type SpringComponentProps = {
  animateStatus: boolean
}

const SpringComponent = ({ animateStatus }: SpringComponentProps) => {
  return (
    <div className="mt-4 flex w-full flex-col justify-center gap-2">
      <Card className="relative flex h-[300px] w-full justify-center p-6">
        <div className="absolute top-[174px] z-0 flex h-12 w-[100%] items-center gap-2 p-6">
          <div className="w-full rounded-md border border-zinc-600" />
          <p className="text-nowrap text-xs">actual duration</p>
        </div>
        <SimpleBox animateStatus={animateStatus} />
        <div className="absolute top-[205px] z-0 flex  w-[50%] items-center justify-center rounded-md bg-zinc-900 p-6">
          <p className="text-nowrap    text-xs text-zinc-700">bouncing area</p>
        </div>
        <div className="absolute top-[250px] z-0 flex h-12 w-[100%] items-center gap-2 p-6">
          <div className="w-full rounded-md border border-dashed border-zinc-800" />
          <p className="text-nowrap text-xs text-zinc-700">
            perceptual duration
          </p>
        </div>
      </Card>
    </div>
  )
}

export default SpringComponent
