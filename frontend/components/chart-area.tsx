"use client";

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "Jan", newClients: 10, totalClients: 10 },
  { month: "Feb", newClients: 20, totalClients: 30 },
  { month: "Mar", newClients: 15, totalClients: 45 },
  { month: "Apr", newClients: 25, totalClients: 70 },
  { month: "May", newClients: 30, totalClients: 100 },
  { month: "Jun", newClients: 20, totalClients: 120 },
];

interface ChartAreaProps {
  className?: string;
}

export function ChartArea({ className }: ChartAreaProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl md:text-2xl">
          Client Growth
        </CardTitle>
        <CardDescription>
          New and total clients over the past 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="h-[300px] sm:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="colorNewClients"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-1))"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-1))"
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient
                  id="colorTotalClients"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-2))"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-2))"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
              />
              <YAxis tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="newClients"
                stroke="hsl(var(--chart-1))"
                fillOpacity={1}
                fill="url(#colorNewClients)"
              />
              <Area
                type="monotone"
                dataKey="totalClients"
                stroke="hsl(var(--chart-2))"
                fillOpacity={1}
                fill="url(#colorTotalClients)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
