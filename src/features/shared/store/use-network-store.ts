import NetInfo from '@react-native-community/netinfo';
import { create } from 'zustand';

type NetworkStore = {
  isConnected: boolean;
  setIsConnected: (isConnected: boolean) => void;
  initNetworkListener: () => () => void;
};

export const useNetworkStore = create<NetworkStore>((set) => ({
  isConnected: true,
  setIsConnected: (isConnected) => set({ isConnected }),
  initNetworkListener: () => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      set({ isConnected: state.isConnected ?? true });
    });
    return unsubscribe;
  },
}));
