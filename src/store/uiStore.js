import { create } from 'zustand';

const useUIStore = create((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  
  activeTab: 'features',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export default useUIStore;
