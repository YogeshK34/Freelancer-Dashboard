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
  { name: "Jan", total: 186 },
  { name: "Feb", total: 305 },
  { name: "Mar", total: 237 },
  { name: "Apr", total: 73 },
  { name: "May", total: 209 },
  { name: "Jun", total: 214 },
];

export function HorizontalBarChart() {
  return (
    <Card className="bg-[#f6f1e9]">
      <CardHeader>
        <CardTitle className="text-lg">Bar Chart - Horizontal</CardTitle>
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
              <Bar dataKey="total" fill="#6b4f3c" radius={[0, 4, 4, 0]} />
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
