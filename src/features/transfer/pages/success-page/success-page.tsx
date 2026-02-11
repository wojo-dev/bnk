import { useRecipientStore } from '@/features/recipient/store/use-recipient-store';
import { ShareButton } from '@/features/transfer/components/share-button/share-button';
import { TransferDetail } from '@/features/transfer/components/transfer-detail/transfer-detail';
import { useTransferStore } from '@/features/transfer/store/use-transfer-store';
import { Button } from '@/ui/button/button';
import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './success-page.styles';

export function SuccessPage() {
  const transferDetail = useTransferStore((s) => s.transferDetail);
  const clearTransferDetail = useTransferStore((s) => s.clearTransferDetail);
  const resetRecipientStore = useRecipientStore((s) => s.reset);

  if (!transferDetail) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.checkCircleWrapper}>
          <LinearGradient
            colors={['#DCFCE7', '#BBF7D0', '#86EFAC']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.checkCircle}>
            <Feather name="check" size={48} color="#16A34A" />
          </LinearGradient>
        </View>

        <Text style={styles.title}>Transfer Successful!</Text>
        <Text style={styles.subtitle}>Your money is on its way</Text>

        <TransferDetail data={transferDetail} style={styles.detail} />

        <View style={styles.actionRow}>
          <ShareButton data={transferDetail} style={styles.actionButton} />
        </View>

        <Button
          style={styles.backButton}
          title="Back to Home"
          icon={<Ionicons name="arrow-back" size={24} color="white" />}
          variant="primary"
          onPress={() => {
            clearTransferDetail();
            resetRecipientStore();
            router.dismissAll();
            router.back();
          }}
        />

        <Text style={styles.transactionId}>Transaction ID: {transferDetail.reference}</Text>
      </ScrollView>
    </View>
  );
}
