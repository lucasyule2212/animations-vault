const PhraseView = ({
  setView,
}: {
  setView: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <div>
      <p>
        Keep your Secret Phrase safe. Don’t share it with anyone else. If you
        lose it, we can’t recover it.
      </p>
      <button onClick={() => setView('default')}>Go back</button>
    </div>
  )
}

export default PhraseView
