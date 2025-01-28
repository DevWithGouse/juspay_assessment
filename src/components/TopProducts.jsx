import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const products = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: "37",
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: "64",
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: "184",
    amount: "$3,680.00",
  },
  {
    name: "Marco Shoes",
    price: "$79.49",
    quantity: "64",
    amount: "$1,965.81",
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
}

export default function TopProducts() {
  const [hoveredRow, setHoveredRow] = useState(null)

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-5 bg-card-background rounded-xl"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Top Selling Products
      </h3>
      
      <div className="w-full">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
              <th className="pb-4 font-medium w-[35%]">Name</th>
              <th className="pb-4 font-medium text-right w-[20%]">Price</th>
              <th className="pb-4 font-medium text-right w-[20%]">Quantity</th>
              <th className="pb-4 font-medium text-right w-[25%]">Amount</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <AnimatePresence>
              {products.map((product) => (
                <motion.tr 
                  key={product.name}
                  variants={rowVariants}
                  onHoverStart={() => setHoveredRow(product.name)}
                  onHoverEnd={() => setHoveredRow(null)}
                  className={`
                    border-t border-gray-100 dark:border-gray-700
                    ${hoveredRow === product.name ? 'bg-gray-50 dark:bg-gray-800/50 text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}
                  `}
                >
                  <td className="py-4 text-gray-900 dark:text-white">
                    <motion.div
                      animate={{
                        x: hoveredRow === product.name ? 5 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="flex items-center gap-2"
                    >
                      <span className="truncate">{product.name}</span>
                      {hoveredRow === product.name && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"
                        />
                      )}
                    </motion.div>
                  </td>
                  <td className="py-4 text-right text-gray-500 dark:text-gray-400">
                    <motion.span
                      animate={{
                        scale: hoveredRow === product.name ? 1.05 : 1,
                        color: hoveredRow === product.name ? "#4CAF50" : "#6b7280",  
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    >
                      {product.price}
                    </motion.span>
                  </td>
                  <td className="py-4 text-right text-gray-500 dark:text-gray-400">
                    <motion.span
                      animate={{
                        scale: hoveredRow === product.name ? 1.05 : 1,
                        color: hoveredRow === product.name ? "#4CAF50" : "#6b7280",  
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    >
                      {product.quantity}
                    </motion.span>
                  </td>
                  <td className="py-4 text-right text-gray-900 dark:text-white">
                    <motion.span
                      animate={{
                        scale: hoveredRow === product.name ? 1.05 : 1,
                        color: hoveredRow === product.name ? "#4CAF50" : "#6b7280",  
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    >
                      {product.amount}
                    </motion.span>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
