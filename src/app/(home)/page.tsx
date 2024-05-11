import EaseSection from './components/ease-section'
import HeaderSection from './components/header-section'

export default function Home() {
  return (
    <main className="flex w-screen flex-col rounded-md px-56 py-32 text-base text-accent-foreground">
      <HeaderSection />
      <EaseSection />
    </main>
  )
}
