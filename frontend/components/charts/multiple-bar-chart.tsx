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
  {
    month: "Jan",
    mobile: 120,
    desktop: 186,
    tablet: 85,
  },
  {
    month: "Feb",
    mobile: 220,
    desktop: 305,
    tablet: 140,
  },
  {
    month: "Mar",
    mobile: 180,
    desktop: 237,
    tablet: 110,
  },
  {
    month: "Apr",
    mobile: 50,
    desktop: 73,
    tablet: 45,
  },
  {
    month: "May",
    mobile: 150,
    desktop: 209,
    tablet: 100,
  },
  {
    month: "Jun",
    mobile: 160,
    desktop: 214,
    tablet: 120,
  },
];

export function MultipleBarChart() {
  return (
    <Card className="bg-[#f6f1e9]">
      <CardHeader>
        <CardTitle className="text-lg">Bar Chart - Multiple</CardTitle>
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
              <Bar dataKey="desktop" fill="#6b4f3c" radius={[4, 4, 0, 0]} />
              <Bar dataKey="mobile" fill="#8b6f5c" radius={[4, 4, 0, 0]} />
              <Bar dataKey="tablet" fill="#ab8f7c" radius={[4, 4, 0, 0]} />
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
