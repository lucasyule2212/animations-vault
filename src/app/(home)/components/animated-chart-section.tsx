'use client'

import AnimatedChartComponent from '@/components/animated-chart/animated-chart-component'

const AnimatedChartSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex flex-col gap-2">
        <h2>Animated Chart</h2>
        <p className="text-sm text-muted-foreground">
          This one also uses motion values to animate without re-rendering
        </p>
      </header>
      <AnimatedChartComponent />
    </section>
  )
}

export default AnimatedChartSection
