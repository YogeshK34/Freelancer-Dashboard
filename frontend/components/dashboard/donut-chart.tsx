"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { Pie, PieChart, Cell } from "recharts";
import { useChartTheme } from "./chart-theme-provider";

const data = [
  { name: "Chrome", value: 400 },
  { name: "Safari", value: 300 },
  { name: "Firefox", value: 250 },
  { name: "Edge", value: 175 },
];

export function DonutChartDemo() {
  const { getColors } = useChartTheme();
  const colors = getColors();
  const CHART_COLORS = [
    colors.primary,
    colors.secondary,
    colors.accent,
    colors.muted,
  ];

  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <Card style={{ background: colors.background }}>
      <CardHeader>
        <CardTitle className="text-lg" style={{ color: colors.foreground }}>
          Pie Chart - Donut with Text
        </CardTitle>
        <CardDescription style={{ color: colors.muted }}>
          January - June 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            value: {
              label: "Visitors",
              color: colors.primary,
            },
          }}
        >
          <div className="relative">
            <PieChart width={350} height={300}>
              <Pie
                data={data}
                cx={175}
                cy={150}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={CHART_COLORS[index % CHART_COLORS.length]}
                  />
                ))}
              </Pie>
              <text
                x={175}
                y={150}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fill: colors.foreground,
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {total}
              </text>
              <text
                x={175}
                y={175}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fill: colors.muted, fontSize: "14px" }}
              >
                Visitors
              </text>
            </PieChart>
          </div>
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
