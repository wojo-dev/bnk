// recent recipients

import { useRecentRecipients } from '@/features/home/hooks/use-recent-recipients';
import { Recipient } from '@/features/recipients/types/recipient.types';
import { getHalfInitials } from '@/features/shared/hooks/get-initials';
import { Avatar } from '@/ui/avatar/avatar';
import { FlashList } from '@shopify/flash-list';
import { Pressable, Text, View } from 'react-native';
import { styles } from './recent-recipients.styles';

export const RecentRecipients = ({ onPress }: { onPress: (item: Recipient) => void }) => {
  const { data } = useRecentRecipients();
  const recipients = data?.data?.data ?? [];

  const handlePress = (item: Recipient) => {
    onPress(item);
  };
  return (
    <View style={styles.container}>
      <FlashList
        data={recipients}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable style={styles.recipient} onPress={() => handlePress(item)}>
            <Avatar name={item.name} size={48} />
            <Text style={styles.name}>{getHalfInitials(item.name)}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
