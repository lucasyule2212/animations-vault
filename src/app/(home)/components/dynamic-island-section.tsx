import DynamicIslandComponent from '@/components/dynamic-island/dynamic-island-component'

const DynamicIslandSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center gap-4">
        <h2>Dynamic Island</h2>
      </header>
      <DynamicIslandComponent />
    </section>
  )
}

export default DynamicIslandSection
