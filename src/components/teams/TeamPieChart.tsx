'use client';

import { LabelList, Pie, PieChart } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';

const chartData = [
  { name: 'delta', value: 275, fill: 'var(--color-delta)' },
  { name: 'canary', value: 200, fill: 'var(--color-canary)' },
  { name: 'alpha', value: 187, fill: 'var(--color-alpha)' },
];

const chartConfig = {
  value: {
    label: 'Value',
  },
  delta: {
    label: 'Delta',
    color: 'var(--chart-1)',
  },
  canary: {
    label: 'Canary',
    color: 'var(--chart-2)',
  },
  alpha: {
    label: 'Alpha',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig;

export default function TeamPieChart() {
  return (
    <ChartContainer config={chartConfig} className="w-full">
      <PieChart>
        <ChartTooltip
          content={<ChartTooltipContent nameKey="value" hideLabel />}
        />
        <Pie data={chartData} dataKey="value">
          <LabelList
            dataKey="name"
            className="fill-background"
            stroke="none"
            fontSize={12}
            formatter={(value: keyof typeof chartConfig) =>
              chartConfig[value]?.label
            }
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
