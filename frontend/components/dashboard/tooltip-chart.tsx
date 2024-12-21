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
  { day: "Mon", coding: 450, designing: 300 },
  { day: "Tue", coding: 320, designing: 150 },
  { day: "Wed", coding: 520, designing: 120 },
  { day: "Thu", coding: 400, designing: 350 },
  { day: "Fri", coding: 600, designing: 350 },
  { day: "Sat", coding: 480, designing: 400 },
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
            coding: {
              label: "coding",
              color: colors.primary,
            },
            designing: {
              label: "designing",
              color: colors.secondary,
            },
          }}
        >
          <BarChart width={350} height={300} data={data}>
            <XAxis dataKey="day" stroke={colors.muted} />
            <ChartTooltip />
            <Bar
              dataKey="coding"
              fill={colors.primary}
              stackId="a"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="designing"
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
