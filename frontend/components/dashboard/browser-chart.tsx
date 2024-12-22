"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { useChartTheme } from "./chart-theme-provider";

const data = [
  { browser: "Chrome", users: 1200 },
  { browser: "Safari", users: 800 },
  { browser: "Firefox", users: 1400 },
  { browser: "Edge", users: 600 },
  { browser: "Other", users: 400 },
];

export function BrowserChartDemo() {
  const { getColors } = useChartTheme();
  const colors = getColors();

  return (
    <Card style={{ background: colors.background }}>
      <CardHeader>
        <CardTitle className="text-lg" style={{ color: colors.foreground }}>
          Browser Usage
        </CardTitle>
        <CardDescription style={{ color: colors.muted }}>
          January - June 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            users: {
              label: "Users",
              color: colors.primary,
            },
          }}
        >
          <BarChart width={200} height={200} data={data}>
            <XAxis dataKey="browser" stroke={colors.muted} />
            <YAxis stroke={colors.muted} />
            <ChartTooltip />
            <Bar dataKey="users" radius={[4, 4, 4, 4]} fill={colors.primary} />
          </BarChart>
        </ChartContainer>
        <div className="mt-4 text-center">
          <p className="text-sm" style={{ color: colors.muted }}>
            Trending up by 5.2% this month ↗
          </p>
          <p className="text-xs" style={{ color: colors.muted }}>
            Showing total visitors for the last 6 months
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
