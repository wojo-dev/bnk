import { Avatar } from '@/features/shared/components/ui/avatar/avatar';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import { styles } from './profile-header.styles';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
};

type ProfileHeaderProps = {
  name: string;
  onNotificationPress?: () => void;
  hasNotifications?: boolean;
};

export const ProfileHeader = ({
  name,
  onNotificationPress,
  hasNotifications = true,
}: ProfileHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Avatar name={name} size={48} />
        <View>
          <Text style={styles.greeting}>{getGreeting()}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <Pressable style={styles.bellContainer} onPress={onNotificationPress}>
        <Ionicons name="notifications-outline" size={22} color="#6B7280" />
        {hasNotifications && <View style={styles.notificationDot} />}
      </Pressable>
    </View>
  );
};
