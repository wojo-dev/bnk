import { Avatar } from '@/ui/avatar/avatar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { Recipient } from '../../types/recipient';
import { recipientListStyles as styles } from './recipient-list.styles';
import { RecipientListProps } from './recipient-list.types';

const RadioIndicator = ({ selected }: { selected: boolean }) => (
  <View style={[styles.radio, selected && styles.radioSelected]}>
    {selected && <MaterialCommunityIcons name="check" size={18} color="#FFFFFF" />}
  </View>
);

const RecipientRow = ({
  item,
  selected,
  onPress,
}: {
  item: Recipient;
  selected: boolean;
  onPress: () => void;
}) => (
  <Pressable
    style={[styles.row, selected && styles.rowSelected]}
    onPress={onPress}
    accessibilityRole="radio"
    accessibilityState={{ selected }}>
    <Avatar name={item.name} />
    <View style={styles.rowContent}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.subtitle}>
        {item.bank} {item.maskedNumber}
      </Text>
    </View>
    <RadioIndicator selected={selected} />
  </Pressable>
);

export const RecipientList = ({
  recipients,
  selectedId,
  onSelect,
  onEndReached,
  isFetchingNextPage,
  style,
  ...props
}: RecipientListProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <FlashList
        data={recipients}
        renderItem={({ item }) => (
          <RecipientRow
            item={item}
            selected={item.id === selectedId}
            onPress={() => onSelect?.(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator style={{ paddingVertical: 16 }} /> : null
        }
      />
    </View>
  );
};
