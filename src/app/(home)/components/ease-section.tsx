import SimpleBox from '@/components/simple-box'
import { Card } from '@/components/ui/card'

const EaseSection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 px-52">
      <header>
        <h2>Easing</h2>
      </header>
      <Card className="p-6">
        <SimpleBox />
      </Card>
      <Card className="p-6">
        <SimpleBox />
      </Card>
      <Card className="p-6">
        <SimpleBox />
      </Card>
    </section>
  )
}

export default EaseSection
