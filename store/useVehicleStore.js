import { create } from 'zustand';

const useVehicleStore = create((set) => ({
  // State
  vehicles: [],          // All vehicles from cards data
  selectedVehicle: null, // Currently viewed vehicle
  
  // Actions
  setVehicles: (vehicles) => set({ vehicles }),
  setSelectedVehicle: (vehicle) => set({ selectedVehicle: vehicle }),
  clearSelectedVehicle: () => set({ selectedVehicle: null }),
}));

export default useVehicleStore; // Must be default export