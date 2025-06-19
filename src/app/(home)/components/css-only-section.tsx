import CardHover from "@/components/css-only/card-hover"

const CssOnlySection = () => {
  return (
    <section className="mt-24 flex flex-col gap-4 sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header className="flex items-center gap-4">
        <h2>CSS only animations</h2>
      </header>
      <div className="flex flex-col gap-4">
        <CardHover />
      </div>
    </section>
  )
}

export default CssOnlySection