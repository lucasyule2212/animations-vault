import CardHover from "@/components/css-only/card-hover"
import DownloadArrow from "@/components/css-only/download-arrow"
import TextReveal from "@/components/css-only/text-reveal"

const CssOnlySection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center gap-4">
        <h2>CSS only animations</h2>
      </header>
      <div className="flex flex-col gap-6">
        <CardHover />
        <div className="border-b border-muted-foreground/10 border-dashed" />
        <div className="flex max-md:flex-col items-center gap-4">
          <DownloadArrow />
          <TextReveal />
        </div>
      </div>
    </section>
  )
}

export default CssOnlySection