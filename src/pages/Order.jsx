import React, { useState, useMemo } from "react"
import { Plus, ArrowUpDown, Search, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import AddOrderDialog from "../components/AddOrderDialog"

const generateOrders = (count) => {
  const users = [
    { name: "Natali Craig", avatar: "/men.svg?height=32&width=32" },
    { name: "Kate Morrison", avatar: "/women.svg?height=32&width=32" },
    { name: "Drew Cano", avatar: "/men.svg?height=32&width=32" },
    { name: "Orlando Diggs", avatar: "/women.svg?height=32&width=32" },
    { name: "Andi Lane", avatar: "/men.svg?height=32&width=32" },
  ]

  const projects = ["Landing Page", "CRM Admin pages", "Client Project", "Admin Dashboard", "App Landing Page"]
  const addresses = [
    "Meadow Lane Oakland",
    "Larry San Francisco",
    "Bagwell Avenue Ocala",
    "Washburn Baton Rouge",
    "Nest Lane Olivette",
  ]
  const statuses = ["In Progress", "Complete", "Pending", "Approved", "Rejected"]

  return Array.from({ length: count }, (_, i) => ({
    id: `#CM${9801 + i}`,
    user: users[i % users.length],
    project: projects[i % projects.length],
    address: addresses[i % addresses.length],
    date: i < 2 ? "Just now" : i < 4 ? "A minute ago" : i < 6 ? "1 hour ago" : i < 8 ? "Yesterday" : "Feb 2, 2023",
    status: statuses[i % statuses.length],
  }))
}

const statusStyles = {
  "In Progress": "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-400/10",
  Complete: "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-400/10",
  Pending: "text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-400/10",
  Approved: "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-400/10",
  Rejected: "text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-400/10",
}

export default function Order() {
  const [orders, setOrders] = useState(generateOrders(50))
  const [currentPage, setCurrentPage] = useState(1)
  const [sortDirection, setSortDirection] = useState("asc")
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const ordersPerPage = 10

  const filteredAndSortedOrders = useMemo(() => {
    let result = [...orders]

    if (searchQuery) {
      result = result.filter((order) => order.id.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    result.sort((a, b) => {
      const aNum = Number.parseInt(a.id.replace(/\D/g, ""))
      const bNum = Number.parseInt(b.id.replace(/\D/g, ""))
      return sortDirection === "asc" ? aNum - bNum : bNum - aNum
    })

    return result
  }, [searchQuery, sortDirection, orders])

  const currentOrders = useMemo(() => {
    const startIndex = (currentPage - 1) * ordersPerPage
    return filteredAndSortedOrders.slice(startIndex, startIndex + ordersPerPage)
  }, [currentPage, filteredAndSortedOrders])

  const totalPages = Math.ceil(filteredAndSortedOrders.length / ordersPerPage)

  const handleAddOrder = (newOrder) => {
    setOrders((prev) => [newOrder, ...prev])
  }

  return (
    <div >
      <div className="text-xl font-semibold  text-gray-900 dark:text-white mb-2">
        Order List
      </div>
      <div >
        <div className="flex justify-between gap-4 bg-card-background p-2 rounded-md">
          {/* Top Controls */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAddDialogOpen(true)}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                <Plus className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center hover:bg-card-background rounded-lg">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500 dark:text-gray-400"
                >
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
              <button
                onClick={() => setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                <ArrowUpDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-[240px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search order ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <th className="py-4 px-6 text-left">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Order ID</span>
                </div>
              </th>
              <th className="py-4 px-6 text-left">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">User</span>
              </th>
              <th className="py-4 px-6 text-left">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Project</span>
              </th>
              <th className="py-4 px-6 text-left">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Address</span>
              </th>
              <th className="py-4 px-6 text-left">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Date</span>
              </th>
              <th className="py-4 px-6 text-left">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</span>
              </th>
              <th className="py-4 px-6 text-left">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {currentOrders.map((order) => (
              <tr key={order.id} className="group hover:bg-card-background">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
                    <span className="text-sm text-gray-900 dark:text-white">{order.id}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={order.user.avatar || "/placeholder.svg"}
                      alt={order.user.name}
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700"
                    />
                    <span className="text-sm text-gray-900 dark:text-white">{order.user.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-gray-900 dark:text-white">{order.project}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{order.address}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{order.date}</span>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-opacity">
                    <MoreHorizontal className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
                    {/* Pagination moved to top right */}
            <div className="flex items-center float-right gap-1 p-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                    currentPage === i + 1
                      ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                      : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg disabled:opacity-50"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
      </div>

      {/* Add Order Dialog */}
      <AddOrderDialog isOpen={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)} onAdd={handleAddOrder} />
    </div>
  )
}

