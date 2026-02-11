import { haptic } from '@/lib/haptics';
import { Avatar } from '@/ui/avatar/avatar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { recipientCardStyles as styles } from './recipient-card.styles';
import { RecipientCardProps } from './recipient-card.types';

const RadioIndicator = ({ selected }: { selected: boolean }) => (
  <View style={[styles.radio, selected && styles.radioSelected]}>
    {selected && <MaterialCommunityIcons name="check" size={18} color="#FFFFFF" />}
  </View>
);

export const RecipientCard = React.memo(function RecipientCard({
  item,
  selected,
  onPress,
  variant = 'radio',
}: RecipientCardProps) {
  return (
    <Pressable
      style={[styles.row, variant === 'radio' && selected && styles.rowSelected]}
      onPress={() => {
        haptic.light();
        onPress();
      }}
      accessibilityRole={variant === 'radio' ? 'radio' : 'button'}
      accessibilityState={variant === 'radio' ? { selected } : undefined}>
      <Avatar name={item.name} />
      <View style={styles.rowContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subtitle}>
          {item.bank} {item.maskedNumber}
        </Text>
      </View>
      {variant === 'radio' ? (
        <RadioIndicator selected={selected} />
      ) : (
        <Text style={styles.changeText}>Change</Text>
      )}
    </Pressable>
  );
});
