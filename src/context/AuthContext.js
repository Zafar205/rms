"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "@/lib/appwrite";

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const userData = await authService.getCurrentUser();
      setUser(userData);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function login(email, password) {
    try {
      const session = await authService.login(email, password);
      const userData = await authService.getCurrentUser();
      setUser(userData);
      return { success: true, user: userData };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async function register(email, password, name) {
    try {
      const session = await authService.createAccount(email, password, name);
      const userData = await authService.getCurrentUser();
      setUser(userData);
      return { success: true, user: userData };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async function logout() {
    try {
      await authService.logout();
      setUser(null);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    checkUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
