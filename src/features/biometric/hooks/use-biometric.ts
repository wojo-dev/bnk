import { BiometricResult, UseBiometricOptions } from '@/features/biometric/types/biometric.types';
import * as LocalAuthentication from 'expo-local-authentication';
import { useCallback, useEffect, useRef, useState } from 'react';

const CANCEL_ERRORS = new Set(['user_cancel', 'system_cancel', 'app_cancel']);
const PIN_FALLBACK_ERRORS = new Set(['lockout', 'not_available']);

export function useBiometric({ onSuccess }: UseBiometricOptions = {}) {
  const [result, setResult] = useState<BiometricResult | null>(null);
  const [requiresPin, setRequiresPin] = useState(false);
  const [securityLevel, setSecurityLevel] = useState<LocalAuthentication.SecurityLevel>(
    LocalAuthentication.SecurityLevel.NONE,
  );
  const [ready, setReady] = useState(false);
  const onSuccessRef = useRef(onSuccess);
  onSuccessRef.current = onSuccess;

  useEffect(() => {
    LocalAuthentication.getEnrolledLevelAsync()
      .then((level) => {
        setSecurityLevel(level);
      })
      .catch(() => {})
      .finally(() => {
        setReady(true);
      });
  }, []);

  const authenticate = useCallback(async () => {
    setResult(null);
    try {
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
        fallbackLabel: 'Use PIN instead',
        disableDeviceFallback: true,
      });

      if (authResult.success) {
        setResult({ success: true, error: '', cancelled: false });
        onSuccessRef.current?.();
      } else if ((authResult.error as string) === 'missing_usage_description') {
        setRequiresPin(true);
        setResult({ success: false, error: 'Biometric not available', cancelled: false });
      } else if (PIN_FALLBACK_ERRORS.has(authResult.error)) {
        setRequiresPin(true);
        setResult({ success: false, error: authResult.error, cancelled: false });
      } else {
        const cancelled = CANCEL_ERRORS.has(authResult.error);
        setResult({
          success: false,
          error: authResult.error ?? 'Authentication failed',
          cancelled,
        });
      }
    } catch {
      setRequiresPin(true);
      setResult({ success: false, error: 'Biometric not available', cancelled: false });
    }
  }, [securityLevel]);

  return { result, requiresPin, securityLevel, ready, authenticate };
}
