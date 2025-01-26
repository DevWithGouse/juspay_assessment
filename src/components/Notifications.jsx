import React from "react";
import { Bug, UserPlus, Play } from "lucide-react";

const notifications = [
  { icon: Bug, title: "You have a bug that needs...", time: "Just now" },
  { icon: UserPlus, title: "New user registered", time: "59 minutes ago" },
  { icon: Bug, title: "You have a bug that needs...", time: "12 hours ago" },
  { icon: Play, title: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
];

const activities = [
  { user: { name: "John Doe", avatar: "/men.svg?height=32&width=32" }, title: "You have a bug that needs...", time: "Just now" },
  { user: { name: "Sarah Smith", avatar: "/women.svg?height=32&width=32" }, title: "Released a new version", time: "59 minutes ago" },
  { user: { name: "Mike Johnson", avatar: "/men.svg?height=32&width=32" }, title: "Submitted a bug", time: "12 hours ago" },
  { user: { name: "Emily Brown", avatar: "/women.svg?height=32&width=32" }, title: "Modified a data in Page X", time: "Today, 11:59 AM" },
  { user: { name: "Alex Wilson", avatar: "/men.svg?height=32&width=32" }, title: "Deleted a page in Project X", time: "Feb 2, 2023" },
];

const contacts = [
  { name: "Natali Craig", status: "active", avatar: "/women.svg?height=32&width=32" },
  { name: "Drew Cano", status: "offline", avatar: "/men.svg?height=32&width=32" },
  { name: "Orlando Diggs", status: "active", avatar: "/women.svg?height=32&width=32" },
  { name: "Andi Lane", status: "active", avatar: "/men.svg?height=32&width=32" },
  { name: "Kate Morrison", status: "active", avatar: "/women.svg?height=32&width=32" }
];

export default function Notifications() {
  return (
    <div className="h-full bg-white dark:bg-black border-l dark:border-gray-700">
      <div className="flex flex-col h-full min-h-screen">
        {/* Notifications Section */}
        <div className="pt-4 pb-2 pr-4 pl-4 border-b dark:border-gray-700 flex-grow-0">
          <h2 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Notifications</h2>
          <div className="space-y-2">
            {notifications.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <item.icon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white">{item.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="pt-4 pb-2 pr-4 pl-4 border-b dark:border-gray-700 flex-grow">
          <h2 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Activities</h2>
          <div className="space-y-2">
            {activities.map((activity, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <img
                    src={activity.user.avatar || "/men.svg"}
                    alt=""
                    className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white">{activity.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts Section */}
        <div className="p-4 flex-grow">
          <h2 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Contacts</h2>
          <div className="space-y-1.5">
            {contacts.map((contact, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={contact.avatar || "/men.svg"}
                    alt={contact.name}
                    className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700"
                  />
                  <div
                    className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-gray-800 ${
                      contact.status === "active" ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                </div>
                <span className="text-sm text-gray-900 dark:text-white">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
