import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  ShoppingCart,
  FolderKanban,
  GraduationCap,
  Home,
  User,
  FileText,
  MessageSquare,
  Building2,
  Briefcase,
  NewspaperIcon,
  Share2,
  ChevronRight,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const mainNavItems = {
  favorites: [
    { icon: Home, label: "Overview", active: false },
    { icon: FolderKanban, label: "Projects", active: false },
  ],
  recently: [
    { icon: FileText, label: "eCommerce", path: "/ecommerce", active: false },
    { icon: ShoppingCart, label: "OrderList", path: "/orderlist", active: false },
  ],
}

const dashboardItems = [
  { icon: LayoutDashboard, label: "Default", active: true },
  { icon: ShoppingCart, label: "eCommerce", active: false, hasChevron: true },
  { icon: FolderKanban, label: "Projects", active: false, hasChevron: true },
  { icon: GraduationCap, label: "Online Courses", active: false, hasChevron: true },
]

const pagesItems = [
  {
    icon: User,
    label: "User Profile",
    subItems: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
  },
  { icon: Building2, label: "Account", subItems: [] },
  { icon: Briefcase, label: "Corporate", subItems: [] },
  { icon: NewspaperIcon, label: "Blog", subItems: [] },
  { icon: Share2, label: "Social", subItems: [] },
]

export default function Sidebar({ isOpen }) {
  const [expandedSections, setExpandedSections] = useState(["User Profile"])
  const [activeTab, setActiveTab] = useState("recently")
  const navigate = useNavigate()

  const toggleSection = (label) => {
    setExpandedSections((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  const handleNavigation = (path) => {
    if (path) navigate(path)
  }

  return (
    <motion.aside
      initial={{ width: isOpen ? 256 : 0 }}
      animate={{ width: isOpen ? 256 : 0 }}
      className="fixed md:static bg-white dark:bg-black border-r dark:border-gray-700 h-screen overflow-y-auto max-w-[200px] flex-shrink-0 z-20"
    >
      <div className="pb-2 pl-4 pt-3 pr-3">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <img src="/men.svg?height=32&width=32" alt="" className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700" />
          </div>
          <span className="font-semibold text-lg text-gray-900 dark:text-white">ByeWind</span>
        </div>

        <div className="space-y-3">
          {/* Favorites/Recently Section */}
          <div>
            <div className="flex gap-4 mb-2">
              <button
                onClick={() => setActiveTab("favorites")}
                className={`flex-1 text-left text-xs font-medium transition-colors ${
                  activeTab === "favorites" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
                }`}
              >
                Favorites
              </button>
              <button
                onClick={() => setActiveTab("recently")}
                className={`flex-1 text-left text-xs font-medium transition-colors ${
                  activeTab === "recently" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
                }`}
              >
                Recently
              </button>
            </div>
            <nav className="space-y-1">
              {mainNavItems[activeTab].map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.path)}
                  className={`flex items-center gap-2 w-full text-left px-2 py-1.5 text-sm rounded-lg ${
                    item.active ? "text-gray-900 dark:text-white font-medium" : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Dashboards Section */}
          <div>
            <h3 className="px-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Dashboards</h3>
            <nav className="space-y-1">
              {dashboardItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`flex items-center gap-2 px-2 py-1.5 text-sm rounded-lg ${
                    item.active
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {!item.active && item.hasChevron && <ChevronRight className="w-4 h-4 shrink-0 text-gray-400" />}
                  <item.icon className="w-4 h-4 shrink-0" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className=" text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Pages</h3>
            <nav className="space-y-1">
              {pagesItems.map((item) => (
                <div key={item.label}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      toggleSection(item.label)
                    }}
                    className={`flex items-center gap-2 px-2 py-1.5 text-sm rounded-lg ${
                      expandedSections.includes(item.label)
                        ? "text-gray-900 dark:text-white font-medium"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        expandedSections.includes(item.label) ? "rotate-90" : ""
                      }`}
                    />
                    <item.icon className="w-4 h-4 shrink-0" />
                    {item.label}
                  </a>
                  {item.subItems && expandedSections.includes(item.label) && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-2 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}
