"use client";
import { Trash2Icon } from "lucide-react";
import styles from "./hold-to-delete.module.css";
import { Card } from "../ui/card";

export default function HoldToDeleteComponent() {
  return (
    <div>
      <h3 >Hold to Delete</h3>
      <Card className="relative flex min-h-[530px] w-full min-w-[350px] flex-col items-center justify-center gap-12 bg-background p-6">
        <div className={styles.wrapper}>
          <button className={styles.button}>
            <div className={styles['button-overlay']}>
              <Trash2Icon />
              Hold to Delete
            </div>
            <Trash2Icon />
            Hold to Delete
          </button>
        </div>
      </Card>
    </div>
  );
}
