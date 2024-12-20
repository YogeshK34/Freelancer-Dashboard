"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

const data = [
  { month: "Jan", total: 186 },
  { month: "Feb", total: 305 },
  { month: "Mar", total: 237 },
  { month: "Apr", total: 73 },
  { month: "May", total: 209 },
  { month: "Jun", total: 214 },
];

export function LabeledBarChart() {
  return (
    <Card className="bg-[#f6f1e9]">
      <CardHeader>
        <CardTitle className="text-lg">Bar Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            total: {
              label: "Total",
              color: "#6b4f3c",
            },
          }}
        >
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <XAxis
                dataKey="month"
                stroke="#71717a"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#71717a"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <ChartTooltip />
              <Bar
                dataKey="total"
                fill="#6b4f3c"
                radius={[4, 4, 0, 0]}
                label={{ position: "top", fill: "#71717a", fontSize: 12 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 space-y-1">
          <p className="text-sm text-muted-foreground">
            Trending up by 5.2% this month
          </p>
          <p className="text-sm text-muted-foreground">
            Showing total visitors for the last 6 months
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
