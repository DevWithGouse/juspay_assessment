import React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", actual: 15, projected: 4 },
  { month: "Feb", actual: 18, projected: 6 },
  { month: "Mar", actual: 16, projected: 5 },
  { month: "Apr", actual: 22, projected: 6 },
  { month: "May", actual: 14, projected: 4 },
  { month: "Jun", actual: 19, projected: 5 }
]

export default function ProjectionsChart() {
  return (
    <div className="p-5 bg-card-background rounded-xl">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
        Projections vs Actuals
      </h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            barGap={100}
            barCategoryGap={30}
            barSize={20}
          >
            <CartesianGrid 
              strokeDasharray="0" 
              horizontal={true}
              vertical={false}
              stroke="rgba(148, 163, 184, 0.08)"
            />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#94A3B8', fontSize: 12 }}
              dy={10}
              padding={{ right: 5 }}
              dx={-10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#94A3B8', fontSize: 12 }}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              dx={-30}
              dy={10}
            />
            <Bar 
              dataKey="actual" 
              stackId="a"
              fill="#A8C5DA"
              radius={[0, 0, 0, 0]}
              padding={10}
            />
            <Bar 
              dataKey="projected" 
              stackId="a"
              fill="#d5e6f2"
              radius={[4, 4, 0, 0]}
              padding={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

