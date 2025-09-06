"use client";

import { useAuth } from "@/context/AuthContext";

export default function UserProfile() {
  const { user, logout } = useAuth();

  async function handleLogout() {
    const result = await logout();
    if (result.success) {
      // User will be redirected automatically by the auth context
    }
  }

  if (!user) return null;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Welcome!</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <p className="text-gray-800 bg-gray-50 rounded px-3 py-2">{user.name}</p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <p className="text-gray-800 bg-gray-50 rounded px-3 py-2">{user.email}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Account Created
          </label>
          <p className="text-gray-800 bg-gray-50 rounded px-3 py-2">
            {new Date(user.$createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
