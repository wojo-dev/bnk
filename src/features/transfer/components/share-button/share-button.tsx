import { Button } from '@/ui/button/button';
import { Ionicons } from '@expo/vector-icons';
import { Alert, Share } from 'react-native';
import { styles } from './share-button.styles';
import { ShareButtonProps } from './share-button.types';

function formatTransferMessage(data: ShareButtonProps['data']): string {
  const lines = [
    'Transfer Confirmation',
    '',
    `Amount: ${data.currency} ${data.amount}`,
    `To: ${data.recipientName}`,
    `Bank: ${data.bank} ${data.accountNumber}`,
    `Date & Time: ${data.dateTime}`,
    `Reference: ${data.reference}`,
  ];

  if (data.note) {
    lines.push(`Note: ${data.note}`);
  }

  lines.push(`Status: ${data.status.charAt(0).toUpperCase()}${data.status.slice(1)}`);

  return lines.join('\n');
}

export function ShareButton({ data, style }: ShareButtonProps) {
  const handleShare = async () => {
    try {
      await Share.share({
        message: formatTransferMessage(data),
      });
    } catch {
      Alert.alert('Error', 'Unable to share transfer details.');
    }
  };

  return (
    <Button
      icon={<Ionicons name="share-outline" size={24} color="black" />}
      style={[styles.button, style]}
      title="Share"
      variant="secondary"
      onPress={handleShare}
    />
  );
}
