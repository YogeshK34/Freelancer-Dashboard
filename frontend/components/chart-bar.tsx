"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartBarProps {
  className?: string;
}

const data = [
  { project: "Project A", hours: 32 },
  { project: "Project B", hours: 40 },
  { project: "Project C", hours: 25 },
  { project: "Project D", hours: 50 },
  { project: "Project E", hours: 35 },
];

export function ChartBar({ className }: ChartBarProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Time Tracked by Project</CardTitle>
        <CardDescription>
          Hours spent on each project this month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="h-[300px] sm:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 25 }}
            >
              <XAxis
                dataKey="project"
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
              />
              <YAxis padding={{ top: 20 }} tick={{ fontSize: 12 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="hours" fill="hsl(var(--chart-1))" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
