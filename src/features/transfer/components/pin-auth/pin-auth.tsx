import { apiClient } from '@/features/shared/lib/api-client';
import { colors } from '@/tokens/colors';
import { Numpad } from '@/ui/numpad/numpad';
import { NumpadKey } from '@/ui/numpad/numpad.types';
import { PinInput } from '@/ui/pin-input/pin-input';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { pinAuthStyles as styles } from './pin-auth.styles';
import { PinAuthProps } from './pin-auth.types';

const MAX_PIN_ATTEMPTS = 3;
const PIN_LENGTH = 6;

export function PinAuth({ transferDetail, onSuccess }: PinAuthProps) {
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [pinAttempts, setPinAttempts] = useState(0);
  const [verifyingPin, setVerifyingPin] = useState(false);

  const handlePinComplete = useCallback(
    async (value: string) => {
      if (pinAttempts >= MAX_PIN_ATTEMPTS) return;

      setVerifyingPin(true);
      setPinError('');
      try {
        const { data } = await apiClient.post('/verify', { pin: value });
        if (data.token) {
          await SecureStore.setItemAsync('auth_token', data.token);
        }
        setPin('');
        onSuccess();
      } catch {
        const attempts = pinAttempts + 1;
        setPinAttempts(attempts);
        setPin('');
        if (attempts >= MAX_PIN_ATTEMPTS) {
          setPinError('Too many failed attempts. Please try again later.');
        } else {
          setPinError(`Incorrect PIN. ${MAX_PIN_ATTEMPTS - attempts} attempt(s) remaining.`);
        }
      } finally {
        setVerifyingPin(false);
      }
    },
    [pinAttempts, onSuccess],
  );

  const handleNumpadPress = useCallback(
    (key: NumpadKey) => {
      if (verifyingPin || pinAttempts >= MAX_PIN_ATTEMPTS) return;

      setPin((prev) => {
        if (key === 'backspace') return prev.slice(0, -1);
        if (prev.length >= PIN_LENGTH) return prev;
        const next = prev + key;
        if (next.length === PIN_LENGTH) handlePinComplete(next);
        return next;
      });
    },
    [verifyingPin, pinAttempts, handlePinComplete],
  );

  const pinDisabled = verifyingPin || pinAttempts >= MAX_PIN_ATTEMPTS;

  return (
    <>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="lock-outline" size={32} color={colors.primary} />
      </View>

      <Text style={styles.heading}>Enter your PIN</Text>
      {transferDetail && (
        <Text style={styles.subtitle}>
          Sending{' '}
          <Text style={styles.bold}>
            {transferDetail.currency} {transferDetail.amount}
          </Text>{' '}
          to {transferDetail.recipientName}
        </Text>
      )}

      <PinInput
        length={PIN_LENGTH}
        value={pin}
        secure
        disabled={pinDisabled}
        error={pinError}
        style={styles.pinInput}
      />
      <Numpad onKeyPress={handleNumpadPress} disabled={pinDisabled} style={styles.numpad} />
    </>
  );
}
