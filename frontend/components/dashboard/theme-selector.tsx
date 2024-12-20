"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Palette } from "lucide-react";
import { useChartTheme } from "./chart-theme-provider";

export function ThemeSelector() {
  const { setTheme } = useChartTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("sapphire")}>
          Sapphire
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("emerald")}>
          Emerald
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("palette")}>
          Palette
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("midnight")}>
          Midnight
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
