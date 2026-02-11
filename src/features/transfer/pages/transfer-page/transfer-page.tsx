// transfer page

import { BalanceCard } from '@/features/balance/components/balance-card/balance-card';
import { useBalance } from '@/features/balance/hooks/use-balance';
import { RecipientCard } from '@/features/recipients/components/recipient-card/recipient-card';
import { Recipient } from '@/features/recipients/types/recipient';
import { TransferForm } from '@/features/transfer/components/transfer-form/transfer-form';
import { useTransfer } from '@/features/transfer/hooks/use-transfer';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecipient } from '../../hooks/use-receipient';

export function TransferPage() {
  const { data: balance } = useBalance();
  const { recipientId } = useLocalSearchParams<{ recipientId: string }>();
  const { data: recipient } = useRecipient(recipientId);
  const router = useRouter();
  const { mutateAsync } = useTransfer();
  return (
    <SafeAreaView>
      <BalanceCard amount={balance?.data.balance.amount ?? 0} />
      {recipient && (
        <>
          <RecipientCard
            item={recipient as Recipient}
            selected={false}
            variant="change"
            onPress={() => router.back()}
          />
          <TransferForm
            recipient={recipient as Recipient}
            balance={balance?.data.balance.amount ?? 0}
            onTransfer={async (data) => {
              await mutateAsync(data);
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
}
