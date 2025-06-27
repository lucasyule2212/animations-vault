import DashedText from '@/components/dashed-text/dashed-text'

const DashedTextSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center gap-4">
        <h2>Dashed Text</h2>
      </header>
      <DashedText />
    </section>
  )
}

export default DashedTextSection
