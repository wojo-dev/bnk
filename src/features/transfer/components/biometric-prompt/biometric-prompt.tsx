import { colors } from '@/tokens/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SecurityLevel } from 'expo-local-authentication';
import { Pressable, Text, View } from 'react-native';
import { biometricPromptStyles as styles } from './biometric-prompt.styles';
import { BiometricPromptProps } from './biometric-prompt.types';

function maskAccount(accountNumber: string) {
  const last4 = accountNumber.slice(-4);
  return `\u2022\u2022\u2022\u2022 ${last4}`;
}

export function BiometricPrompt({
  transferDetail,
  securityLevel,
  onUsePinPress,
}: BiometricPromptProps) {
  const isBiometric =
    securityLevel === SecurityLevel.BIOMETRIC_STRONG ||
    securityLevel === SecurityLevel.BIOMETRIC_WEAK;

  return (
    <>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name={isBiometric ? 'face-recognition' : 'shield-lock-outline'}
          size={56}
          color={colors.primary}
        />
      </View>

      <Text style={styles.heading}>
        {isBiometric ? 'Confirm with Face ID' : 'Confirm your identity'}
      </Text>
      <Text style={styles.subtitle}>Authenticate to authorize this payment securely</Text>

      {transferDetail && (
        <View style={styles.amountSection}>
          <Text style={styles.amount}>
            {transferDetail.currency} {transferDetail.amount}
          </Text>
          <Text style={styles.recipientInfo}>
            to {transferDetail.recipientName} {'\u2022'} {transferDetail.bank}{' '}
            {maskAccount(transferDetail.accountNumber)}
          </Text>
        </View>
      )}

      <Pressable style={styles.pinLink} onPress={onUsePinPress}>
        <Text style={styles.pinLinkText}>Use PIN instead</Text>
      </Pressable>
    </>
  );
}
