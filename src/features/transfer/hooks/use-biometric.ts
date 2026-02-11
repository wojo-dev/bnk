import { BiometricResult, UseBiometricOptions } from '@/features/transfer/types/biometric.types';
import * as LocalAuthentication from 'expo-local-authentication';
import { useCallback, useEffect, useState } from 'react';

const CANCEL_ERRORS = new Set(['user_cancel', 'system_cancel', 'app_cancel']);

export function useBiometric({ onSuccess }: UseBiometricOptions = {}) {
  const [result, setResult] = useState<BiometricResult | null>(null);
  const [requiresPin, setRequiresPin] = useState(false);
  const [securityLevel, setSecurityLevel] = useState<LocalAuthentication.SecurityLevel>(
    LocalAuthentication.SecurityLevel.NONE,
  );

  useEffect(() => {
    LocalAuthentication.getEnrolledLevelAsync().then(setSecurityLevel);
  }, []);

  const authenticate = useCallback(async () => {
    setResult(null);
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      setRequiresPin(true);
      return setResult({ success: false, error: 'Hardware not supported', cancelled: false });
    }
    const enrolled = await LocalAuthentication.isEnrolledAsync();
    if (!enrolled) {
      setRequiresPin(true);
      return setResult({ success: false, error: 'No biometrics enrolled', cancelled: false });
    }

    const isBiometric =
      securityLevel === LocalAuthentication.SecurityLevel.BIOMETRIC_STRONG ||
      securityLevel === LocalAuthentication.SecurityLevel.BIOMETRIC_WEAK;

    const authResult = await LocalAuthentication.authenticateAsync({
      promptMessage: isBiometric ? 'Verify with Face ID / Fingerprint' : 'Verify your identity',
      fallbackLabel: 'Use Passcode',
      disableDeviceFallback: false,
    });

    if (authResult.success) {
      setResult({ success: true, error: '', cancelled: false });
      onSuccess?.();
    } else {
      const cancelled = CANCEL_ERRORS.has(authResult.error);
      setResult({ success: false, error: authResult.error, cancelled });
    }
  }, [onSuccess, securityLevel]);

  return { result, requiresPin, securityLevel, authenticate };
}
