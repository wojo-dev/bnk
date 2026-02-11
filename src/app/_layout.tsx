import { ApiError } from '@/features/shared/lib/api-client';
import { useNetworkStore } from '@/features/shared/store/use-network-store';
import { OfflineBanner } from '@/ui/offline-banner/offline-banner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

export { ErrorBoundary } from '@/features/shared/components/ui/error-boundary/error-boundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: (failureCount, error) => {
        if (
          error instanceof ApiError &&
          error.status &&
          error.status >= 400 &&
          error.status < 500
        ) {
          return false;
        }
        return failureCount < 2;
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
    },
    mutations: {
      retry: false,
    },
  },
});

function RootLayoutContent() {
  const isConnected = useNetworkStore((s) => s.isConnected);
  const initNetworkListener = useNetworkStore((s) => s.initNetworkListener);

  useEffect(() => {
    const unsubscribe = initNetworkListener();
    return unsubscribe;
  }, [initNetworkListener]);

  return (
    <View style={styles.container}>
      <OfflineBanner visible={!isConnected} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="history" />
      </Stack>
      <Stack.Protected guard={__DEV__}>
        <Stack.Screen name="storybook" />
      </Stack.Protected>
    </View>
  );
}

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayoutContent />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
