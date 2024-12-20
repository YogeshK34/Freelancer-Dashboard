"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useChartTheme } from "./chart-theme-provider";

const performanceData = [
  { metric: "Speed", value: 85 },
  { metric: "Quality", value: 90 },
  { metric: "Communication", value: 78 },
  { metric: "Deadlines", value: 82 },
  { metric: "Satisfaction", value: 95 },
  { metric: "Budget", value: 88 },
];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 2780 },
  { month: "May", revenue: 1890 },
  { month: "Jun", revenue: 2390 },
];

export function PerformanceRadarChart() {
  const { getColors } = useChartTheme();
  const colors = getColors();

  return (
    <Card style={{ background: colors.background }}>
      <CardHeader>
        <CardTitle className="text-lg" style={{ color: colors.foreground }}>
          Performance Metrics
        </CardTitle>
        <CardDescription style={{ color: colors.muted }}>
          Overall performance analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            value: {
              label: "Performance",
              color: colors.primary,
            },
          }}
        >
          <RadarChart width={350} height={300} data={performanceData}>
            <PolarGrid stroke={colors.muted} />
            <PolarAngleAxis dataKey="metric" stroke={colors.muted} />
            <PolarRadiusAxis stroke={colors.muted} />
            <Radar
              name="Performance"
              dataKey="value"
              stroke={colors.primary}
              fill={colors.primary}
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function RevenueAreaChart() {
  const { getColors } = useChartTheme();
  const colors = getColors();

  return (
    <Card style={{ background: colors.background }}>
      <CardHeader>
        <CardTitle className="text-lg" style={{ color: colors.foreground }}>
          Revenue Trend
        </CardTitle>
        <CardDescription style={{ color: colors.muted }}>
          Monthly revenue analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            revenue: {
              label: "Revenue",
              color: colors.primary,
            },
          }}
        >
          <AreaChart width={350} height={300} data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke={colors.muted} />
            <XAxis dataKey="month" stroke={colors.muted} />
            <YAxis stroke={colors.muted} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke={colors.primary}
              fill={colors.primary}
              fillOpacity={0.3}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
