import Constants from 'expo-constants';
import axios from 'axios';

function getBaseUrl() {
  const host = Constants.expoConfig?.hostUri;
  if (host) {
    return `http://${host}/api`;
  }
  return 'http://localhost:8081/api';
}

export const apiClient = axios.create({
  baseURL: getBaseUrl(),
});
