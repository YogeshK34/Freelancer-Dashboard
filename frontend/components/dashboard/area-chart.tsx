"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer, XAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const data = [
  { month: "Feb", mobile: 35, desktop: 65 },
  { month: "Mar", mobile: 45, desktop: 55 },
  { month: "Apr", mobile: 30, desktop: 70 },
  { month: "May", mobile: 38, desktop: 62 },
  { month: "Jun", mobile: 42, desktop: 58 },
];

interface AreaChartProps {
  variant: "icons" | "gradient" | "axes";
  className?: string;
}

export function AreaChartDemo({ variant, className }: AreaChartProps) {
  return (
    <Card className={className} style={{ background: "rgb(255, 251, 235)" }}>
      <CardHeader>
        <CardTitle className="text-lg">Area Chart - {variant}</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            mobile: {
              label: "Mobile",
              color: "hsl(var(--chart-1))",
            },
            desktop: {
              label: "Desktop",
              color: "hsl(var(--chart-2))",
            },
          }}
        >
          <ResponsiveContainer width="100%" height={270}>
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                padding={{ left: 20, right: 20 }}
                fontSize={12}
                stroke="#666"
              />
              <Area
                type="monotone"
                dataKey="mobile"
                stackId="1"
                stroke="#f472b6"
                fill="#f472b6"
                fillOpacity={0.8}
              />
              <Area
                type="monotone"
                dataKey="desktop"
                stackId="1"
                stroke="#2dd4bf"
                fill="#2dd4bf"
                fillOpacity={0.8}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Trending up by 5.2% this month ↗
          </p>
          <p className="text-xs text-muted-foreground">January - June 2024</p>
        </div>
      </CardContent>
    </Card>
  );
}
