import TrashInteractionComponent from '@/components/trash-interaction/trash-interaction-component'

const TrashInteractionSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center  gap-4">
        <h2>Trash Interaction</h2>
      </header>
      <TrashInteractionComponent />
    </section>
  )
}

export default TrashInteractionSection
