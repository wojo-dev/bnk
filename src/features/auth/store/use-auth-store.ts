import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';

const AUTH_TOKEN_KEY = 'auth_token';

type AuthStore = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  isLoading: true,
  login: async (token: string) => {
    await SecureStore.setItemAsync(AUTH_TOKEN_KEY, token);
    set({ isAuthenticated: true });
  },
  logout: async () => {
    await SecureStore.deleteItemAsync(AUTH_TOKEN_KEY);
    set({ isAuthenticated: false });
  },
  checkAuth: async () => {
    const token = await SecureStore.getItemAsync(AUTH_TOKEN_KEY);
    set({ isAuthenticated: !!token, isLoading: false });
  },
}));
