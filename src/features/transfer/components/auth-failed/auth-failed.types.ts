import { BiometricResult } from '@/features/biometric/types/biometric.types';

export type AuthFailedProps = {
  result: BiometricResult;
  onRetry: () => void;
  onGoBack: () => void;
};
