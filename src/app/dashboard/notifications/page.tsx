"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardCard } from "@/components/dashboard/DashboardCard"
import { Bell, Check, CheckCheck } from "lucide-react"
import { mockNotifications } from "@/lib/mockData"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications)

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? {...n, is_read: true} : n))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({...n, is_read: true})))
  }

  const unreadCount = notifications.filter(n => !n.is_read).length

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-black">
            Notifications
          </h1>
          <p className="mt-2 text-neutral-600">
            {unreadCount > 0 ? `${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
          </p>
        </div>
        {unreadCount > 0 && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={markAllAsRead}
            className="group flex h-11 cursor-pointer items-center gap-2 rounded-full bg-white px-6 text-gray-900 shadow-sm border border-gray-200 transition-all hover:shadow-md hover:border-gray-300"
          >
            <CheckCheck className="h-4 w-4 text-gray-500 group-hover:text-gray-900 transition-colors" />
            <span className="font-semibold text-sm">Mark all as read</span>
          </motion.button>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <DashboardCard className="p-0">
          <CardHeader className="border-b border-gray-50 pb-4">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-gray-400" />
              <CardTitle className="text-lg font-semibold text-gray-900">
                Recent Activity
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-2 px-0">
            <div className="divide-y divide-gray-50">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-gray-50 p-4 mb-4">
                    <Bell className="h-8 w-8 text-gray-300" />
                  </div>
                  <p className="text-gray-500 font-medium">No notifications yet</p>
                </div>
              ) : (
                notifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`group flex items-start gap-4 px-6 py-5 transition-colors hover:bg-gray-50/50 cursor-pointer ${
                      !notification.is_read ? 'bg-blue-50/10' : ''
                    }`}
                    onClick={() => !notification.is_read && markAsRead(notification.id)}
                  >
                    <div className={`mt-1 flex-shrink-0 rounded-full p-2.5 transition-colors ${
                      !notification.is_read 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'bg-gray-50 text-gray-400 group-hover:bg-white group-hover:shadow-sm'
                    }`}>
                      {notification.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <h3 className={`text-sm ${!notification.is_read ? 'font-semibold text-gray-900' : 'font-semibold text-gray-700'}`}>
                            {notification.title}
                          </h3>
                          {!notification.is_read && (
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700">
                              New
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-400 whitespace-nowrap">
                          {new Date(notification.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {notification.message}
                      </p>
                      
                      {'amount' in notification && notification.amount && (
                        <p className="mt-2 text-sm font-mono font-semibold text-green-600">
                          +${notification.amount.toFixed(2)}
                        </p>
                      )}
                    </div>

                    {!notification.is_read && (
                      <div className="flex-shrink-0 self-center">
                        <div className="h-2 w-2 rounded-full bg-blue-500 ring-4 ring-blue-50" />
                      </div>
                    )}
                  </motion.div>
                ))
              )}
            </div>
          </CardContent>
        </DashboardCard>
      </motion.div>
    </div>
  )
}
