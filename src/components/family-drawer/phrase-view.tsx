import {
  Ban,
  RectangleEllipsis,
  ScanFace,
  ShieldCheck,
  VenetianMask,
} from 'lucide-react'

import { Header, SecondaryButton } from './default-view'

const PhraseView = ({
  setView,
}: {
  setView: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <div>
      <div className="px-2">
        <Header
          icon={<VenetianMask className="h-10 w-10 text-zinc-400" />}
          title="Secret Recovery Phrase"
          description="Your Secret Recovery Phrase is the key used to back up your wallet. Keep it secret at all times."
        />
        <ul className="mt-6 space-y-4 border-t border-[#F5F5F5] pt-6">
          <li className="flex items-center gap-3 text-[15px] font-semibold text-[#999999] md:font-medium">
            <ShieldCheck />
            Keep your Secret Phrase safe
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

export default PhraseView
