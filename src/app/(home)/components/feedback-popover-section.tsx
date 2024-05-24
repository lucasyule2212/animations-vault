import FeedbackPopoverComponent from '@/components/feedback-popover/feedback-popover-component'

const FeedbackPopoverSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center  gap-4">
        <h2>Feedback popover</h2>
      </header>
      <FeedbackPopoverComponent />
    </section>
  )
}

export default FeedbackPopoverSection
