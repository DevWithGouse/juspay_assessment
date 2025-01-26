import React, { useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts"

const data = [
  { name: "Direct", value: 300.56, color: "#1C1C1C" },
  { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
  { name: "E-mail", value: 48.96, color: "#B1E3FF" },
  { name: "Sponsored", value: 154.02, color: "#95A4FC" },
]

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    percent
  } = props;

  const midAngle = startAngle + (endAngle - startAngle) / 2;
  const radius = outerRadius + 20;
  
  // Adjust position based on angle to prevent going out of bounds
  let x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  let y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
  
  // Adjust x position if too close to edges
  const containerWidth = cx * 2;
  const labelWidth = 80;
  const padding = 10;
  
  if (x + labelWidth/2 + padding > containerWidth) {
    x = containerWidth - labelWidth/2 - padding;
  } else if (x - labelWidth/2 - padding < 0) {
    x = labelWidth/2 + padding;
  }
  
  // Adjust y position if too close to edges
  const containerHeight = cy * 2;
  const labelHeight = 30;
  
  if (y + labelHeight/2 + padding > containerHeight) {
    y = containerHeight - labelHeight/2 - padding;
  } else if (y - labelHeight/2 - padding < 0) {
    y = labelHeight/2 + padding;
  }

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        cornerRadius={16}
      />
      <foreignObject
        x={x - 40}
        y={y - 15}
        width={80}
        height={30}
        style={{
          overflow: 'visible'
        }}
      >
        <div
          className="px-3 py-1.5 bg-gray-800/95 text-white text-xs font-medium rounded-md shadow-lg"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap'
          }}
        >
          {`${(percent * 100).toFixed(1)}%`}
        </div>
      </foreignObject>
    </g>
  );
};

export default function TotalSales() {
  const [activeIndex, setActiveIndex] = useState(0)

  const onPieEnter = (_, index) => {
    setActiveIndex(index)
  }

  return (
    <div className="p-5 bg-card-background rounded-xl">
      <h3 className="text-xl font-semibold  text-gray-900 dark:text-white mb-1">
        Total Sales
      </h3>
      <div className="h-40 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              innerRadius="60%"
              outerRadius="90%"
              paddingAngle={4}
              dataKey="value"
              onMouseEnter={onPieEnter}
              startAngle={90}
              endAngle={-270}
              cornerRadius={16}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  className="transition-all duration-200"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-4 mt-8">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: item.color }} 
              />
              <span className="text-sm text-gray-900 dark:text-white">
                {item.name}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              ${item.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}