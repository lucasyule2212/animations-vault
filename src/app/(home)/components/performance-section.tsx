'use client'

import PerformanceComponent from '@/components/performance-animations/performance-component'

const PerformanceSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex flex-col gap-2">
        <h2>Performance Animations</h2>
        <p className="text-sm text-muted-foreground max-w-2xl text-pretty leading-6">
          Most animations in this project use initial, animate, and exit props,
          but this can cause performance issues due to component re-rendering.
          <br />
          For smooth <strong>60fps</strong> animations, we can use animation
          hooks with motion values that animate without triggering re-renders.
        </p>
      </header>
      <PerformanceComponent />
    </section>
  )
}

export default PerformanceSection
