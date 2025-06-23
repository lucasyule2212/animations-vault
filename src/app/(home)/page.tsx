import AnimatedTabsSection from './components/animated-tabs-section'
import AppleStoreCardSection from './components/apple-store-card-section'
import AppleStoreListSection from './components/apple-store-list-section'
import CssOnlySection from './components/css-only-section'
import DynamicIslandSection from './components/dynamic-island-section'
import EaseSection from './components/ease-section'
import FamilyDrawerSection from './components/family-drawer-section'
import FeedbackPopoverSection from './components/feedback-popover-section'
import HeaderSection from './components/header-section'
import HoldToDeleteSection from './components/hold-to-delete-section'
import MultiStepComponentSection from './components/multi-step-component-section'
import MultipleStateButtonSection from './components/multiple-state-button-section'
import SpringSection from './components/spring-section'
import SwitchThemeSection from './components/switch-theme-section'
import TrashInteractionSection from './components/trash-interaction-section'

export default function Home() {
  return (
    <main className="flex w-screen flex-col rounded-md px-2 py-10 text-base text-accent-foreground sm:px-16 md:px-20 lg:px-32 lg:py-32 xl:px-52">
      <HeaderSection />
      <div className="animate-orchestration delay-500">
        <HoldToDeleteSection />
        <SwitchThemeSection />
        <DynamicIslandSection />
        <FamilyDrawerSection />
        <CssOnlySection />
        <TrashInteractionSection />
        <MultiStepComponentSection />
        <FeedbackPopoverSection />
        <AppleStoreCardSection />
        <AppleStoreListSection />
        <MultipleStateButtonSection />
        <AnimatedTabsSection />
        <SpringSection />
        <EaseSection />
      </div>
    </main>
  )
}
