"use client";

import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface RadialChartProps {
  value: number;
  maxValue: number;
  type: "text" | "shape" | "stacked";
  title: string;
  trend: number;
  unit: string;
}

function RadialChart({
  value,
  maxValue,
  type,
  title,
  trend,
  unit,
}: RadialChartProps) {
  const percentage = (value / maxValue) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>Current Month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative flex h-52 w-52 items-center justify-center">
            {type === "text" && (
              <>
                <Progress
                  value={percentage}
                  className="h-4 w-[12rem] rotate-[-90deg] rounded-xl"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold">{value}</span>
                  <span className="text-sm text-muted-foreground">{unit}</span>
                </div>
              </>
            )}
            {type === "shape" && (
              <>
                <div className="h-8 w-[12rem] rotate-[-90deg] rounded-xl bg-secondary">
                  <div
                    className="h-full rounded-xl bg-primary"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold">{value}</span>
                  <span className="text-sm text-muted-foreground">{unit}</span>
                </div>
              </>
            )}
            {type === "stacked" && (
              <>
                <div className="relative h-[12rem] w-4 rotate-[-90deg]">
                  <Progress
                    value={percentage}
                    className="absolute h-4 w-full rounded-xl"
                  />
                  <Progress
                    value={percentage * 0.8}
                    className="absolute h-4 w-full -translate-y-6 rounded-xl"
                  />
                  <Progress
                    value={percentage * 0.6}
                    className="absolute h-4 w-full -translate-y-12 rounded-xl"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold">{value}</span>
                  <span className="text-sm text-muted-foreground">{unit}</span>
                </div>
              </>
            )}
          </div>
          <div className="space-y-1 text-center">
            <p className="flex items-center justify-center gap-1 text-sm">
              Trending {trend >= 0 ? "up" : "down"} by {Math.abs(trend)}% this
              month
              <TrendingUp
                className={`h-4 w-4 ${trend >= 0 ? "" : "rotate-180"}`}
              />
            </p>
            <p className="text-sm text-muted-foreground">
              Compared to last month
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function DashboardKPIs() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <RadialChart
        value={5}
        maxValue={10}
        title="Completed Projects"
        type="text"
        trend={25}
        unit="Projects"
      />
      <RadialChart
        value={3200}
        maxValue={5000}
        title="Monthly Earnings"
        type="shape"
        trend={15.5}
        unit="USD"
      />
      <RadialChart
        value={4.7}
        maxValue={5}
        title="Client Satisfaction"
        type="stacked"
        trend={5.2}
        unit="out of 5"
      />
    </div>
  );
}
