'use client'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

import { Slider } from '@/components/ui/slider'

const PerformanceComponent = () => {
  const [sliderValue, setSliderValue] = useState([0])

  const numericValue = useSpring(0, {
    stiffness: 185,
    damping: 25,
  })

  const numericDisplay = useTransform(
    numericValue,
    (value) => `${Math.round(value)}`,
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      numericValue.set(sliderValue[0])
    }, 75)

    return () => clearTimeout(timer)
  }, [sliderValue, numericValue])

  return (
    <div className="flex flex-col items-center gap-8 p-8 border rounded-lg bg-card">
      <div className="text-center">
        <motion.div
          className="text-6xl font-bold tabular-nums tracking-tight"
          style={{
            color: 'hsl(var(--foreground))',
          }}
        >
          {numericDisplay}
        </motion.div>
      </div>

      <div className="w-full max-w-md space-y-2">
        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          max={100}
          min={0}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0</span>
          <span>100</span>
        </div>
      </div>
    </div>
  )
}

export default PerformanceComponent
