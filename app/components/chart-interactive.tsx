"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, LabelList, XAxis } from "recharts";

//import { useIsFailure } from "@/hooks/use-Failure";
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
  { date: "2024-04-01", Success: 222, Failure: 150 },
  { date: "2024-04-02", Success: 97, Failure: 180 },
  { date: "2024-04-03", Success: 167, Failure: 120 },
  { date: "2024-04-04", Success: 242, Failure: 260 },
  { date: "2024-04-05", Success: 373, Failure: 290 },
  { date: "2024-04-06", Success: 301, Failure: 340 },
  { date: "2024-04-07", Success: 245, Failure: 180 },
  { date: "2024-04-08", Success: 409, Failure: 320 },
  { date: "2024-04-09", Success: 59, Failure: 110 },
  { date: "2024-04-10", Success: 261, Failure: 190 },
  { date: "2024-04-11", Success: 327, Failure: 350 },
  { date: "2024-04-12", Success: 292, Failure: 210 },
  { date: "2024-04-13", Success: 342, Failure: 380 },
  { date: "2024-04-14", Success: 137, Failure: 220 },
  { date: "2024-04-15", Success: 120, Failure: 170 },
  { date: "2024-04-16", Success: 138, Failure: 190 },
  { date: "2024-04-17", Success: 446, Failure: 360 },
  { date: "2024-04-18", Success: 364, Failure: 410 },
  { date: "2024-04-19", Success: 243, Failure: 180 },
  { date: "2024-04-20", Success: 89, Failure: 150 },
  { date: "2024-04-21", Success: 137, Failure: 200 },
  { date: "2024-04-22", Success: 224, Failure: 170 },
  { date: "2024-04-23", Success: 138, Failure: 230 },
  { date: "2024-04-24", Success: 387, Failure: 290 },
  { date: "2024-04-25", Success: 215, Failure: 250 },
  { date: "2024-04-26", Success: 75, Failure: 130 },
  { date: "2024-04-27", Success: 383, Failure: 420 },
  { date: "2024-04-28", Success: 122, Failure: 180 },
  { date: "2024-04-29", Success: 315, Failure: 240 },
  { date: "2024-04-30", Success: 454, Failure: 380 },
  { date: "2024-05-01", Success: 165, Failure: 220 },
  { date: "2024-05-02", Success: 293, Failure: 310 },
  { date: "2024-05-03", Success: 247, Failure: 190 },
  { date: "2024-05-04", Success: 385, Failure: 420 },
  { date: "2024-05-05", Success: 481, Failure: 390 },
  { date: "2024-05-06", Success: 498, Failure: 520 },
  { date: "2024-05-07", Success: 388, Failure: 300 },
  { date: "2024-05-08", Success: 149, Failure: 210 },
  { date: "2024-05-09", Success: 227, Failure: 180 },
  { date: "2024-05-10", Success: 293, Failure: 330 },
  { date: "2024-05-11", Success: 335, Failure: 270 },
  { date: "2024-05-12", Success: 197, Failure: 240 },
  { date: "2024-05-13", Success: 197, Failure: 160 },
  { date: "2024-05-14", Success: 448, Failure: 490 },
  { date: "2024-05-15", Success: 473, Failure: 380 },
  { date: "2024-05-16", Success: 338, Failure: 400 },
  { date: "2024-05-17", Success: 499, Failure: 420 },
  { date: "2024-05-18", Success: 315, Failure: 350 },
  { date: "2024-05-19", Success: 235, Failure: 180 },
  { date: "2024-05-20", Success: 177, Failure: 230 },
  { date: "2024-05-21", Success: 82, Failure: 140 },
  { date: "2024-05-22", Success: 81, Failure: 120 },
  { date: "2024-05-23", Success: 252, Failure: 290 },
  { date: "2024-05-24", Success: 294, Failure: 220 },
  { date: "2024-05-25", Success: 201, Failure: 250 },
  { date: "2024-05-26", Success: 213, Failure: 170 },
  { date: "2024-05-27", Success: 420, Failure: 460 },
  { date: "2024-05-28", Success: 233, Failure: 190 },
  { date: "2024-05-29", Success: 78, Failure: 130 },
  { date: "2024-05-30", Success: 340, Failure: 280 },
  { date: "2024-05-31", Success: 178, Failure: 230 },
  { date: "2024-06-01", Success: 178, Failure: 200 },
  { date: "2024-06-02", Success: 470, Failure: 410 },
  { date: "2024-06-03", Success: 103, Failure: 160 },
  { date: "2024-06-04", Success: 439, Failure: 380 },
  { date: "2024-06-05", Success: 88, Failure: 140 },
  { date: "2024-06-06", Success: 294, Failure: 250 },
  { date: "2024-06-07", Success: 323, Failure: 370 },
  { date: "2024-06-08", Success: 385, Failure: 320 },
  { date: "2024-06-09", Success: 438, Failure: 480 },
  { date: "2024-06-10", Success: 155, Failure: 200 },
  { date: "2024-06-11", Success: 92, Failure: 150 },
  { date: "2024-06-12", Success: 492, Failure: 420 },
  { date: "2024-06-13", Success: 81, Failure: 130 },
  { date: "2024-06-14", Success: 426, Failure: 380 },
  { date: "2024-06-15", Success: 307, Failure: 350 },
  { date: "2024-06-16", Success: 371, Failure: 310 },
  { date: "2024-06-17", Success: 475, Failure: 520 },
  { date: "2024-06-18", Success: 107, Failure: 170 },
  { date: "2024-06-19", Success: 341, Failure: 290 },
  { date: "2024-06-20", Success: 408, Failure: 450 },
  { date: "2024-06-21", Success: 169, Failure: 210 },
  { date: "2024-06-22", Success: 317, Failure: 270 },
  { date: "2024-06-23", Success: 480, Failure: 530 },
  { date: "2024-06-24", Success: 132, Failure: 180 },
  { date: "2024-06-25", Success: 141, Failure: 190 },
  { date: "2024-06-26", Success: 434, Failure: 380 },
  { date: "2024-06-27", Success: 448, Failure: 490 },
  { date: "2024-06-28", Success: 149, Failure: 200 },
  { date: "2024-06-29", Success: 103, Failure: 160 },
  { date: "2024-06-30", Success: 446, Failure: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Success: {
    label: "Success",
    color: "hsl(var(--chart-2))",
  },
  Failure: {
    label: "Failure",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isFailure = false; // useIsFailure();
  const [timeRange, setTimeRange] = React.useState("30d");
  const [timeRange2, setTimeRange2] = React.useState("7d");

  React.useEffect(() => {
    if (isFailure) {
      setTimeRange("7d");
      setTimeRange2("7d");
    }
  }, [isFailure]);

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
    <div className="flex flex-col md:flex-row gap-4">
      <Card className="@container/card ml-6 flex-1">
        <CardHeader className="relative">
          <CardTitle>RC Approval Status</CardTitle>
          <CardDescription>
            <span className="@[540px]/card:block hidden">
              Total for the last 3 months
            </span>
            <span className="@[540px]/card:hidden">{timeRange}</span>
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
                <linearGradient id="fillSuccess" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-Success)"
                    stopOpacity={1.0}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-Success)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillFailure" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-Failure)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-Failure)"
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
                dataKey="Failure"
                type="natural"
                fill="url(#fillFailure)"
                stroke="var(--color-Failure)"
                stackId="a"
              >
                {/* <LabelList
                  position="bottom"
                  offset={12}
                  className="fill-foreground"
                  fontSize={9}
                /> */}
              </Area>
              <Area
                dataKey="Success"
                type="natural"
                fill="url(#fillSuccess)"
                stroke="var(--color-Success)"
                stackId="a"
              >
                {/* <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={9}
                /> */}
              </Area>
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card className="@container/card mr-6 flex-1">
        <CardHeader className="relative">
          <CardTitle>Chassis Approval Status</CardTitle>
          <CardDescription>
            <span className="@[540px]/card:block hidden">
              Total for the last 3 months
            </span>
            <span className="@[540px]/card:hidden">
              {timeRange2 === "7d"
                ? "7 Days"
                : timeRange2 === "30d"
                ? "30 Days"
                : "90 Days"}
            </span>
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
                <linearGradient id="fillSuccess" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-Success)"
                    stopOpacity={1.0}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-Success)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillFailure" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-Failure)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-Failure)"
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
                dataKey="Failure"
                type="natural"
                fill="url(#fillFailure)"
                stroke="var(--color-Failure)"
                stackId="a"
              />
              <Area
                dataKey="Success"
                type="natural"
                fill="url(#fillSuccess)"
                stroke="var(--color-Success)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
