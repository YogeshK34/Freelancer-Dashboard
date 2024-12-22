"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Palette,
  Sun,
  Moon,
  Leaf,
  Globe,
  Mountain,
  Diamond,
} from "lucide-react";
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
          <Sun className="h-4 w-4 mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="h-4 w-4 mr-2" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("emerald")}>
          <Leaf className="h-4 w-4 mr-2" />
          Nature
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("sapphire")}>
          <Globe className="h-4 w-4 mr-2" />
          World
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("palette")}>
          <Mountain className="h-4 w-4 mr-2" />
          Adventure
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("midnight")}>
          <Diamond className="h-4 w-4 mr-2" />
          Premium
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
