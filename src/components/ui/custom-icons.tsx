import { SVGProps } from 'react'

const CustomBell = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <path d="M221.8,175.94 C216.25,166.38,208,139.33,208,104 a80,80,0,1,0,-160,0 c0,35.34,-8.26,62.38,-13.81,71.94 A16,16,0,0,0,48,200 H88.81 H208 a16,16,0,0,0,13.8,-24.06" />
    </svg>
  )
}

export { CustomBell }
