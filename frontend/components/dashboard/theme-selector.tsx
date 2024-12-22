"use client";

import { Button } from "@/components/ui/button";
import { Sun, Moon, Leaf, Globe, Mountain, Diamond } from "lucide-react";
import { useChartTheme } from "./chart-theme-provider";
import { type Theme } from "./chart-theme-provider";

export function ThemeSelector() {
  const { setTheme } = useChartTheme();

  const themes: Array<{
    name: string;
    icon: typeof Sun;
    value: Theme;
  }> = [
    { name: "Light", icon: Sun, value: "light" },
    { name: "Dark", icon: Moon, value: "dark" },
    { name: "Nature", icon: Leaf, value: "emerald" },
    { name: "World", icon: Globe, value: "sapphire" },
    { name: "Adventure", icon: Mountain, value: "palette" },
    { name: "Premium", icon: Diamond, value: "midnight" },
  ];

  return (
    <div className="flex gap-2">
      {themes.map((theme) => (
        <Button
          key={theme.value}
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme.value)}
          title={theme.name}
          className="h-8 w-8"
        >
          <theme.icon className="h-4 w-4" />
          <span className="sr-only">{theme.name}</span>
        </Button>
      ))}
    </div>
  );
}
