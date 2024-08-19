import FamilyDrawerComponent from '@/components/family-drawer/family-drawer-component'

const FamilyDrawerSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center gap-4">
        <h2>Family Drawer</h2>
      </header>
      <FamilyDrawerComponent />
    </section>
  )
}

export default FamilyDrawerSection
