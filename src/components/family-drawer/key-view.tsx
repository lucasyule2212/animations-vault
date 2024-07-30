const KeyView = ({
  setView,
}: {
  setView: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <div>
      <p>
        Your Private Key is the key used to back up your wallet. Keep it secret
        and secure at all times.
      </p>
      <button onClick={() => setView('default')}>Go back</button>
    </div>
  )
}

export default KeyView
