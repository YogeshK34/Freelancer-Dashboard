/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

interface ChartPieProps {
  className?: string;
}

const data = [
  { name: "Technology", value: 400, color: "hsl(var(--chart-1))" },
  { name: "Healthcare", value: 300, color: "hsl(var(--chart-2))" },
  { name: "Finance", value: 200, color: "hsl(var(--chart-3))" },
  { name: "Education", value: 100, color: "hsl(var(--chart-4))" },
];

export function ChartPie({ className }: ChartPieProps) {
  return (
    <Card
      className={cn("transition-all duration-300 hover:shadow-lg", className)}
    >
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl md:text-2xl">
          Client Distribution by Industry
        </CardTitle>
        <CardDescription>
          Breakdown of clients across different sectors
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="h-[300px] sm:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="hsl(var(--background))"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                layout="horizontal"
                align="center"
                verticalAlign="bottom"
                iconType="circle"
                iconSize={10}
                wrapperStyle={{
                  paddingTop: "20px",
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-2 rounded-md shadow-md">
        <p className="font-semibold">{payload[0].name}</p>
        <p className="text-sm">Clients: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};
