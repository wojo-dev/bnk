import { useAuthStore } from '@/features/auth/store/use-auth-store';
import { ApiError, setOnAuthExpired } from '@/features/shared/lib/api-client';
import { useNetworkStore } from '@/features/shared/store/use-network-store';
import { OfflineBanner } from '@/ui/offline-banner/offline-banner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

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

  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const isLoading = useAuthStore((s) => s.isLoading);
  const checkAuth = useAuthStore((s) => s.checkAuth);
  const logout = useAuthStore((s) => s.logout);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    setOnAuthExpired(() => logout());
  }, [logout]);

  useEffect(() => {
    if (!isAuthenticated) {
      queryClient.clear();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const unsubscribe = initNetworkListener();
    return unsubscribe;
  }, [initNetworkListener]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <OfflineBanner visible={!isConnected} />
      {isAuthenticated ? (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerBackTitle: 'Home' }} />
          <Stack.Screen name="history" />
          <Stack.Protected guard={__DEV__}>
            <Stack.Screen name="storybook" />
          </Stack.Protected>
        </Stack>
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" />
        </Stack>
      )}
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
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
