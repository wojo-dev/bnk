import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import axios, { AxiosError } from 'axios';

const AUTH_TOKEN_KEY = 'auth_token';
const AUTH_ENDPOINTS = ['/verify', '/auth'];

let onAuthExpired: (() => void) | null = null;

export function setOnAuthExpired(cb: () => void) {
  onAuthExpired = cb;
}

function getBaseUrl() {
  const host = Constants.expoConfig?.hostUri;
  if (host) {
    return `http://${host}/api`;
  }
  return 'http://192.168.0.5:8081/api';
}

export class ApiError extends Error {
  status: number | undefined;
  isTimeout: boolean;
  isNetworkError: boolean;

  constructor(
    message: string,
    options: { status?: number; isTimeout?: boolean; isNetworkError?: boolean } = {},
  ) {
    super(message);
    this.name = 'ApiError';
    this.status = options.status;
    this.isTimeout = options.isTimeout ?? false;
    this.isNetworkError = options.isNetworkError ?? false;
  }
}

function getStatusMessage(status: number): string {
  switch (status) {
    case 400:
      return 'Invalid request. Please check your input and try again.';
    case 401:
      return 'Your session has expired. Please log in again.';
    case 403:
      return 'You do not have permission to perform this action.';
    case 404:
      return 'The requested resource was not found.';
    default:
      return 'Something went wrong. Please try again later.';
  }
}

export const apiClient = axios.create({
  baseURL: getBaseUrl(),
  timeout: 15000,
});

apiClient.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync(AUTH_TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<{ error?: string }>) => {
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(
        new ApiError('Request timed out. Please check your connection and try again.', {
          isTimeout: true,
        }),
      );
    }

    if (!error.response) {
      return Promise.reject(
        new ApiError('Unable to connect. Please check your internet connection.', {
          isNetworkError: true,
        }),
      );
    }

    const status = error.response.status;
    const serverMessage = error.response.data?.error;
    const message = serverMessage || getStatusMessage(status);

    if (status === 401) {
      const url = error.config?.url ?? '';
      const isAuthEndpoint = AUTH_ENDPOINTS.some((ep) => url.endsWith(ep));
      if (!isAuthEndpoint) {
        await SecureStore.deleteItemAsync(AUTH_TOKEN_KEY);
        onAuthExpired?.();
      }
    }

    return Promise.reject(new ApiError(message, { status }));
  },
);
