"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { useChartTheme } from "./chart-theme-provider";

const data = [
  { month: "January", value: 85 },
  { month: "February", value: 90 },
  { month: "March", value: 78 },
  { month: "April", value: 82 },
  { month: "May", value: 95 },
  { month: "June", value: 88 },
];

export function RadarChartDemo() {
  const { getColors } = useChartTheme();
  const colors = getColors();

  return (
    <Card style={{ background: colors.background }}>
      <CardHeader>
        <CardTitle className="text-lg" style={{ color: colors.foreground }}>
          Radar Chart
        </CardTitle>
        <CardDescription style={{ color: colors.muted }}>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            value: {
              label: "Value",
              color: colors.primary,
            },
          }}
        >
          <RadarChart width={200} height={300} data={data}>
            <PolarGrid stroke={colors.muted} />
            <PolarAngleAxis dataKey="month" stroke={colors.foreground} />
            <PolarRadiusAxis stroke={colors.foreground} />
            <Radar
              name="Value"
              dataKey="value"
              stroke={colors.primary}
              fill={colors.primary}
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
        <div className="mt-4 text-center">
          <p className="text-sm" style={{ color: colors.muted }}>
            Trending up by 5.2% this month ↗
          </p>
          <p className="text-xs" style={{ color: colors.muted }}>
            January - June 2024
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
