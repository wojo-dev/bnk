import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import AppTabs from '@/features/shared/components/app-tabs';

const queryClient = new QueryClient();

export default function TabLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppTabs />
    </QueryClientProvider>
  );
}
