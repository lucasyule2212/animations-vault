import SharedLayoutComponent from '@/components/shared-layout/apple-store-list'

const AppleStoreListSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center  gap-4">
        <h2>Apple Store-like list</h2>
      </header>
      <SharedLayoutComponent />
    </section>
  )
}

export default AppleStoreListSection
