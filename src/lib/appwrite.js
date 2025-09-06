import { Client, Account, Databases, ID } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);

// Authentication functions
export const authService = {
  // Create a new account
  async createAccount(email, password, name) {
    try {
      const userAccount = await account.create(ID.unique(), email, password, name);
      if (userAccount) {
        // Automatically log in the user after registration
        return this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  },

  // Login with email and password
  async login(email, password) {
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  },

  // Get current user
  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      return null;
    }
  },

  // Logout
  async logout() {
    try {
      return await account.deleteSessions();
    } catch (error) {
      throw error;
    }
  },

  // Update user profile
  async updateProfile(name, email) {
    try {
      if (name) {
        await account.updateName(name);
      }
      if (email) {
        await account.updateEmail(email, "password"); // User needs to provide current password
      }
      return await account.get();
    } catch (error) {
      throw error;
    }
  },

  // Change password
  async changePassword(newPassword, oldPassword) {
    try {
      return await account.updatePassword(newPassword, oldPassword);
    } catch (error) {
      throw error;
    }
  },

  // Send password recovery email
  async forgotPassword(email) {
    try {
      return await account.createRecovery(
        email,
        `${process.env.NEXT_PUBLIC_APP_URL}/reset-password`
      );
    } catch (error) {
      throw error;
    }
  },

  // Complete password recovery
  async resetPassword(userId, secret, newPassword) {
    try {
      return await account.updateRecovery(userId, secret, newPassword);
    } catch (error) {
      throw error;
    }
  }
};

export { client, account, databases, ID };
