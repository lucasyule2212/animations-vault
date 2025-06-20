"use client";
import { Card } from "../ui/card";
import { useState, useEffect } from "react";
import styles from "./text-reveal.module.css";

const TextReveal = () => {
  const words = ["Snappy", "Smooth", "Delightful"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 1300);

    return () => clearInterval(interval);
  }, [words.length]);

  const currentWord = words[currentWordIndex];

  return (
    <div className="flex flex-col flex-1 w-full">
      <h3 className="font-serif italic text-zinc-400">Text Reveal</h3>
      <Card className="relative flex min-h-[200px] w-full min-w-[125px] flex-col items-center justify-center gap-12 bg-background p-6">
        <div>
          <div>
            <h1 className={styles.h1}>
              {currentWord.split("").map((char, index) => (
                <span
                  key={`${currentWordIndex}-${index}`}
                  className={styles.span}
                  style={{
                    "--index": index,
                  } as React.CSSProperties}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TextReveal