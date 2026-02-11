// transfer page

import { useBalance } from '@/features/balance/hooks/use-balance';
import { RecipientCard } from '@/features/recipient/components/recipient-card/recipient-card';
import { useRecipientStore } from '@/features/recipient/store/use-recipient-store';
import { TransferForm } from '@/features/transfer/components/transfer-form/transfer-form';
import { useTransferStore } from '@/features/transfer/store/use-transfer-store';
import { getTransferDetail } from '@/features/transfer/utils/get-transfer-detail';
import { randomUUID } from 'expo-crypto';
import { useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { transferPageStyles as styles } from './transfer-page.styles';

export function TransferPage() {
  const { data: balance } = useBalance();
  const recipient = useRecipientStore((s) => s.selectedRecipient);
  const router = useRouter();
  const setTransferDetail = useTransferStore((s) => s.setTransferDetail);
  const setTransferRequest = useTransferStore((s) => s.setTransferRequest);
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets
        contentContainerStyle={styles.scrollContent}>
        {recipient && (
          <View style={styles.content}>
            <View style={styles.section}>
              <RecipientCard
                item={recipient}
                selected={false}
                variant="change"
                onPress={() => router.back()}
              />
            </View>
            <TransferForm
              recipient={recipient}
              balance={balance?.balance.amount ?? 0}
              onTransfer={async (data) => {
                const request = { ...data, idempotencyKey: randomUUID() };
                setTransferDetail(getTransferDetail(data, recipient));
                setTransferRequest(request);
                router.push('/transfer/process');
              }}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
