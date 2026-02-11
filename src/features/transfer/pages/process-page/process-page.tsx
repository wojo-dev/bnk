import { useBiometric } from '@/features/biometric/hooks/use-biometric';
import { AuthFailed } from '@/features/transfer/components/auth-failed/auth-failed';
import { AuthProcessing } from '@/features/transfer/components/auth-processing/auth-processing';
import { BiometricPrompt } from '@/features/transfer/components/biometric-prompt/biometric-prompt';
import { PinAuth } from '@/features/transfer/components/pin-auth/pin-auth';
import { useTransfer } from '@/features/transfer/hooks/use-transfer';
import { useTransferStore } from '@/features/transfer/store/use-transfer-store';
import { router } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { processPageStyles as styles } from './process-page.styles';

const AUTH_TTL_MS = 30_000;

export function ProcessPage() {
  const { mutateAsync } = useTransfer();
  const transferSucceeded = useRef(false);
  const transferDetail = useTransferStore((s) => s.transferDetail);
  const clearTransferDetail = useTransferStore((s) => s.clearTransferDetail);
  const setAuthTimestamp = useTransferStore((s) => s.setAuthTimestamp);

  const handleTransfer = useCallback(async () => {
    const { transferRequest, authTimestamp } = useTransferStore.getState();
    if (!transferRequest) return;

    if (!authTimestamp || Date.now() - authTimestamp > AUTH_TTL_MS) {
      useTransferStore.setState({ authTimestamp: null });
      return;
    }

    transferSucceeded.current = true;
    await mutateAsync(transferRequest);
  }, [mutateAsync]);

  useEffect(() => {
    return () => {
      if (!transferSucceeded.current) {
        clearTransferDetail();
      }
    };
  }, [clearTransferDetail]);

  const onAuthSuccess = useCallback(() => {
    setProcessing(true);
    setAuthTimestamp(Date.now());
    handleTransfer();
  }, [setAuthTimestamp, handleTransfer]);

  const { result, requiresPin, securityLevel, ready, authenticate } = useBiometric({
    onSuccess: onAuthSuccess,
  });

  const authTriggered = useRef(false);
  useEffect(() => {
    if (ready && !authTriggered.current) {
      authTriggered.current = true;
      authenticate();
    }
  }, [ready, authenticate]);

  const [showPin, setShowPin] = useState(false);
  const [processing, setProcessing] = useState(false);

  const renderContent = () => {
    if (processing) {
      return <AuthProcessing />;
    }

    if (requiresPin || showPin) {
      return <PinAuth transferDetail={transferDetail} onSuccess={onAuthSuccess} />;
    }

    if (result && !result.success) {
      return <AuthFailed result={result} onRetry={authenticate} onGoBack={() => router.back()} />;
    }

    if (result?.success) {
      return <AuthProcessing />;
    }

    return (
      <BiometricPrompt
        transferDetail={transferDetail}
        securityLevel={securityLevel}
        onUsePinPress={() => setShowPin(true)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>{renderContent()}</View>
    </SafeAreaView>
  );
}
