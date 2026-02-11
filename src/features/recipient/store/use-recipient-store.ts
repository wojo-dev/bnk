import { Recipient } from '@/features/recipient/types/recipient.types';
import { create } from 'zustand';

type RecipientStore = {
  search: string;
  selectedRecipient: Recipient | null;
  activeTab: string;
  setSearch: (search: string) => void;
  setSelectedRecipient: (recipient: Recipient | null) => void;
  setActiveTab: (tab: string) => void;
  reset: () => void;
};

export const useRecipientStore = create<RecipientStore>((set) => ({
  search: '',
  selectedRecipient: null,
  activeTab: 'recents',
  setSearch: (search) => set({ search }),
  setSelectedRecipient: (selectedRecipient) => set({ selectedRecipient }),
  setActiveTab: (activeTab) => set({ activeTab }),
  reset: () => set({ search: '', selectedRecipient: null, activeTab: 'recents' }),
}));
