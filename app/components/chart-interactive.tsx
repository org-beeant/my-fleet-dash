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
const chartDataRC = [
  { Date: "2025-01-01", Day: "Wed", Approved: "201" },
  { Date: "2025-01-02", Day: "Thu", Approved: "211" },
  { Date: "2025-01-03", Day: "Fri", Approved: "211" },
  { Date: "2025-01-04", Day: "Sat", Approved: "105" },
  { Date: "2025-01-06", Day: "Mon", Approved: "205" },
  { Date: "2025-01-07", Day: "Tue", Approved: "225" },
  { Date: "2025-01-08", Day: "Wed", Approved: "231" },
  { Date: "2025-01-09", Day: "Thu", Approved: "239" },
  { Date: "2025-01-10", Day: "Fri", Approved: "237" },
  { Date: "2025-01-11", Day: "Sat", Approved: "118" },
  { Date: "2025-01-13", Day: "Mon", Approved: "255" },
  { Date: "2025-01-14", Day: "Tue", Approved: "275" },
  { Date: "2025-01-15", Day: "Wed", Approved: "281" },
  { Date: "2025-01-16", Day: "Thu", Approved: "289" },
  { Date: "2025-01-17", Day: "Fri", Approved: "287" },
  { Date: "2025-01-18", Day: "Sat", Approved: "143" },
  { Date: "2025-01-20", Day: "Mon", Approved: "255" },
  { Date: "2025-01-21", Day: "Tue", Approved: "275" },
  { Date: "2025-01-22", Day: "Wed", Approved: "281" },
  { Date: "2025-01-23", Day: "Thu", Approved: "289" },
  { Date: "2025-01-24", Day: "Fri", Approved: "287" },
  { Date: "2025-01-25", Day: "Sat", Approved: "145" },
  { Date: "2025-01-27", Day: "Mon", Approved: "255" },
  { Date: "2025-01-28", Day: "Tue", Approved: "275" },
  { Date: "2025-01-29", Day: "Wed", Approved: "281" },
  { Date: "2025-01-30", Day: "Thu", Approved: "289" },
  { Date: "2025-01-31", Day: "Fri", Approved: "287" },
  { Date: "2025-02-01", Day: "Sat", Approved: "138" },
  { Date: "2025-02-03", Day: "Mon", Approved: "255" },
  { Date: "2025-02-04", Day: "Tue", Approved: "275" },
  { Date: "2025-02-05", Day: "Wed", Approved: "281" },
  { Date: "2025-02-06", Day: "Thu", Approved: "289" },
  { Date: "2025-02-07", Day: "Fri", Approved: "287" },
  { Date: "2025-02-08", Day: "Sat", Approved: "143" },
  { Date: "2025-02-10", Day: "Mon", Approved: "255" },
  { Date: "2025-02-11", Day: "Tue", Approved: "275" },
  { Date: "2025-02-12", Day: "Wed", Approved: "281" },
  { Date: "2025-02-13", Day: "Thu", Approved: "289" },
  { Date: "2025-02-14", Day: "Fri", Approved: "287" },
  { Date: "2025-02-15", Day: "Sat", Approved: "145" },
  { Date: "2025-02-17", Day: "Mon", Approved: "255" },
  { Date: "2025-02-18", Day: "Tue", Approved: "275" },
  { Date: "2025-02-19", Day: "Wed", Approved: "281" },
  { Date: "2025-02-20", Day: "Thu", Approved: "289" },
  { Date: "2025-02-21", Day: "Fri", Approved: "287" },
  { Date: "2025-02-22", Day: "Sat", Approved: "138" },
  { Date: "2025-02-24", Day: "Mon", Approved: "255" },
  { Date: "2025-02-25", Day: "Tue", Approved: "275" },
  { Date: "2025-02-26", Day: "Wed", Approved: "281" },
  { Date: "2025-02-27", Day: "Thu", Approved: "289" },
  { Date: "2025-02-28", Day: "Fri", Approved: "287" },
  { Date: "2025-03-01", Day: "Sat", Approved: "143" },
  { Date: "2025-03-03", Day: "Mon", Approved: "255" },
  { Date: "2025-03-04", Day: "Tue", Approved: "275" },
  { Date: "2025-03-05", Day: "Wed", Approved: "281" },
  { Date: "2025-03-06", Day: "Thu", Approved: "289" },
  { Date: "2025-03-07", Day: "Fri", Approved: "287" },
  { Date: "2025-03-08", Day: "Sat", Approved: "100" },
  { Date: "2025-03-10", Day: "Mon", Approved: "255" },
  { Date: "2025-03-11", Day: "Tue", Approved: "275" },
  { Date: "2025-03-12", Day: "Wed", Approved: "281" },
  { Date: "2025-03-13", Day: "Thu", Approved: "289" },
  { Date: "2025-03-14", Day: "Fri", Approved: "287" },
  { Date: "2025-03-15", Day: "Sat", Approved: "102" },
  { Date: "2025-03-17", Day: "Mon", Approved: "255" },
  { Date: "2025-03-18", Day: "Tue", Approved: "275" },
  { Date: "2025-03-19", Day: "Wed", Approved: "281" },
  { Date: "2025-03-20", Day: "Thu", Approved: "289" },
  { Date: "2025-03-21", Day: "Fri", Approved: "287" },
  { Date: "2025-03-22", Day: "Sat", Approved: "143" },
  { Date: "2025-03-24", Day: "Mon", Approved: "255" },
  { Date: "2025-03-25", Day: "Tue", Approved: "275" },
  { Date: "2025-03-26", Day: "Wed", Approved: "281" },
  { Date: "2025-03-27", Day: "Thu", Approved: "289" },
  { Date: "2025-03-28", Day: "Fri", Approved: "287" },
  { Date: "2025-03-29", Day: "Sat", Approved: "120" },
  { Date: "2025-03-31", Day: "Mon", Approved: "255" },
  { Date: "2025-04-01", Day: "Tue", Approved: "275" },
  { Date: "2025-04-02", Day: "Wed", Approved: "281" },
  { Date: "2025-04-03", Day: "Thu", Approved: "289" },
  { Date: "2025-04-04", Day: "Fri", Approved: "287" },
  { Date: "2025-04-05", Day: "Sat", Approved: "122" },
  { Date: "2025-04-07", Day: "Mon", Approved: "255" },
  { Date: "2025-04-08", Day: "Tue", Approved: "275" },
  { Date: "2025-04-09", Day: "Wed", Approved: "281" },
  { Date: "2025-04-10", Day: "Thu", Approved: "289" },
  { Date: "2025-04-11", Day: "Fri", Approved: "287" },
  { Date: "2025-04-12", Day: "Sat", Approved: "143" },
  { Date: "2025-04-14", Day: "Mon", Approved: "255" },
  { Date: "2025-04-15", Day: "Tue", Approved: "275" },
  { Date: "2025-04-16", Day: "Wed", Approved: "281" },
  { Date: "2025-04-17", Day: "Thu", Approved: "289" },
  { Date: "2025-04-18", Day: "Fri", Approved: "287" },
  { Date: "2025-04-19", Day: "Sat", Approved: "122" },
  { Date: "2025-04-21", Day: "Mon", Approved: "255" },
  { Date: "2025-04-22", Day: "Tue", Approved: "275" },
  { Date: "2025-04-23", Day: "Wed", Approved: "281" },
  { Date: "2025-04-24", Day: "Thu", Approved: "289" },
  { Date: "2025-04-25", Day: "Fri", Approved: "287" },
  { Date: "2025-04-26", Day: "Sat", Approved: "124" },
  { Date: "2025-04-28", Day: "Mon", Approved: "255" },
  { Date: "2025-04-29", Day: "Tue", Approved: "275" },
  { Date: "2025-04-30", Day: "Wed", Approved: "281" },
  { Date: "2025-05-01", Day: "Thu", Approved: "289" },
  { Date: "2025-05-02", Day: "Fri", Approved: "287" },
  { Date: "2025-05-03", Day: "Sat", Approved: "110" },
  { Date: "2025-05-05", Day: "Mon", Approved: "255" },
  { Date: "2025-05-06", Day: "Tue", Approved: "275" },
  { Date: "2025-05-07", Day: "Wed", Approved: "281" },
  { Date: "2025-05-08", Day: "Thu", Approved: "289" },
  { Date: "2025-05-09", Day: "Fri", Approved: "287" },
  { Date: "2025-05-10", Day: "Sat", Approved: "143" },
  { Date: "2025-05-12", Day: "Mon", Approved: "255" },
  { Date: "2025-05-13", Day: "Tue", Approved: "275" },
  { Date: "2025-05-14", Day: "Wed", Approved: "281" },
  { Date: "2025-05-15", Day: "Thu", Approved: "289" },
];

const chartDataCh = [
  { Date: "2025-01-01", Day: "Wed", Approved: "49" },
  { Date: "2025-01-02", Day: "Thu", Approved: "39" },
  { Date: "2025-01-03", Day: "Fri", Approved: "39" },
  { Date: "2025-01-04", Day: "Sat", Approved: "1" },
  { Date: "2025-01-06", Day: "Mon", Approved: "45" },
  { Date: "2025-01-07", Day: "Tue", Approved: "25" },
  { Date: "2025-01-08", Day: "Wed", Approved: "19" },
  { Date: "2025-01-09", Day: "Thu", Approved: "11" },
  { Date: "2025-01-10", Day: "Fri", Approved: "13" },
  { Date: "2025-01-11", Day: "Sat", Approved: "9" },
  { Date: "2025-01-13", Day: "Mon", Approved: "15" },
  { Date: "2025-01-14", Day: "Tue", Approved: "18" },
  { Date: "2025-01-15", Day: "Wed", Approved: "12" },
  { Date: "2025-01-16", Day: "Thu", Approved: "4" },
  { Date: "2025-01-17", Day: "Fri", Approved: "6" },
  { Date: "2025-01-18", Day: "Sat", Approved: "7" },
  { Date: "2025-01-20", Day: "Mon", Approved: "15" },
  { Date: "2025-01-21", Day: "Tue", Approved: "18" },
  { Date: "2025-01-22", Day: "Wed", Approved: "12" },
  { Date: "2025-01-23", Day: "Thu", Approved: "4" },
  { Date: "2025-01-24", Day: "Fri", Approved: "6" },
  { Date: "2025-01-25", Day: "Sat", Approved: "5" },
  { Date: "2025-01-27", Day: "Mon", Approved: "15" },
  { Date: "2025-01-28", Day: "Tue", Approved: "18" },
  { Date: "2025-01-29", Day: "Wed", Approved: "12" },
  { Date: "2025-01-30", Day: "Thu", Approved: "4" },
  { Date: "2025-01-31", Day: "Fri", Approved: "6" },
  { Date: "2025-02-01", Day: "Sat", Approved: "12" },
  { Date: "2025-02-03", Day: "Mon", Approved: "15" },
  { Date: "2025-02-04", Day: "Tue", Approved: "18" },
  { Date: "2025-02-05", Day: "Wed", Approved: "12" },
  { Date: "2025-02-06", Day: "Thu", Approved: "4" },
  { Date: "2025-02-07", Day: "Fri", Approved: "6" },
  { Date: "2025-02-08", Day: "Sat", Approved: "7" },
  { Date: "2025-02-10", Day: "Mon", Approved: "15" },
  { Date: "2025-02-11", Day: "Tue", Approved: "18" },
  { Date: "2025-02-12", Day: "Wed", Approved: "12" },
  { Date: "2025-02-13", Day: "Thu", Approved: "4" },
  { Date: "2025-02-14", Day: "Fri", Approved: "6" },
  { Date: "2025-02-15", Day: "Sat", Approved: "5" },
  { Date: "2025-02-17", Day: "Mon", Approved: "15" },
  { Date: "2025-02-18", Day: "Tue", Approved: "18" },
  { Date: "2025-02-19", Day: "Wed", Approved: "12" },
  { Date: "2025-02-20", Day: "Thu", Approved: "4" },
  { Date: "2025-02-21", Day: "Fri", Approved: "6" },
  { Date: "2025-02-22", Day: "Sat", Approved: "12" },
  { Date: "2025-02-24", Day: "Mon", Approved: "15" },
  { Date: "2025-02-25", Day: "Tue", Approved: "18" },
  { Date: "2025-02-26", Day: "Wed", Approved: "12" },
  { Date: "2025-02-27", Day: "Thu", Approved: "4" },
  { Date: "2025-02-28", Day: "Fri", Approved: "6" },
  { Date: "2025-03-01", Day: "Sat", Approved: "7" },
  { Date: "2025-03-03", Day: "Mon", Approved: "15" },
  { Date: "2025-03-04", Day: "Tue", Approved: "18" },
  { Date: "2025-03-05", Day: "Wed", Approved: "12" },
  { Date: "2025-03-06", Day: "Thu", Approved: "4" },
  { Date: "2025-03-07", Day: "Fri", Approved: "6" },
  { Date: "2025-03-08", Day: "Sat", Approved: "50" },
  { Date: "2025-03-10", Day: "Mon", Approved: "15" },
  { Date: "2025-03-11", Day: "Tue", Approved: "18" },
  { Date: "2025-03-12", Day: "Wed", Approved: "12" },
  { Date: "2025-03-13", Day: "Thu", Approved: "4" },
  { Date: "2025-03-14", Day: "Fri", Approved: "6" },
  { Date: "2025-03-15", Day: "Sat", Approved: "48" },
  { Date: "2025-03-17", Day: "Mon", Approved: "15" },
  { Date: "2025-03-18", Day: "Tue", Approved: "18" },
  { Date: "2025-03-19", Day: "Wed", Approved: "12" },
  { Date: "2025-03-20", Day: "Thu", Approved: "4" },
  { Date: "2025-03-21", Day: "Fri", Approved: "6" },
  { Date: "2025-03-22", Day: "Sat", Approved: "7" },
  { Date: "2025-03-24", Day: "Mon", Approved: "15" },
  { Date: "2025-03-25", Day: "Tue", Approved: "18" },
  { Date: "2025-03-26", Day: "Wed", Approved: "12" },
  { Date: "2025-03-27", Day: "Thu", Approved: "4" },
  { Date: "2025-03-28", Day: "Fri", Approved: "6" },
  { Date: "2025-03-29", Day: "Sat", Approved: "30" },
  { Date: "2025-03-31", Day: "Mon", Approved: "15" },
  { Date: "2025-04-01", Day: "Tue", Approved: "18" },
  { Date: "2025-04-02", Day: "Wed", Approved: "12" },
  { Date: "2025-04-03", Day: "Thu", Approved: "4" },
  { Date: "2025-04-04", Day: "Fri", Approved: "6" },
  { Date: "2025-04-05", Day: "Sat", Approved: "28" },
  { Date: "2025-04-07", Day: "Mon", Approved: "15" },
  { Date: "2025-04-08", Day: "Tue", Approved: "18" },
  { Date: "2025-04-09", Day: "Wed", Approved: "12" },
  { Date: "2025-04-10", Day: "Thu", Approved: "4" },
  { Date: "2025-04-11", Day: "Fri", Approved: "6" },
  { Date: "2025-04-12", Day: "Sat", Approved: "7" },
  { Date: "2025-04-14", Day: "Mon", Approved: "15" },
  { Date: "2025-04-15", Day: "Tue", Approved: "18" },
  { Date: "2025-04-16", Day: "Wed", Approved: "12" },
  { Date: "2025-04-17", Day: "Thu", Approved: "4" },
  { Date: "2025-04-18", Day: "Fri", Approved: "6" },
  { Date: "2025-04-19", Day: "Sat", Approved: "28" },
  { Date: "2025-04-21", Day: "Mon", Approved: "15" },
  { Date: "2025-04-22", Day: "Tue", Approved: "18" },
  { Date: "2025-04-23", Day: "Wed", Approved: "12" },
  { Date: "2025-04-24", Day: "Thu", Approved: "4" },
  { Date: "2025-04-25", Day: "Fri", Approved: "6" },
  { Date: "2025-04-26", Day: "Sat", Approved: "26" },
  { Date: "2025-04-28", Day: "Mon", Approved: "15" },
  { Date: "2025-04-29", Day: "Tue", Approved: "18" },
  { Date: "2025-04-30", Day: "Wed", Approved: "12" },
  { Date: "2025-05-01", Day: "Thu", Approved: "4" },
  { Date: "2025-05-02", Day: "Fri", Approved: "6" },
  { Date: "2025-05-03", Day: "Sat", Approved: "40" },
  { Date: "2025-05-05", Day: "Mon", Approved: "15" },
  { Date: "2025-05-06", Day: "Tue", Approved: "18" },
  { Date: "2025-05-07", Day: "Wed", Approved: "12" },
  { Date: "2025-05-08", Day: "Thu", Approved: "4" },
  { Date: "2025-05-09", Day: "Fri", Approved: "6" },
  { Date: "2025-05-10", Day: "Sat", Approved: "7" },
  { Date: "2025-05-12", Day: "Mon", Approved: "15" },
  { Date: "2025-05-13", Day: "Tue", Approved: "18" },
  { Date: "2025-05-14", Day: "Wed", Approved: "12" },
  { Date: "2025-05-15", Day: "Thu", Approved: "4" },
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
  const [timeRange, setTimeRange] = React.useState("7d");
  const [timeRange2, setTimeRange2] = React.useState("7d");

  React.useEffect(() => {
    if (isFailure) {
      setTimeRange("7d");
      setTimeRange2("7d");
    }
  }, [isFailure]);

  const filteredData = chartDataRC.filter((item) => {
    const date = new Date(item.Date);
    const referenceDate = new Date("2025-05-15");
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

  const filteredData2 = chartDataCh.filter((item) => {
    const date = new Date(item.Date);
    const referenceDate = new Date("2025-05-15");
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
            <span className="@[540px]/card:hidden">
              {timeRange === "7d"
                ? "7 Days"
                : timeRange === "30d"
                ? "30 Days"
                : "90 Days"}
            </span>
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
                dataKey="Date"
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
              {/*  <Area
                dataKey="Failure"
                type="natural"
                fill="url(#fillFailure)"
                stroke="var(--color-Failure)"
                stackId="a"
              > */}
              {/* <LabelList
                  position="bottom"
                  offset={12}
                  className="fill-foreground"
                  fontSize={9}
                /> */}
              {/* </Area> */}
              <Area
                dataKey="Approved"
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
                dataKey="Date"
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
              {/*  <Area
                dataKey="Failure"
                type="natural"
                fill="url(#fillFailure)"
                stroke="var(--color-Failure)"
                stackId="a"
              /> */}
              <Area
                dataKey="Approved"
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
