import { SecurityLevel } from 'expo-local-authentication';
import { TransferDetailData } from '../transfer-detail/transfer-detail.type';

export type BiometricPromptProps = {
  transferDetail: TransferDetailData | null;
  securityLevel: SecurityLevel;
  onUsePinPress: () => void;
};
