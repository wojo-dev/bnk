// transfer page

import { BalanceCard } from '@/features/balance/components/balance-card/balance-card';
import { useBalance } from '@/features/balance/hooks/use-balance';
import { Recipient } from '@/features/recipients/types/recipient';
import { TransferForm } from '@/features/transfer/components/transfer-form/transfer-form';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecipient } from '../../hooks/use-receipient';

export function TransferPage() {
  const { data: balance } = useBalance();
  const { recipientId } = useLocalSearchParams<{ recipientId: string }>();
  const { data: recipient } = useRecipient(recipientId);
  return (
    <SafeAreaView>
      <BalanceCard amount={balance?.data.balance.amount ?? 0} />
      <TransferForm recipient={recipient as Recipient} />
    </SafeAreaView>
  );
}
