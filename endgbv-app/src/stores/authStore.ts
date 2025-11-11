/**
 * Authentication Store - Zustand
 * Manages user authentication and profile state
 */

import { create } from 'zustand';
import type { User, UserPreferences } from '../types';
import { UserRole } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  registerAnonymous: () => Promise<void>;
  updateUser: (user: Partial<User>) => void;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set: (fn: (state: AuthState) => Partial<AuthState>) => void) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (email: string, _password: string) => {
    set({ isLoading: true, error: null } as any);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      const newUser: User = {
        id: `user-${Date.now()}`,
        email,
        name: email.split('@')[0],
        role: UserRole.SURVIVOR,
        language: 'English',
        isAnonymous: false,
        createdAt: new Date(),
        preferences: {
          theme: 'auto',
          language: 'English',
          notificationsEnabled: true,
          shareAnonymously: true,
          trackLocation: false,
        },
      };

      set({ user: newUser, isAuthenticated: true, isLoading: false } as any);
    } catch (err) {
      set({ error: 'Login failed', isLoading: false } as any);
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false } as any);
  },

  registerAnonymous: async () => {
    set({ isLoading: true, error: null } as any);
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));

      const anonUser: User = {
        id: `anon-${Date.now()}`,
        role: UserRole.ANONYMOUS,
        language: 'English',
        isAnonymous: true,
        createdAt: new Date(),
        preferences: {
          theme: 'auto',
          language: 'English',
          notificationsEnabled: false,
          shareAnonymously: true,
          trackLocation: false,
        },
      };

      set({ user: anonUser, isAuthenticated: true, isLoading: false } as any);
    } catch (err) {
      set({ error: 'Anonymous login failed', isLoading: false } as any);
    }
  },

  updateUser: (updates: Partial<User>) => {
    set((state: AuthState) => ({
      user: state.user ? { ...state.user, ...updates } : null,
    } as any));
  },

  updatePreferences: (prefs: Partial<UserPreferences>) => {
    set((state: AuthState) => ({
      user: state.user
        ? {
            ...state.user,
            preferences: { ...state.user.preferences, ...prefs },
          }
        : null,
    } as any));
  },

  clearError: () => {
    set({ error: null } as any);
  },
}));
