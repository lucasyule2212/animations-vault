import {
  Ban,
  FileKey2,
  RectangleEllipsis,
  ScanFace,
  ShieldCheck,
} from 'lucide-react'

import { Header, SecondaryButton } from './default-view'

const KeyView = ({
  setView,
}: {
  setView: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <div>
      <div className="px-2">
        <Header
          icon={<FileKey2 />}
          title="Private Key"
          description="Your Private Key is the key used to back up your wallet. Keep it
			  secret and secure at all times."
        />
        <ul className="mt-6 space-y-4 border-t border-[#F5F5F5] pt-6">
          <li className="flex items-center gap-3 text-[15px] font-semibold text-[#999999] md:font-medium">
            <ShieldCheck />
            Keep your private key safe
          </li>
          <li className="flex items-center gap-3 text-[15px] font-semibold text-[#999999] md:font-medium">
            <RectangleEllipsis />
            Don’t share it with anyone else
          </li>
          <li className="flex items-center gap-3 text-[15px] font-semibold text-[#999999] md:font-medium">
            <Ban />
            If you lose it, we can’t recover it
          </li>
        </ul>
      </div>
      <div className="mt-7 flex gap-4">
        <SecondaryButton
          onClick={() => setView('default')}
          className="bg-[#F0F2F4] text-[#222222]"
        >
          Cancel
        </SecondaryButton>
        <SecondaryButton
          onClick={() => setView('default')}
          className="bg-[#4DAFFF] text-[#FFFFFF]"
        >
          <ScanFace />
          Reveal
        </SecondaryButton>
      </div>
    </div>
  )
}

export default KeyView
