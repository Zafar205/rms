"use client";

import "./app.css";
import "@appwrite.io/pink-icons";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import NextjsLogo from "../static/nextjs-icon.svg";
import AppwriteLogo from "../static/appwrite-icon.svg";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import RestaurantDashboard from "@/components/RestaurantDashboard";
import { ChefHatIcon } from "@/components/Icons";

export default function Home() {
  const { user, loading } = useAuth();
  const [showLogin, setShowLogin] = useState(true); // true for login, false for register

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex flex-col items-center justify-center p-5">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-6">
            <ChefHatIcon className="w-8 h-8 text-white animate-pulse" />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="h-8 w-8 animate-spin fill-orange-500 text-gray-200"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <span className="text-gray-700 font-medium">Loading Restaurant Management System...</span>
          </div>
        </div>
      </main>
    );
  }

  // Show authentication forms if user is not logged in
  if (!user) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex flex-col items-center justify-center p-5">
        {/* Restaurant Branding Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <ChefHatIcon className="w-10 h-10 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-1">RestaurantMS</h1>
              <p className="text-gray-600 text-lg">Professional Management System</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center border border-orange-100">
                <Image
                  alt={"Next.js logo"}
                  src={NextjsLogo}
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-gray-600 font-medium">Next.js</span>
            </div>
            
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center border border-orange-100">
                <Image
                  alt={"Appwrite logo"}
                  src={AppwriteLogo}
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-gray-600 font-medium">Appwrite</span>
            </div>
          </div>
        </div>

        {/* Authentication Forms */}
        {showLogin ? (
          <LoginForm onToggleForm={() => setShowLogin(false)} />
        ) : (
          <RegisterForm onToggleForm={() => setShowLogin(true)} />
        )}

        {/* Features Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Everything you need to manage your restaurant
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-orange-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">📋</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Order Management</h4>
              <p className="text-gray-600 text-sm">Track and manage all customer orders efficiently</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-orange-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🪑</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Table Reservations</h4>
              <p className="text-gray-600 text-sm">Manage table bookings and availability</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-orange-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Analytics</h4>
              <p className="text-gray-600 text-sm">Get insights into your restaurant performance</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Show restaurant dashboard for authenticated users
  return <RestaurantDashboard />;
}
