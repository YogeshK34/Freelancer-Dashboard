"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Theme =
  | "light"
  | "dark"
  | "sapphire"
  | "emerald"
  | "palette"
  | "midnight";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  getColors: () => {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    accent: string;
    muted: string;
    border: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes = {
  light: {
    background: "#ffffff",
    foreground: "#000000",
    primary: "#3b82f6",
    secondary: "#ec4899",
    accent: "#f97316",
    muted: "#6b7280",
    border: "#e2e8f0",
  },
  dark: {
    background: "#1a1a1a",
    foreground: "#ffffff",
    primary: "#60a5fa",
    secondary: "#f472b6",
    accent: "#fb923c",
    muted: "#9ca3af",
    border: "#2d3748",
  },
  sapphire: {
    background: "#0f172a",
    foreground: "#e2e8f0",
    primary: "#38bdf8",
    secondary: "#818cf8",
    accent: "#22d3ee",
    muted: "#94a3b8",
    border: "#2c5282",
  },
  emerald: {
    background: "#064e3b",
    foreground: "#ecfdf5",
    primary: "#34d399",
    secondary: "#6ee7b7",
    accent: "#10b981",
    muted: "#6ee7b7",
    border: "#2f6b5f",
  },
  palette: {
    background: "#fef6e4",
    foreground: "#001858",
    primary: "#f582ae",
    secondary: "#8bd3dd",
    accent: "#f3d2c1",
    muted: "#172c66",
    border: "#8bd3dd",
  },
  midnight: {
    background: "#0f1729",
    foreground: "#f8fafc",
    primary: "#c084fc",
    secondary: "#818cf8",
    accent: "#f472b6",
    muted: "#94a3b8",
    border: "#2d3748",
  },
};

const getColors = (theme: Theme) => themes[theme];

interface ChartThemeProviderProps {
  children: ReactNode;
}

export function ChartThemeProvider({ children }: ChartThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const contextValue: ThemeContextType = {
    theme,
    setTheme,
    getColors: () => getColors(theme),
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useChartTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useChartTheme must be used within a ChartThemeProvider");
  }
  return context;
}
