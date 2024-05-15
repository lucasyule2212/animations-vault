import AnimatedTabsComponent from '@/components/animated-tabs/animated-tabs-component'

const AnimatedTabsSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center  gap-4">
        <h2>Animated tabs</h2>
      </header>
      <AnimatedTabsComponent />
    </section>
  )
}

export default AnimatedTabsSection
