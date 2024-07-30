const RemoveView = ({
  setView,
}: {
  setView: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <div>
      <p>
        You haven’t backed up your wallet yet. If you remove it, you could lose
        access forever. We suggest tapping and backing up your wallet first with
        a valid recovery method.
      </p>
      <button onClick={() => setView('default')}>Go back</button>
    </div>
  )
}

export default RemoveView
