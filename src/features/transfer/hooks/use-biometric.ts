// use biometric hook

import * as LocalAuthentication from 'expo-local-authentication';
import { useCallback, useEffect, useState } from 'react';

export function useBiometric() {
  const [result, setResult] = useState<{ success: boolean; error: string } | null>(null);
  const [requiresPin, setRequiresPin] = useState(false);

  const authenticate = useCallback(async () => {
    setResult(null);
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      setRequiresPin(true);
      return setResult({ success: false, error: 'Hardware not supported' });
    }
    const enrolled = await LocalAuthentication.isEnrolledAsync();
    if (!enrolled) {
      setRequiresPin(true);
      return setResult({ success: false, error: 'No biometrics enrolled' });
    }
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

  return { result, requiresPin, retry: authenticate };
}
