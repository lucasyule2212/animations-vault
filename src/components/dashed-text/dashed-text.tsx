'use client'

import { useMouse } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'

import { Card } from '../ui/card'
import { SnappySvg } from './snappy-svg'
import { SnappySvgFill } from './snappy-svg-fill'

const DashedText = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [mouse, ref] = useMouse()
  const [mouseText, refText] = useMouse()

  const [clipPercentage, setClipPercentage] = useState(100)

  useEffect(() => {
    if (isHovering && refText.current) {
      const cardHeight = (refText.current as HTMLElement).clientHeight
      const percentage = Math.max(
        0,
        Math.min(100, ((mouseText.elementY + 2) / cardHeight) * 100),
      )
      setClipPercentage(percentage)
    }
  }, [mouseText.elementY, isHovering, refText])

  return (
    <Card
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex relative min-h-[530px] w-full min-w-[350px] flex-col items-center justify-center gap-12 bg-background p-6"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <div
          className="absolute left-0 w-full h-[2px] bg-blue-500/50 z-30 pointer-events-none"
          style={{ top: `${mouse.elementY}px` }}
        />
      )}
      <div
        ref={refText as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 w-2/3 h-2/3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="absolute inset-0 z-10"
          style={{
            clipPath: `inset(${clipPercentage}% 0 0 0)`,
          }}
        >
          <SnappySvgFill className="text-white w-full h-full ml-[4px]" />
        </div>
        <div
          className="absolute inset-0 z-20"
          style={{
            clipPath: `inset(0 0 ${100 - clipPercentage}% 0)`,
          }}
        >
          <SnappySvg className="text-blue-800 w-full h-full" />
        </div>
      </div>
    </Card>
  )
}

export default DashedText
