// use biometric hook

import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';

export function useBiometric() {
  const [result, setResult] = useState<{ success: boolean; error: string } | null>(null);
  useEffect(() => {
    const checkBiometric = async () => {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (!hasHardware) return setResult({ success: false, error: 'Hardware not supported' });
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (!isEnrolled) return setResult({ success: false, error: 'No biometrics enrolled' });
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate with Face ID / Fingerprint',
        fallbackLabel: 'Use Passcode',
        disableDeviceFallback: false, // Set to true if you want to FORBID PIN fallback
      });
      setResult({
        success: result.success,
        error: result.success ? '' : result.error,
      });
    };
    checkBiometric();
  }, []);
  return result;
}
