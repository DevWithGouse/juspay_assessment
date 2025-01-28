import React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Rectangle } from "recharts"
import { motion, AnimatePresence } from "framer-motion"

const data = [
  { month: "Jan", actual: 15, projected: 4 },
  { month: "Feb", actual: 18, projected: 6 },
  { month: "Mar", actual: 16, projected: 5 },
  { month: "Apr", actual: 22, projected: 6 },
  { month: "May", actual: 14, projected: 4 },
  { month: "Jun", actual: 19, projected: 5 }
]

const CustomBar = (props) => {
  const { fill, x, y, width, height, radius } = props;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.g
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.1 : 1,
      }}
      style={{
        originX: x + width / 2,
        originY: y + height / 2,
      }}
      transition={{ duration: 0.2 }}
    >
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        radius={radius || 0}
      />
    </motion.g>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-2 shadow-lg rounded-lg border border-gray-100 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p 
            key={index} 
            className="text-sm font-medium text-primary"
          >
            {entry.name}: {entry.value}M
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ProjectionsChart() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div 
      className="p-5 bg-card-background rounded-xl w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3 
        className="text-xl font-semibold text-gray-900 dark:text-white mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Projections vs Actuals
      </motion.h3>
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="h-[200px] min-h-[200px] w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={data} 
                margin={{ 
                  top: 5, 
                  right: 5, 
                  left: 5, 
                  bottom: 5 
                }}
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
                  dx={0}
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
                <Tooltip 
                  content={<CustomTooltip />}
                  cursor={false}
                />
                <Bar 
                  dataKey="actual" 
                  name="Actual"
                  stackId="a"
                  fill="#A8C5DA"
                  radius={[0, 0, 0, 0]}
                  padding={10}
                  animationDuration={1500}
                  animationBegin={300}
                  shape={<CustomBar />}
                />
                <Bar 
                  dataKey="projected" 
                  name="Projected"
                  stackId="a"
                  fill="#d5e6f2"
                  radius={[4, 4, 0, 0]}
                  padding={10}
                  animationDuration={1500}
                  animationBegin={600}
                  shape={<CustomBar radius={[4, 4, 0, 0]} />}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}