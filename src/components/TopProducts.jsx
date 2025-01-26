import React from "react"

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

export default function TopProducts() {
  return (
    <div className="p-5 bg-card-background rounded-xl ">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Selling Products</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
              <th className="pb-4 font-medium">Name</th>
              <th className="pb-4 font-medium text-right">Price</th>
              <th className="pb-4 font-medium text-right">Quantity</th>
              <th className="pb-4 font-medium text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {products.map((product) => (
              <tr key={product.name} className="border-t border-gray-100 dark:border-gray-700">
                <td className="py-4 text-gray-900 dark:text-white">{product.name}</td>
                <td className="py-4 text-right text-gray-500 dark:text-gray-400">{product.price}</td>
                <td className="py-4 text-right text-gray-500 dark:text-gray-400">{product.quantity}</td>
                <td className="py-4 text-right text-gray-900 dark:text-white">{product.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

