// profile header

import { Avatar } from '@/features/shared/components/ui/avatar/avatar';
import { Button, View } from 'react-native';
import { styles } from './profile-header.styles';

export const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Avatar name="John Doe" />
      </View>
      <View style={styles.right}>
        <Button title="Logout" onPress={() => {}} />
      </View>
    </View>
  );
};
