import EaseComponent from '@/components/easing-animations/ease-component'

const EaseSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 px-52">
      <header>
        <h2>Easing</h2>
      </header>
      <EaseComponent easing="linear" />
      <EaseComponent easing="ease-in" />
      <EaseComponent easing="ease-out" />
      <EaseComponent easing="ease-in-out" />
    </section>
  )
}

export default EaseSection
