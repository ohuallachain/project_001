'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';

export default function EmployeeChart() {
  const chartData = [
    { month: 'January', fromHome: 186, fromOffice: 35 },
    { month: 'February', fromHome: 305, fromOffice: 45 },
    { month: 'March', fromHome: 237, fromOffice: 55 },
    { month: 'April', fromHome: 173, fromOffice: 25 },
    { month: 'May', fromHome: 209, fromOffice: 47 },
    { month: 'June', fromHome: 214, fromOffice: 32 },
    { month: 'July', fromHome: 186, fromOffice: 57 },
    { month: 'August', fromHome: 305, fromOffice: 45 },
    { month: 'September', fromHome: 237, fromOffice: 55 },
    { month: 'October', fromHome: 73, fromOffice: 65 },
    { month: 'November', fromHome: 209, fromOffice: 45 },
    { month: 'December', fromHome: 214, fromOffice: 54 },
  ];

  const chartConfig = {
    fromHome: { label: 'Work From Home', color: 'var(--color-secondary)' },
    fromOffice: { label: 'Work From Office', color: 'var(--color-secondary)' },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="w-full max-h-[500px]">
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={true}
          tickFormatter={(value) => value.slice(0, 3)}
        />

        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />

        <Bar
          dataKey="fromHome"
          stackId={1}
          fill="var(--color-primary)"
          radius={0}
        />
        <Bar
          dataKey="fromOffice"
          stackId={1}
          fill="var(--color-secondary)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
