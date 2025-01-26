import React, { useState } from "react"
import { motion } from "framer-motion"
import { Outlet } from "react-router-dom";
import {
  Sun,
  Moon,
  Search,
  Bell,
  History,
  Slash,
  Star,
  Command,
  Keyboard,
  PanelRightClose,
  PanelRightOpen
} from "lucide-react"
import Sidebar from "../components/Sidebar"
import Notifications from "../components/Notifications"

export default function DashboardLayout() {
  const [isDark, setIsDark] = useState(false)
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [isNotificationsOpen, setNotificationsOpen] = useState(false)

  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      <div className="flex h-screen bg-background">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
        >
          <Sidebar isOpen={isSidebarOpen} />
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1 w-full overflow-hidden">
          {/* Header */}
          <header className="flex items-center h-14 gap-4 px-4 bg-card border-b border-border">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
              >
                {isSidebarOpen ? (
                  <PanelRightOpen className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <PanelRightClose className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              <Star className="w-5 h-5 text-muted-foreground" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground hidden sm:flex">
                <span>Dashboards</span>
                <Slash className="w-2.5 h-4" />
                <span>Default</span>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-12 py-1.5 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <Command className="w-3 h-3 text-muted-foreground" />
                  <Keyboard className="w-3 h-3 text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
                whileTap={{ scale: 0.95 }}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-muted-foreground" />
                )}
              </motion.button>
              <motion.button
                className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
                whileTap={{ scale: 0.95 }}
              >
                <History className="w-5 h-5 text-muted-foreground" />
              </motion.button>
              <motion.button
                onClick={() => setNotificationsOpen(!isNotificationsOpen)}
                className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="w-5 h-5 text-muted-foreground" />
              </motion.button>
              <motion.button
                className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
                whileTap={{ scale: 0.95 }}
                onClick={() => setNotificationsOpen(!isNotificationsOpen)}
              >
                {!isNotificationsOpen ? (
                  <PanelRightOpen className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <PanelRightClose className="w-5 h-5 text-muted-foreground" />
                )}
              </motion.button>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-auto p-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Outlet />
            </motion.div>
          </main>
        </div>

        {isNotificationsOpen &&
          <div
            className={`fixed inset-y-0 right-0 z-50  transform ${isNotificationsOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isNotificationsOpen ? "md:w-80 sm:max-width-[250px]" : "w-0"
              }`}
          >
            <Notifications />
          </div>
        }

        {(isSidebarOpen || isNotificationsOpen) && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => {
              setSidebarOpen(false)
              setNotificationsOpen(false)
            }}
          />
        )}
      </div>
    </div>
  )
}