import { create } from 'zustand';

type RecipientStore = {
  search: string;
  selectedId: string | null;
  activeTab: string;
  setSearch: (search: string) => void;
  setSelectedId: (id: string | null) => void;
  setActiveTab: (tab: string) => void;
  reset: () => void;
};

export const useRecipientStore = create<RecipientStore>((set) => ({
  search: '',
  selectedId: null,
  activeTab: 'recents',
  setSearch: (search) => set({ search }),
  setSelectedId: (selectedId) => set({ selectedId }),
  setActiveTab: (activeTab) => set({ activeTab }),
  reset: () => set({ search: '', selectedId: null, activeTab: 'recents' }),
}));
