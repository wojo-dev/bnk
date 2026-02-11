// recent recipients

import { Recipient } from '@/features/recipients/types/recipient.types';
import { recipients } from '@/server/recipients.data';
import { Avatar } from '@/ui/avatar/avatar';
import { FlashList } from '@shopify/flash-list';
import { Pressable, Text, View } from 'react-native';
import { styles } from './recent-recipients.styles';

export const RecentRecipients = ({ onPress }: { onPress: (item: Recipient) => void }) => {
  const handlePress = (item: Recipient) => {
    onPress(item);
  };
  return (
    <View style={styles.container}>
      <FlashList
        data={recipients}
        horizontal={true}
        renderItem={({ item }) => (
          <Pressable style={styles.recipient} onPress={() => handlePress(item)}>
            <Avatar name={item.name} />
            <Text style={styles.name}>{item.name}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
