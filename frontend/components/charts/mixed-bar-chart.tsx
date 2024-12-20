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
// import { ChartConfig } from "@/components/ui/chart"

const data = [
  { name: "Chrome", value: 63.6 },
  { name: "Safari", value: 19.8 },
  { name: "Firefox", value: 15.2 },
  { name: "Edge", value: 12.4 },
  { name: "Other", value: 8.9 },
];

export function MixedBarChart() {
  return (
    <Card className="bg-[#f6f1e9]">
      <CardHeader>
        <CardTitle className="text-lg">Bar Chart - Mixed</CardTitle>
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
            <BarChart data={data} layout="vertical">
              <XAxis type="number" stroke="#71717a" fontSize={12} />
              <YAxis
                dataKey="name"
                type="category"
                stroke="#71717a"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <ChartTooltip />
              <Bar dataKey="value" fill="#6b4f3c" radius={[0, 4, 4, 0]} />
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
