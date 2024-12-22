"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useChartTheme } from "./chart-theme-provider";

const chartData = [
  { category: "Web Development", projects: 145, fill: "var(--color-web)" },
  { category: "Mobile Apps", projects: 80, fill: "var(--color-mobile)" },
  { category: "UI/UX Design", projects: 110, fill: "var(--color-design)" },
  { category: "Content Writing", projects: 65, fill: "var(--color-content)" },
  { category: "Data Analysis", projects: 50, fill: "var(--color-data)" },
];

const chartConfig = {
  projects: {
    label: "Projects",
  },
  web: {
    label: "Web Development",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile Apps",
    color: "hsl(var(--chart-2))",
  },
  design: {
    label: "UI/UX Design",
    color: "hsl(var(--chart-3))",
  },
  content: {
    label: "Content Writing",
    color: "hsl(var(--chart-4))",
  },
  data: {
    label: "Data Analysis",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function PieChartDemo() {
  const { getColors } = useChartTheme();
  const colors = getColors();
  const totalProjects = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.projects, 0);
  }, []);

  return (
    <Card className="flex flex-col" style={{ background: colors.background }}>
      <CardHeader className="pb-0">
        <CardTitle style={{ color: colors.foreground }}>
          Project Categories
        </CardTitle>
        <CardDescription style={{ color: colors.muted }}>
          Distribution of Freelance Projects
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[315px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="projects"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
              stroke={colors.background}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          style={{ fill: colors.foreground }}
                          className="text-3xl font-bold"
                        >
                          {totalProjects.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          style={{ fill: colors.muted }}
                        >
                          Projects
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter
        className="flex-col gap-2 text-sm"
        style={{ color: colors.muted }}
      >
        <div
          className="flex items-center gap-2 font-medium leading-none"
          style={{ color: colors.foreground }}
        >
          Trending up by 8.3% this quarter <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none">
          Showing distribution of projects across categories
        </div>
      </CardFooter>
    </Card>
  );
}
