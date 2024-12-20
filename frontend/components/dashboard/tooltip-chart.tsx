"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";
import { useChartTheme } from "./chart-theme-provider";

const data = [
  { day: "Mon", running: 450, swimming: 300 },
  { day: "Tue", running: 320, swimming: 150 },
  { day: "Wed", running: 520, swimming: 120 },
  { day: "Thu", running: 400, swimming: 350 },
  { day: "Fri", running: 600, swimming: 350 },
  { day: "Sat", running: 480, swimming: 400 },
];

export function TooltipChartDemo() {
  const { getColors } = useChartTheme();
  const colors = getColors();

  return (
    <Card style={{ background: colors.background }}>
      <CardHeader>
        <CardTitle className="text-lg" style={{ color: colors.foreground }}>
          Activity Overview
        </CardTitle>
        <CardDescription style={{ color: colors.muted }}>
          Weekly activity breakdown
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            running: {
              label: "Running",
              color: colors.primary,
            },
            swimming: {
              label: "Swimming",
              color: colors.secondary,
            },
          }}
        >
          <BarChart width={350} height={300} data={data}>
            <XAxis dataKey="day" stroke={colors.muted} />
            <ChartTooltip />
            <Bar
              dataKey="running"
              fill={colors.primary}
              stackId="a"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="swimming"
              fill={colors.secondary}
              stackId="a"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
        <div className="mt-4 text-center">
          <p className="text-sm" style={{ color: colors.muted }}>
            Trending up by 5.2% this month ↗
          </p>
          <p className="text-xs" style={{ color: colors.muted }}>
            Showing activity data for this week
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
