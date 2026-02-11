import { TransferDetail } from '@/features/transfer/components/transfer-detail/transfer-detail';
import { useTransferStore } from '@/features/transfer/store/use-transfer-store';
import { Button } from '@/ui/button/button';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './success-page.styles';

export function SuccessPage() {
  const transferDetail = useTransferStore((s) => s.transferDetail);
  const clearTransferDetail = useTransferStore((s) => s.clearTransferDetail);

  if (!transferDetail) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.checkCircle}>
          <Feather name="check" size={48} color="#16A34A" />
        </View>

        <Text style={styles.title}>Transfer Successful!</Text>
        <Text style={styles.subtitle}>Your money is on its way</Text>

        <TransferDetail data={transferDetail} style={styles.detail} />

        <View style={styles.actionRow}>
          <Button style={styles.actionButton} title="Share" variant="secondary" />
          <Button style={styles.actionButton} title="Receipt" variant="secondary" />
        </View>

        <Button
          style={styles.backButton}
          title="Back to Home"
          variant="primary"
          onPress={() => {
            clearTransferDetail();
            router.replace('/');
          }}
        />

        <Text style={styles.transactionId}>Transaction ID: {transferDetail.reference}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
