// use biometric hook

import * as LocalAuthentication from 'expo-local-authentication';
import { useCallback, useEffect, useState } from 'react';

export function useBiometric() {
  const [result, setResult] = useState<{ success: boolean; error: string } | null>(null);

  const authenticate = useCallback(async () => {
    setResult(null);
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) return setResult({ success: false, error: 'Hardware not supported' });
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) return setResult({ success: false, error: 'No biometrics enrolled' });
    const authResult = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate with Face ID / Fingerprint',
      fallbackLabel: 'Use Passcode',
      disableDeviceFallback: false,
    });
    setResult({
      success: authResult.success,
      error: authResult.success ? '' : authResult.error,
    });
  }, []);

  useEffect(() => {
    authenticate();
  }, [authenticate]);

  return { result, retry: authenticate };
}
