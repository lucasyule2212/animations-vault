import AppleStoreCardComponent from '@/components/shared-layout/apple-store-card'

const AppleStoreCardSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center  gap-4">
        <h2>Apple Store-like card</h2>
      </header>
      <AppleStoreCardComponent />
    </section>
  )
}

export default AppleStoreCardSection
