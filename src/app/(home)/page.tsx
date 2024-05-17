import AnimatedTabsSection from './components/animated-tabs-section'
import AppleStoreListSection from './components/apple-store-list-section'
import EaseSection from './components/ease-section'
import HeaderSection from './components/header-section'
import MultipleStateButtonSection from './components/multiple-state-button-section'
import SpringSection from './components/spring-section'

export default function Home() {
  return (
    <main className="flex w-screen flex-col rounded-md px-2 py-10 text-base text-accent-foreground sm:px-16 md:px-20 lg:px-32 lg:py-32 xl:px-52">
      <HeaderSection />
      <AppleStoreListSection />
      <MultipleStateButtonSection />
      <AnimatedTabsSection />
      <SpringSection />
      <EaseSection />
    </main>
  )
}
