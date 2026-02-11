// recent recipients

import { recipients } from '@/server/recipients';
import { Avatar } from '@/ui/avatar/avatar';
import { FlashList } from '@shopify/flash-list';
import { Text, View } from 'react-native';
import { styles } from './recent-recipients.styles';

export const RecentRecipients = () => {
  return (
    <View style={styles.container}>
      <FlashList
        data={recipients}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={styles.recipient}>
            <Avatar name={item.name} />
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
