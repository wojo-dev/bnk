// transfer page

import { BalanceCard } from '@/features/balance/components/balance-card/balance-card';
import { useBalance } from '@/features/balance/hooks/use-balance';
import { RecipientCard } from '@/features/recipients/components/recipient-card/recipient-card';
import { Recipient } from '@/features/recipients/types/recipient';
import { TransferForm } from '@/features/transfer/components/transfer-form/transfer-form';
import { useTransferStore } from '@/features/transfer/store/use-transfer-store';
import { getTransferDetail } from '@/features/transfer/utils/get-transfer-detail';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecipient } from '../../hooks/use-receipient';

export function TransferPage() {
  const { data: balance } = useBalance();
  const { recipientId } = useLocalSearchParams<{ recipientId: string }>();
  const { data: recipient } = useRecipient(recipientId);
  const router = useRouter();
  const setTransferDetail = useTransferStore((s) => s.setTransferDetail);
  const setTransferRequest = useTransferStore((s) => s.setTransferRequest);
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
              setTransferDetail(getTransferDetail(data, recipient as Recipient));
              setTransferRequest(data);
              router.push('/transfer/process');
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
}
