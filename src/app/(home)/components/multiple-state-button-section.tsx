import MultipleStateButtonComponent from '@/components/multiple-state-button/multiple-state-button-component'

const MultipleStateButtonSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center  gap-4">
        <h2>Multiple state button</h2>
      </header>
      <MultipleStateButtonComponent />
    </section>
  )
}

export default MultipleStateButtonSection
