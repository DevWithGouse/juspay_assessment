import React from "react"
import { motion } from "framer-motion"
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

export default function MetricCard({ title, value, change, type, highlighted = false }) {
  const isPositive = type === "increase"

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`p-5 rounded-2xl ${highlighted ? "bg-sky-200/50 dark:bg-sky-100" : "bg-card-background"} overflow-hidden`}
    >
      <div className="space-y-3">
        <h3 className={`text-sm ${highlighted ? "text-gray-900": "text-gray-900 dark:text-white"  } truncate`}>{title}</h3>
        <div className="flex items-center justify-between">
          <span className={`text-2xl font-semibold ${highlighted ? "text-gray-900": "text-gray-900 dark:text-white"  } truncate`}>{value}</span>
          <div
            className={`flex items-center gap-1 text-sm font-medium ${isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}
          >
            <span className="truncate">{change}</span>
            {isPositive ? <FaArrowTrendUp className="w-4 h-4" /> : <FaArrowTrendDown className="w-4 h-4" />}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
