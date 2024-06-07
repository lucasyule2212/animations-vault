import MultiStepComponent from '@/components/multi-step-component/multi-step-component'

const MultiStepComponentSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center  gap-4">
        <h2>Multi-step component</h2>
      </header>
      <MultiStepComponent />
    </section>
  )
}

export default MultiStepComponentSection
