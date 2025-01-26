import React, { useState } from "react"
import { X } from "lucide-react"

export default function AddOrderDialog({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    project: "",
    address: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newOrder = {
      id: `#CM${Math.floor(Math.random() * 1000) + 9000}`,
      user: {
        name: "New User",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      project: formData.project,
      address: formData.address,
      date: "Just now",
      status: "Pending",
    }
    onAdd(newOrder)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add New Order</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Name</label>
            <input
              type="text"
              required
              value={formData.project}
              onChange={(e) => setFormData((prev) => ({ ...prev, project: e.target.value }))}
              className="w-full px-3 py-2 border rounded-lg dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label>
            <input
              type="text"
              required
              value={formData.address}
              onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
              className="w-full px-3 py-2 border rounded-lg dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              Add Order
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

