import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { AnimatedSplashOverlay } from '@/features/shared/components/animated-icon';
import AppTabs from '@/features/shared/components/app-tabs';

const queryClient = new QueryClient();

export default function TabLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AnimatedSplashOverlay />
      <AppTabs />
    </QueryClientProvider>
  );
}
