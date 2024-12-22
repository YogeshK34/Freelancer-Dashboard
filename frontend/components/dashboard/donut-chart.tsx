"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useChartTheme } from "./chart-theme-provider";

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 2100 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 2400 },
  { name: "May", total: 2800 },
  { name: "Jun", total: 3200 },
];

export function BarChartDemo() {
  const { getColors } = useChartTheme();
  const colors = getColors();

  return (
    <Card style={{ background: colors.background }}>
      <CardHeader>
        <CardTitle className="text-lg" style={{ color: colors.foreground }}>
          Monthly Revenue
        </CardTitle>
        <CardDescription style={{ color: colors.muted }}>
          January - June 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke={colors.muted}
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke={colors.muted}
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Bar dataKey="total" fill={colors.primary} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 text-center">
          <p className="text-sm" style={{ color: colors.muted }}>
            Trending up by 12.5% compared to last year
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
