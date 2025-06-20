import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import styles from "./coin-spin.module.css";

const CoinSpin = () => {
  return (
    <div className="flex flex-col">
      <h3 className="font-serif italic text-zinc-400">Coin Spin</h3>
      <Card className="relative flex min-h-[530px] w-full min-w-[350px] flex-col items-center justify-center gap-12 bg-background p-6">
        <div className={styles['coin-container']}>
          <div className={styles['animation-wrapper']}>
            <div className={styles['coin-side']} />
          </div>
          <div className={styles['animation-wrapper']}>
            <div className={styles['coin-face']} >
              <CoinIcon />
            </div>
            <div className={cn(styles['coin-face'], styles['coin-outer-inner'], styles['coin-inner-front'])} />
            <div className={cn(styles['coin-face'], styles['coin-outer-inner'], styles['coin-outer-back'])} >
              <CoinIcon />
            </div>
            <div className={cn(styles['coin-face'], styles['coin-outer-inner'], styles['coin-inner-back'])} />
          </div>
        </div>
      </Card>
    </div>
  );
}

function CoinIcon() {
  return (
    <svg viewBox="0 0 718 718" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M170 119H548V599H170V119Z" fill="#F8A400" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 359C0 160.73 160.73 0 359 0C557.269 0 718 160.73 718 359C718 557.269 557.269 718 359 718C160.73 718 0 557.269 0 359ZM359 129.14C373.87 129.14 385.925 141.195 385.925 156.065V187.06C416.681 193.03 443.789 209.116 460.723 232.531C469.436 244.582 466.729 261.414 454.681 270.127C442.629 278.84 425.796 276.135 417.083 264.085C406.923 250.034 385.821 238.336 359 238.336H348.751C312.42 238.336 293.684 260.945 293.684 277.006V279.822C293.684 292.136 302.644 307.458 324.026 316.013L413.97 351.989C450.531 366.611 478.166 398.669 478.166 438.177C478.166 489.148 434.641 524.215 385.925 531.916V561.936C385.925 576.805 373.87 588.861 359 588.861C344.13 588.861 332.075 576.805 332.075 561.936V530.94C301.319 524.969 274.21 508.883 257.279 485.469C248.566 473.417 251.271 456.587 263.321 447.874C275.371 439.161 292.204 441.864 300.917 453.916C311.077 467.967 332.179 479.664 359 479.664H365.728C404.004 479.664 424.316 455.794 424.316 438.177C424.316 425.864 415.356 410.542 393.974 401.987L304.03 366.011C267.471 351.389 239.832 319.331 239.832 279.822V277.006C239.832 226.408 283.852 192.125 332.075 185.613V156.065C332.075 141.195 344.13 129.14 359 129.14Z"
        fill="#FFCD6C"
      />
    </svg>
  );
}

export default CoinSpin