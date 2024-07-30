'use client'

const DefaultView = ({
  setView,
}: {
  setView: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <div>
      <p>This is the default case</p>
      <div className="mt-6 flex flex-col items-start gap-2">
        <button onClick={() => setView('key')}>Key</button>
        <button onClick={() => setView('phrase')}>Phrase</button>
        <button onClick={() => setView('remove')}>Remove</button>
      </div>
    </div>
  )
}

export default DefaultView
