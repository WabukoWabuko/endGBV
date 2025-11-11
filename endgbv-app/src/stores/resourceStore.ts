/**
 * Resources & Incidents Store - Zustand
 * Manages resources, hotlines, and incident data
 */

import { create } from 'zustand';
import type { Resource, Hotline, Incident } from '../types';
import { MOCK_RESOURCES, MOCK_HOTLINES } from '../utils/mockData';

interface ResourceStore {
  resources: Resource[];
  hotlines: Hotline[];
  incidents: Incident[];
  loading: boolean;
  error: string | null;

  // Resource actions
  fetchResources: () => Promise<void>;
  fetchHotlines: () => Promise<void>;
  searchNearbyResources: (lat: number, lng: number, radiusKm: number) => Resource[];
  filterResourcesByType: (type: string) => Resource[];

  // Incident actions
  reportIncident: (incident: Omit<Incident, 'id' | 'reportedAt'>) => Promise<void>;
  getIncidents: () => Incident[];
  
  // Hotline lookup
  findLocalHotline: (country: string) => Hotline | null;
}

// Simple distance calculation (Haversine formula)
const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const useResourceStore = create<ResourceStore>((set, get) => ({
  resources: [],
  hotlines: [],
  incidents: [],
  loading: false,
  error: null,

  fetchResources: async () => {
    set({ loading: true, error: null });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      set({ resources: MOCK_RESOURCES, loading: false });
    } catch (err) {
      set({ error: 'Failed to fetch resources', loading: false });
    }
  },

  fetchHotlines: async () => {
    set({ loading: true, error: null });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 300));
      set({ hotlines: MOCK_HOTLINES, loading: false });
    } catch (err) {
      set({ error: 'Failed to fetch hotlines', loading: false });
    }
  },

  searchNearbyResources: (lat: number, lng: number, radiusKm = 50) => {
    const state = get();
    return state.resources
      .map((resource) => ({
        ...resource,
        distance: calculateDistance(
          lat,
          lng,
          resource.location.latitude,
          resource.location.longitude
        ),
      }))
      .filter((resource) => resource.distance <= radiusKm)
      .sort((a, b) => a.distance - b.distance) as Resource[];
  },

  filterResourcesByType: (type: string) => {
    const state = get();
    return state.resources.filter((r) => r.type === type);
  },

  reportIncident: async (incident) => {
    set({ loading: true, error: null });
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const newIncident: Incident = {
        ...incident,
        id: `incident-${Date.now()}`,
        reportedAt: new Date(),
      };

      set((state) => ({
        incidents: [...state.incidents, newIncident],
        loading: false,
      }));
    } catch (err) {
      set({ error: 'Failed to report incident', loading: false });
    }
  },

  getIncidents: () => {
    return get().incidents;
  },

  findLocalHotline: (country: string) => {
    const state = get();
    return state.hotlines.find((h) => h.country === country) || state.hotlines[0] || null;
  },
}));
