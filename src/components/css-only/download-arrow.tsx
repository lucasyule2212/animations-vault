import { ArrowDown } from "lucide-react";
import { Card } from "../ui/card";
import styles from "./download-arrow.module.css";

const DownloadArrow = () => {
  return (
    <div className="flex flex-col flex-1 w-full">
      <h3 className="font-serif italic text-zinc-400">Download Arrow</h3>
      <Card className="relative flex min-h-[200px] w-full min-w-[125px] flex-col items-center justify-center gap-12 bg-background p-6">
        <button aria-label="Download Arrow" className={styles['download-button']}>
          <ArrowDown className="h-5 w-5 text-primary-foreground" />
          <ArrowDown className="h-5 w-5 text-primary-foreground" />
        </button>
      </Card>
    </div>
  );
}

export default DownloadArrow