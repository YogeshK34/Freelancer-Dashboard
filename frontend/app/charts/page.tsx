import { BarChartDemo } from "@/components/charts/bar-chart";
import { HorizontalBarChart } from "@/components/charts/horizontal-bar-chart";
import { MultipleBarChart } from "@/components/charts/multiple-bar-chart";
import { LabeledBarChart } from "@/components/charts/labeled-bar-chart";
import { CustomLabelBarChart } from "@/components/charts/custom-label-bar-chart";
import { MixedBarChart } from "@/components/charts/mixed-bar-chart";

export default function Home() {
  return (
    <div className="p-8 space-y-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BarChartDemo />
        <HorizontalBarChart />
        <MultipleBarChart />
        <LabeledBarChart />
        <CustomLabelBarChart />
        <MixedBarChart />
      </div>
    </div>
  );
}
