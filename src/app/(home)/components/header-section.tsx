const HeaderSection = () => {
  return (
    <section className="sm:px-16 md:px-20 lg:px-32 xl:px-52">
      <header>
        <h1 className="animate-orchestration">Animations Vault</h1>
      </header>
      <p className="animate-orchestration flex items-end gap-1 font-serif italic text-zinc-400 delay-150">
        Building some cool stuff for study and inspiration.
      </p>
      <footer className="animate-orchestration mt-4 text-sm text-zinc-400 delay-300">
        by Lucas Yule
      </footer>
    </section>
  )
}

export default HeaderSection
