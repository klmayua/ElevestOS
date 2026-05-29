"use client";

import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { tokens } from "@/lib/tokens";

const data = [
  { name: "Jan", health: 85 },
  { name: "Feb", health: 88 },
  { name: "Mar", health: 82 },
  { name: "Apr", health: 89 },
  { name: "May", health: 91 },
  { name: "Jun", health: 94 },
  { name: "Jul", health: 98 },
];

export function OrgHealthChart() {
  return (
    <div className="h-[200px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorHealth" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={tokens.colors.brand.trust}
                stopOpacity={0.3}
              />
              <stop
                offset="95%"
                stopColor={tokens.colors.brand.trust}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: tokens.colors.text.muted }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: tokens.colors.surface.primary,
              border: `1px solid ${tokens.colors.surface.secondary}`,
              borderRadius: "4px",
            }}
          />
          <Area
            type="monotone"
            dataKey="health"
            stroke={tokens.colors.brand.trust}
            fillOpacity={1}
            fill="url(#colorHealth)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
