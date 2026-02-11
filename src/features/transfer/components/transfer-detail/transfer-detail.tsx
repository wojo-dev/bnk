import { Badge } from '@/ui/badge/badge';
import { Text, View } from 'react-native';
import { transferDetailStyles as styles } from './transfer-detail.styles';
import { TransferDetailProps, TransferStatus } from './transfer-detail.type';

const statusVariant: Record<TransferStatus, 'success' | 'warning' | 'error'> = {
  completed: 'success',
  pending: 'warning',
  failed: 'error',
};

const statusLabel: Record<TransferStatus, string> = {
  completed: 'Completed',
  pending: 'Pending',
  failed: 'Failed',
};

export const TransferDetail = ({ data, style, ...props }: TransferDetailProps) => {
  const rows = [
    {
      label: 'Amount',
      value: (
        <Text style={styles.amount}>
          {data.currency} {data.amount}
        </Text>
      ),
    },
    { label: 'To', value: <Text style={styles.value}>{data.recipientName}</Text> },
    {
      label: 'Bank',
      value: (
        <Text style={styles.value}>
          {data.bank} {data.accountNumber}
        </Text>
      ),
    },
    { label: 'Date & Time', value: <Text style={styles.value}>{data.dateTime}</Text> },
    { label: 'Reference', value: <Text style={styles.value}>{data.reference}</Text> },
    ...(data.note ? [{ label: 'Note', value: <Text style={styles.value}>{data.note}</Text> }] : []),
    {
      label: 'Status',
      value: <Badge title={statusLabel[data.status]} variant={statusVariant[data.status]} />,
    },
  ];

  return (
    <View style={[styles.card, style]} {...props}>
      {rows.map((row, index) => (
        <View key={row.label}>
          <View style={styles.row}>
            <Text style={styles.label}>{row.label}</Text>
            {row.value}
          </View>
          {index < rows.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
};
