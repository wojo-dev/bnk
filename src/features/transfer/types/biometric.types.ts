export type BiometricResult = {
  success: boolean;
  error: string;
  cancelled: boolean;
};

export type UseBiometricOptions = {
  onSuccess?: () => void;
};
