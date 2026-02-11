import { useBalanceStore } from '@/features/balance/store/use-balance-store';
import { getFormatPrice } from '@/utils/get-format-price';
import { gradients } from '@/tokens/colors';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text, View } from 'react-native';
import { balanceCardStyles as styles } from './balance-card.styles';
import { BalanceCardProps } from './balance-card.types';

export const BalanceCard = ({
  amount,
  currency = 'RM',
  accountType = 'Savings Account',
  accountNumber = '4821',
  style,
  ...props
}: BalanceCardProps) => {
  const { isHidden, toggle } = useBalanceStore();

  return (
    <LinearGradient
      colors={gradients.primary}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={[styles.gradient, style]}
      {...props}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <MaterialCommunityIcons
            name="credit-card-outline"
            size={20}
            color="rgba(255,255,255,0.9)"
          />
          <Text style={styles.headerLabel}>Available Balance</Text>
        </View>
        <Pressable
          style={styles.eyeButton}
          onPress={toggle}
          accessibilityLabel="Toggle balance visibility">
          <Feather name={isHidden ? 'eye-off' : 'eye'} size={20} color="#FFFFFF" />
        </Pressable>
      </View>

      <View style={styles.amountRow}>
        {isHidden ? (
          <Text style={styles.hiddenAmount}>{'••••••'}</Text>
        ) : (
          <>
            <Text style={styles.currency}>{currency}</Text>
            <Text style={styles.amount}>{getFormatPrice('', amount)}</Text>
          </>
        )}
      </View>

      <Text style={styles.accountInfo}>
        {accountType} {'\u2022\u2022\u2022\u2022'} {accountNumber}
      </Text>
    </LinearGradient>
  );
};
