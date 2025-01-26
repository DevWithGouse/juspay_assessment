import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", current: 8, previous: 12 },
  { month: "Feb", current: 7, previous: 18 },
  { month: "Mar", current: 9, previous: 14 },
  { month: "Apr", current: 15, previous: 12 },
  { month: "May", current: 17, previous: 10 },
  { month: "Jun", current: 19, previous: 22 },
]

export default function RevenueChart() {
  return (
    <div className="p-5 bg-card-background rounded-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-0">Revenue</h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Current Week</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">$58,211</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-200" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Previous Week</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">$68,768</span>
          </div>
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 12 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="currentColor"
              strokeWidth={2}
              dot={false}
              className="text-gray-900 dark:text-white"
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#93C5FD"
              strokeWidth={2}
              dot={false}
              strokeDasharray="4 4"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

