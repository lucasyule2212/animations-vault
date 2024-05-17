import { MutableRefObject, useEffect, useState } from 'react'

const useMeasure = ({ ref }: { ref: MutableRefObject<null> }) => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const rect = entry.target.getBoundingClientRect()

        setHeight(rect.height)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref])

  return { height }
}

export default useMeasure
