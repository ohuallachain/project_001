'use client';

import { TrendingUp } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const description = 'A multiple line chart';

const chartData = [
  { month: 'January', delta: 186, canary: 80, alpha: 60 },
  { month: 'February', delta: 305, canary: 200, alpha: 40 },
  { month: 'March', delta: 237, canary: 120, alpha: 280 },
  { month: 'April', delta: 73, canary: 190, alpha: 120 },
  { month: 'May', delta: 209, canary: 130, alpha: 110 },
  { month: 'June', delta: 214, canary: 140, alpha: 40 },
];

const chartConfig = {
  delta: {
    label: 'delta',
    color: 'var(--chart-1)',
  },
  canary: {
    label: 'canary',
    color: 'var(--chart-2)',
  },
  alpha: {
    label: 'alpha',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig;

export default function TeamLineGraph() {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />

        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <ChartLegend />
        <Line
          dataKey="delta"
          type="monotone"
          stroke="var(--color-delta)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="canary"
          type="monotone"
          stroke="var(--color-canary)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="alpha"
          type="monotone"
          stroke="var(--color-alpha)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
