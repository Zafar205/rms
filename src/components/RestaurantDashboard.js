"use client";

import { useAuth } from "@/context/AuthContext";
import { 
  MenuIcon, 
  TableIcon, 
  OrderIcon, 
  InventoryIcon, 
  StaffIcon,
  ChefHatIcon 
} from "./Icons";

export default function RestaurantDashboard() {
  const { user, logout } = useAuth();

  async function handleLogout() {
    const result = await logout();
    if (result.success) {
      // User will be redirected automatically by the auth context
    }
  }

  if (!user) return null;

  const dashboardItems = [
    {
      title: "Menu Management",
      description: "Manage your restaurant menu items, prices, and categories",
      icon: MenuIcon,
      color: "from-blue-400 to-blue-600",
      stats: "24 Items"
    },
    {
      title: "Table Management",
      description: "Manage table reservations and availability",
      icon: TableIcon,
      color: "from-green-400 to-green-600",
      stats: "12 Tables"
    },
    {
      title: "Orders",
      description: "Track and manage customer orders",
      icon: OrderIcon,
      color: "from-yellow-400 to-yellow-600",
      stats: "8 Pending"
    },
    {
      title: "Inventory",
      description: "Track ingredients and supplies",
      icon: InventoryIcon,
      color: "from-purple-400 to-purple-600",
      stats: "156 Items"
    },
    {
      title: "Staff",
      description: "Manage restaurant staff and schedules",
      icon: StaffIcon,
      color: "from-pink-400 to-pink-600",
      stats: "12 Members"
    },
    {
      title: "Kitchen",
      description: "Monitor kitchen operations and orders",
      icon: ChefHatIcon,
      color: "from-red-400 to-red-600",
      stats: "5 Active"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-3">
                <ChefHatIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">RestaurantMS</h1>
                <p className="text-sm text-gray-600">Management System</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.name.split(' ')[0]}!</h2>
          <p className="text-gray-600">Here's what's happening in your restaurant today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Revenue</p>
                <p className="text-2xl font-bold text-gray-900">$2,847</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">💰</span>
              </div>
            </div>
            <p className="text-sm text-green-600 mt-2">+12% from yesterday</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Orders Today</p>
                <p className="text-2xl font-bold text-gray-900">127</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-xl">📋</span>
              </div>
            </div>
            <p className="text-sm text-blue-600 mt-2">8 pending orders</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Tables</p>
                <p className="text-2xl font-bold text-gray-900">9/12</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-xl">🪑</span>
              </div>
            </div>
            <p className="text-sm text-yellow-600 mt-2">3 tables available</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Staff Online</p>
                <p className="text-2xl font-bold text-gray-900">8/12</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-xl">👥</span>
              </div>
            </div>
            <p className="text-sm text-purple-600 mt-2">All shifts covered</p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border border-orange-100"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">{item.stats}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors duration-200">
                      Manage →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-lg border border-orange-100">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { action: "New order received", table: "Table 7", time: "2 minutes ago", status: "new" },
                { action: "Order completed", table: "Table 3", time: "5 minutes ago", status: "completed" },
                { action: "Table reservation", table: "Table 12", time: "10 minutes ago", status: "reserved" },
                { action: "Staff check-in", table: "John Doe", time: "15 minutes ago", status: "info" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      activity.status === 'new' ? 'bg-blue-500' :
                      activity.status === 'completed' ? 'bg-green-500' :
                      activity.status === 'reserved' ? 'bg-yellow-500' : 'bg-gray-500'
                    }`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.table}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
