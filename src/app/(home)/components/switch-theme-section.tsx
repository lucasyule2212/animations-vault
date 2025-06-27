import SwitchThemeComponent from '@/components/switch-theme/switch-theme-component'

const SwitchThemeSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center gap-4">
        <h2>Theme Switch</h2>
      </header>
      <SwitchThemeComponent />
    </section>
  )
}

export default SwitchThemeSection
