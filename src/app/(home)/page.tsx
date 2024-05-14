import EaseSection from './components/ease-section'
import HeaderSection from './components/header-section'

export default function Home() {
  return (
    <main className="flex w-screen flex-col rounded-md px-2 py-10 text-base text-accent-foreground sm:px-16 md:px-20 lg:px-32 lg:py-32 xl:px-52">
      <HeaderSection />
      <EaseSection />
    </main>
  )
}
