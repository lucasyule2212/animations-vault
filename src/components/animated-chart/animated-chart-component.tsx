'use client'

import {
  motion,
  SpringOptions,
  useMotionTemplate,
  useSpring,
} from 'framer-motion'
import { useCallback, useRef } from 'react'

const SPRING: SpringOptions = {
  damping: 18,
}

const AnimatedChartComponent = () => {
  const chartX = useSpring(0, SPRING)
  const containerRef = useRef<HTMLDivElement>(null)

  const chartXValueTemplate = useMotionTemplate`inset(0px ${chartX}% 0px 0px)`

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const relativeX = e.clientX - rect.left
      const percentage = Math.max(
        0,
        Math.min(100, (relativeX / rect.width) * 100),
      )

      chartX.set(100 - percentage)
    },
    [chartX],
  )

  return (
    <div className="flex flex-col relative items-center gap-8 pt-6 overflow-hidden border rounded-lg bg-primary w-full">
      <div ref={containerRef} className="w-full" onPointerMove={onPointerMove}>
        {/* Chart */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 644 188"
          style={{
            clipPath: chartXValueTemplate,
          }}
        >
          <path
            stroke="#0090FF"
            strokeWidth="2"
            d="M1 118.5s82.308-15.501 113.735-29 74.769-1.713 121.217-12c37.596-8.328 58.517-15.006 93.781-30.5 80.146-35.215 123.213-16 154.141-24.5S635.97.849 644 1.5"
          ></path>
          <path
            fill="url(#paint0_linear_540_31)"
            d="M113.912 89.012C82.437 102.511 1 118.01 1 118.01V188h643V1.023c-8.043-.65-129.399 12.499-160.375 20.998-30.976 8.498-74.11-10.714-154.38 24.496-35.319 15.493-56.272 22.17-93.927 30.497-46.52 10.286-89.93-1.5-121.406 11.998"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_540_31"
              x1="322.5"
              x2="322.5"
              y1="1"
              y2="188"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#138EED" stopOpacity="0.4"></stop>
              <stop offset="1" stopColor="#058FFB" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </div>
  )
}

export default AnimatedChartComponent
