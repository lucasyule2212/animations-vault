"use client";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import styles from "./switch-theme-component.module.css";



const ClipPathBadge = ({ className }: { className?: string }) => {
  return (
    <span className={cn("font-mono bg-accent-foreground text-accent rounded-md px-1 py-1 w-fit text-xs", className)}>
      clip-path
    </span>
  )
}


export default function SwitchThemeComponent() {
  const [theme, setTheme] = useState("dark");

  return (
    <Card className="relative flex w-full min-w-[350px] min-h-[230px] flex-col items-start justify-start gap-12">
      <Card key='dark' className={cn("border-none bg-black w-full h-full absolute inset-0",
        styles['theme-overlay-inactive'],
        theme === "dark" && ` ${styles['theme-overlay-active']} z-10`,
        theme === "light" && "z-0")}>
        <CardHeader>
          <CardTitle className="text-lg">
            Theme switcher animation using clip-path
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-pretty max-w-2xl">This technique is using <ClipPathBadge />, this element is duplicated and overlayed on top of the original one. The duplicated elements have different themes and we just reveal the one underneath by animating the <ClipPathBadge /> property.</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setTheme('light')} className="active:scale-95 transition-all duration-200">
            Switch Theme
          </Button>
        </CardFooter>
      </Card>
      <Card key='light' className={cn("border-none text-black bg-white w-full h-full absolute inset-0",
        styles['theme-overlay-inactive'],
        theme === "light" && ` ${styles['theme-overlay-active']} z-10`,
        theme === "dark" && "z-0")}>
        <CardHeader>
          <CardTitle className="text-lg">
            Theme switcher animation using clip-path
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-pretty max-w-2xl">This technique is using <ClipPathBadge className="bg-black text-white" />, this element is duplicated and overlayed on top of the original one. The duplicated elements have different themes and we just reveal the one underneath by animating the <ClipPathBadge className="bg-black text-white" /> property.</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setTheme('dark')} className="bg-black text-white hover:bg-black/85 active:scale-95 transition-all duration-200">
            Switch Theme
          </Button>
        </CardFooter>
      </Card>

    </Card>
  );
}
