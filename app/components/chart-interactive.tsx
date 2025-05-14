"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

//import { useIsLorry } from "@/hooks/use-Lorry";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
const chartData = [
  { date: "2024-04-01", Truck: 222, Lorry: 150 },
  { date: "2024-04-02", Truck: 97, Lorry: 180 },
  { date: "2024-04-03", Truck: 167, Lorry: 120 },
  { date: "2024-04-04", Truck: 242, Lorry: 260 },
  { date: "2024-04-05", Truck: 373, Lorry: 290 },
  { date: "2024-04-06", Truck: 301, Lorry: 340 },
  { date: "2024-04-07", Truck: 245, Lorry: 180 },
  { date: "2024-04-08", Truck: 409, Lorry: 320 },
  { date: "2024-04-09", Truck: 59, Lorry: 110 },
  { date: "2024-04-10", Truck: 261, Lorry: 190 },
  { date: "2024-04-11", Truck: 327, Lorry: 350 },
  { date: "2024-04-12", Truck: 292, Lorry: 210 },
  { date: "2024-04-13", Truck: 342, Lorry: 380 },
  { date: "2024-04-14", Truck: 137, Lorry: 220 },
  { date: "2024-04-15", Truck: 120, Lorry: 170 },
  { date: "2024-04-16", Truck: 138, Lorry: 190 },
  { date: "2024-04-17", Truck: 446, Lorry: 360 },
  { date: "2024-04-18", Truck: 364, Lorry: 410 },
  { date: "2024-04-19", Truck: 243, Lorry: 180 },
  { date: "2024-04-20", Truck: 89, Lorry: 150 },
  { date: "2024-04-21", Truck: 137, Lorry: 200 },
  { date: "2024-04-22", Truck: 224, Lorry: 170 },
  { date: "2024-04-23", Truck: 138, Lorry: 230 },
  { date: "2024-04-24", Truck: 387, Lorry: 290 },
  { date: "2024-04-25", Truck: 215, Lorry: 250 },
  { date: "2024-04-26", Truck: 75, Lorry: 130 },
  { date: "2024-04-27", Truck: 383, Lorry: 420 },
  { date: "2024-04-28", Truck: 122, Lorry: 180 },
  { date: "2024-04-29", Truck: 315, Lorry: 240 },
  { date: "2024-04-30", Truck: 454, Lorry: 380 },
  { date: "2024-05-01", Truck: 165, Lorry: 220 },
  { date: "2024-05-02", Truck: 293, Lorry: 310 },
  { date: "2024-05-03", Truck: 247, Lorry: 190 },
  { date: "2024-05-04", Truck: 385, Lorry: 420 },
  { date: "2024-05-05", Truck: 481, Lorry: 390 },
  { date: "2024-05-06", Truck: 498, Lorry: 520 },
  { date: "2024-05-07", Truck: 388, Lorry: 300 },
  { date: "2024-05-08", Truck: 149, Lorry: 210 },
  { date: "2024-05-09", Truck: 227, Lorry: 180 },
  { date: "2024-05-10", Truck: 293, Lorry: 330 },
  { date: "2024-05-11", Truck: 335, Lorry: 270 },
  { date: "2024-05-12", Truck: 197, Lorry: 240 },
  { date: "2024-05-13", Truck: 197, Lorry: 160 },
  { date: "2024-05-14", Truck: 448, Lorry: 490 },
  { date: "2024-05-15", Truck: 473, Lorry: 380 },
  { date: "2024-05-16", Truck: 338, Lorry: 400 },
  { date: "2024-05-17", Truck: 499, Lorry: 420 },
  { date: "2024-05-18", Truck: 315, Lorry: 350 },
  { date: "2024-05-19", Truck: 235, Lorry: 180 },
  { date: "2024-05-20", Truck: 177, Lorry: 230 },
  { date: "2024-05-21", Truck: 82, Lorry: 140 },
  { date: "2024-05-22", Truck: 81, Lorry: 120 },
  { date: "2024-05-23", Truck: 252, Lorry: 290 },
  { date: "2024-05-24", Truck: 294, Lorry: 220 },
  { date: "2024-05-25", Truck: 201, Lorry: 250 },
  { date: "2024-05-26", Truck: 213, Lorry: 170 },
  { date: "2024-05-27", Truck: 420, Lorry: 460 },
  { date: "2024-05-28", Truck: 233, Lorry: 190 },
  { date: "2024-05-29", Truck: 78, Lorry: 130 },
  { date: "2024-05-30", Truck: 340, Lorry: 280 },
  { date: "2024-05-31", Truck: 178, Lorry: 230 },
  { date: "2024-06-01", Truck: 178, Lorry: 200 },
  { date: "2024-06-02", Truck: 470, Lorry: 410 },
  { date: "2024-06-03", Truck: 103, Lorry: 160 },
  { date: "2024-06-04", Truck: 439, Lorry: 380 },
  { date: "2024-06-05", Truck: 88, Lorry: 140 },
  { date: "2024-06-06", Truck: 294, Lorry: 250 },
  { date: "2024-06-07", Truck: 323, Lorry: 370 },
  { date: "2024-06-08", Truck: 385, Lorry: 320 },
  { date: "2024-06-09", Truck: 438, Lorry: 480 },
  { date: "2024-06-10", Truck: 155, Lorry: 200 },
  { date: "2024-06-11", Truck: 92, Lorry: 150 },
  { date: "2024-06-12", Truck: 492, Lorry: 420 },
  { date: "2024-06-13", Truck: 81, Lorry: 130 },
  { date: "2024-06-14", Truck: 426, Lorry: 380 },
  { date: "2024-06-15", Truck: 307, Lorry: 350 },
  { date: "2024-06-16", Truck: 371, Lorry: 310 },
  { date: "2024-06-17", Truck: 475, Lorry: 520 },
  { date: "2024-06-18", Truck: 107, Lorry: 170 },
  { date: "2024-06-19", Truck: 341, Lorry: 290 },
  { date: "2024-06-20", Truck: 408, Lorry: 450 },
  { date: "2024-06-21", Truck: 169, Lorry: 210 },
  { date: "2024-06-22", Truck: 317, Lorry: 270 },
  { date: "2024-06-23", Truck: 480, Lorry: 530 },
  { date: "2024-06-24", Truck: 132, Lorry: 180 },
  { date: "2024-06-25", Truck: 141, Lorry: 190 },
  { date: "2024-06-26", Truck: 434, Lorry: 380 },
  { date: "2024-06-27", Truck: 448, Lorry: 490 },
  { date: "2024-06-28", Truck: 149, Lorry: 200 },
  { date: "2024-06-29", Truck: 103, Lorry: 160 },
  { date: "2024-06-30", Truck: 446, Lorry: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Truck: {
    label: "Truck",
    color: "hsl(var(--chart-1))",
  },
  Lorry: {
    label: "Lorry",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isLorry = false; // useIsLorry();
  const [timeRange, setTimeRange] = React.useState("30d");
  const [timeRange2, setTimeRange2] = React.useState("7d");

  React.useEffect(() => {
    if (isLorry) {
      setTimeRange("7d");
      setTimeRange2("7d");
    }
  }, [isLorry]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  const filteredData2 = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange2 === "30d") {
      daysToSubtract = 30;
    } else if (timeRange2 === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <div className="flex flex-row gap-4">
      <Card className="@container/card ml-6 flex-1">
        <CardHeader className="relative">
          <CardTitle>Number of Vehicles (Moved In)</CardTitle>
          <CardDescription>
            <span className="@[540px]/card:block hidden">
              Total for the last 3 months
            </span>
            <span className="@[540px]/card:hidden">Last 3 months</span>
          </CardDescription>
          <div className="absolute right-4 top-4">
            <ToggleGroup
              type="single"
              value={timeRange}
              onValueChange={setTimeRange}
              variant="outline"
              className="@[767px]/card:flex hidden"
            >
              <ToggleGroupItem value="90d" className="h-8 px-2.5">
                Last 3 months
              </ToggleGroupItem>
              <ToggleGroupItem value="30d" className="h-8 px-2.5">
                Last 30 days
              </ToggleGroupItem>
              <ToggleGroupItem value="7d" className="h-8 px-2.5">
                Last 7 days
              </ToggleGroupItem>
            </ToggleGroup>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger
                className="@[767px]/card:hidden flex w-40"
                aria-label="Select a value"
              >
                <SelectValue placeholder="Last 3 months" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="90d" className="rounded-lg">
                  Last 3 months
                </SelectItem>
                <SelectItem value="30d" className="rounded-lg">
                  Last 30 days
                </SelectItem>
                <SelectItem value="7d" className="rounded-lg">
                  Last 7 days
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="fillTruck" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-Truck)"
                    stopOpacity={1.0}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-Truck)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillLorry" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-Lorry)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-Lorry)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <ChartTooltip
                cursor={false}
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
                dataKey="Lorry"
                type="natural"
                fill="url(#fillLorry)"
                stroke="var(--color-Lorry)"
                stackId="a"
              />
              <Area
                dataKey="Truck"
                type="natural"
                fill="url(#fillTruck)"
                stroke="var(--color-Truck)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card className="@container/card mr-6 flex-1">
        <CardHeader className="relative">
          <CardTitle>Number of Vehicles (Moved Out)</CardTitle>
          <CardDescription>
            <span className="@[540px]/card:block hidden">
              Total for the last 3 months
            </span>
            <span className="@[540px]/card:hidden">Last 3 months</span>
          </CardDescription>
          <div className="absolute right-4 top-4">
            <ToggleGroup
              type="single"
              value={timeRange2}
              onValueChange={setTimeRange2}
              variant="outline"
              className="@[767px]/card:flex hidden"
            >
              <ToggleGroupItem value="90d" className="h-8 px-2.5">
                Last 3 months
              </ToggleGroupItem>
              <ToggleGroupItem value="30d" className="h-8 px-2.5">
                Last 30 days
              </ToggleGroupItem>
              <ToggleGroupItem value="7d" className="h-8 px-2.5">
                Last 7 days
              </ToggleGroupItem>
            </ToggleGroup>
            <Select value={timeRange2} onValueChange={setTimeRange2}>
              <SelectTrigger
                className="@[767px]/card:hidden flex w-40"
                aria-label="Select a value"
              >
                <SelectValue placeholder="Last 3 months" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="90d" className="rounded-lg">
                  Last 3 months
                </SelectItem>
                <SelectItem value="30d" className="rounded-lg">
                  Last 30 days
                </SelectItem>
                <SelectItem value="7d" className="rounded-lg">
                  Last 7 days
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <AreaChart data={filteredData2}>
              <defs>
                <linearGradient id="fillTruck" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-Truck)"
                    stopOpacity={1.0}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-Truck)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillLorry" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-Lorry)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-Lorry)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <ChartTooltip
                cursor={false}
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
                dataKey="Lorry"
                type="natural"
                fill="url(#fillLorry)"
                stroke="var(--color-Lorry)"
                stackId="a"
              />
              <Area
                dataKey="Truck"
                type="natural"
                fill="url(#fillTruck)"
                stroke="var(--color-Truck)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
