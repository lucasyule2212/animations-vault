import { TriangleAlert } from 'lucide-react'

import { Header, SecondaryButton } from './default-view'

const RemoveView = ({
  setView,
}: {
  setView: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <div>
      <div className="px-2">
        <Header
          icon={<TriangleAlert className="h-10 w-10 text-red-500" />}
          title="Are you sure?"
          description="You haven’t backed up your wallet yet. If you remove it, you could lose access forever. We suggest tapping and backing up your wallet first with a valid recovery method."
        />
        <div className="mt-7 flex gap-4">
          <SecondaryButton
            onClick={() => setView('default')}
            className="bg-[#F0F2F4] text-[#222222]"
          >
            Cancel
          </SecondaryButton>
          <SecondaryButton
            onClick={() => setView('default')}
            className="bg-[#FF3F40] text-[#FFFFFF]"
          >
            Continue
          </SecondaryButton>
        </div>
      </div>
    </div>
  )
}

export default RemoveView
