import React, { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import { motion, AnimatePresence } from "framer-motion"

const data = [
  { month: "Jan", current: 8, previous: 12 },
  { month: "Feb", current: 7, previous: 18 },
  { month: "Mar", current: 9, previous: 14 },
  { month: "Apr", current: 15, previous: 12 },
  { month: "May", current: 17, previous: 10 },
  { month: "Jun", current: 19, previous: 22 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 border border-gray-100 dark:border-gray-700"
      >
        <motion.p 
          initial={{ y: -5 }}
          animate={{ y: 0 }}
          className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1 "
        >
          {label}
        </motion.p>
        <AnimatePresence>
          {payload.map((entry, index) => (
            <motion.p
              key={index}
              initial={{ x: -5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-sm font-medium text-primary"
            >
              {entry.dataKey === 'current' ? 'Current: ' : 'Previous: '}
              {entry.value}M
            </motion.p>
          ))}
        </AnimatePresence>
      </motion.div>
    )
  }
  return null
}

export default function RevenueChart() {
  const [hoveredLine, setHoveredLine] = useState(null)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-5 bg-card-background rounded-xl"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl font-semibold text-gray-900 dark:text-white m-1 mb-4 sm:mb-0"
        >
          Revenue
        </motion.h3>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Current Week</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">$58,211</span>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-blue-200" />
            <span className="text-sm text-gray-600 dark:text-gray-400">Previous Week</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">$68,768</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="h-[300px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={data} 
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            onMouseMove={(e) => {
              if (e && e.activePayload) {
                setHoveredLine(e.activePayload[0].dataKey)
              }
            }}
            onMouseLeave={() => setHoveredLine(null)}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#94A3B8", fontSize: 12 }} 
              dx={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
            />
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ stroke: '#E2E8F0', strokeWidth: 1 }}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="currentColor"
              strokeWidth={hoveredLine === 'current' ? 3 : 2}
              dot={false}
              activeDot={{ 
                r: 6, 
                fill: 'currentColor',
                className: "animate-pulse"
              }}
              className="text-gray-900 dark:text-white transition-all duration-300"
              animationDuration={1000}
              style={{
                filter: hoveredLine && hoveredLine !== 'current' ? 'opacity(0.5)' : 'none',
                transition: 'filter 0.3s ease, stroke-width 0.3s ease'
              }}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#93C5FD"
              strokeWidth={hoveredLine === 'previous' ? 3 : 2}
              dot={false}
              activeDot={{ 
                r: 6, 
                fill: '#93C5FD',
                className: "animate-pulse"
              }}
              strokeDasharray="4 4"
              animationDuration={1000}
              style={{
                filter: hoveredLine && hoveredLine !== 'previous' ? 'opacity(0.5)' : 'none',
                transition: 'filter 0.3s ease, stroke-width 0.3s ease'
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
  )
}