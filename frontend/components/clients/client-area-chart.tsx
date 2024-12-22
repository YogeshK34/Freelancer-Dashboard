"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useChartTheme } from "@/components/dashboard/chart-theme-provider";

const chartData = [
  { date: "2024-06-24", newClients: 1, totalClients: 63 },
  { date: "2024-06-25", newClients: 2, totalClients: 65 },
  { date: "2024-06-26", newClients: 0, totalClients: 65 },
  { date: "2024-06-27", newClients: 3, totalClients: 68 },
  { date: "2024-06-28", newClients: 1, totalClients: 69 },
  { date: "2024-06-29", newClients: 2, totalClients: 71 },
  { date: "2024-06-30", newClients: 3, totalClients: 74 },
  { date: "2024-07-01", newClients: 2, totalClients: 76 },
  { date: "2024-07-02", newClients: 1, totalClients: 77 },
  { date: "2024-07-03", newClients: 4, totalClients: 81 },
  { date: "2024-07-04", newClients: 0, totalClients: 81 },
  { date: "2024-07-05", newClients: 2, totalClients: 83 },
  { date: "2024-07-06", newClients: 3, totalClients: 86 },
  { date: "2024-07-07", newClients: 1, totalClients: 87 },
  { date: "2024-07-08", newClients: 2, totalClients: 89 },
  { date: "2024-07-09", newClients: 3, totalClients: 92 },
  { date: "2024-07-10", newClients: 1, totalClients: 93 },
  { date: "2024-07-11", newClients: 2, totalClients: 95 },
  { date: "2024-07-12", newClients: 0, totalClients: 95 },
  { date: "2024-07-13", newClients: 3, totalClients: 98 },
  { date: "2024-07-14", newClients: 2, totalClients: 100 },
  { date: "2024-07-15", newClients: 1, totalClients: 101 },
  { date: "2024-07-16", newClients: 4, totalClients: 105 },
  { date: "2024-07-17", newClients: 2, totalClients: 107 },
  { date: "2024-07-18", newClients: 3, totalClients: 110 },
  { date: "2024-07-19", newClients: 1, totalClients: 111 },
  { date: "2024-07-20", newClients: 2, totalClients: 113 },
  { date: "2024-07-21", newClients: 3, totalClients: 116 },
  { date: "2024-07-22", newClients: 0, totalClients: 116 },
  { date: "2024-07-23", newClients: 2, totalClients: 118 },
];

export function ClientAreaChart() {
  const [timeRange, setTimeRange] = React.useState("90d");
  const { getColors } = useChartTheme();
  const colors = getColors();

  const filteredData = React.useMemo(() => {
    const endDate = new Date(chartData[chartData.length - 1].date);
    const startDate = new Date(endDate);

    if (timeRange === "7d") {
      startDate.setDate(endDate.getDate() - 7);
    } else if (timeRange === "30d") {
      startDate.setDate(endDate.getDate() - 30);
    } else {
      startDate.setDate(endDate.getDate() - 90);
    }

    return chartData.filter((item) => new Date(item.date) >= startDate);
  }, [timeRange]);

  return (
    <Card style={{ background: colors.background, borderColor: colors.border }}>
      <CardHeader
        className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row"
        style={{ borderColor: colors.border }}
      >
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle className="text-lg" style={{ color: colors.foreground }}>
            Client Growth
          </CardTitle>
          <CardDescription style={{ color: colors.muted }}>
            Showing new and total clients over time
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select time range"
            style={{
              background: colors.background,
              color: colors.foreground,
              borderColor: colors.border,
            }}
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent
            className="rounded-xl"
            style={{
              background: colors.background,
              borderColor: colors.border,
            }}
          >
            {[
              { value: "90d", label: "Last 3 months" },
              { value: "30d", label: "Last 30 days" },
              { value: "7d", label: "Last 7 days" },
            ].map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="rounded-lg"
                style={
                  {
                    color: colors.foreground,
                    "--select-item-hover-bg": colors.accent,
                  } as React.CSSProperties
                }
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={{
            newClients: {
              label: "New Clients",
              color: colors.primary,
            },
            totalClients: {
              label: "Total Clients",
              color: colors.secondary,
            },
          }}
          className="aspect-auto h-[250px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="fillNewClients" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={colors.primary}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={colors.primary}
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient
                  id="fillTotalClients"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={colors.secondary}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={colors.secondary}
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                stroke={colors.muted}
                tick={{ fill: colors.foreground }}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <YAxis stroke={colors.muted} tick={{ fill: colors.foreground }} />
              <ChartTooltip
                cursor={false}
                contentStyle={{
                  background: colors.background,
                  border: `1px solid ${colors.border}`,
                  color: colors.foreground,
                }}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      });
                    }}
                    indicator="dot"
                  />
                }
              />
              <Area
                type="monotone"
                dataKey="newClients"
                stroke={colors.primary}
                fillOpacity={1}
                fill="url(#fillNewClients)"
              />
              <Area
                type="monotone"
                dataKey="totalClients"
                stroke={colors.secondary}
                fillOpacity={1}
                fill="url(#fillTotalClients)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
