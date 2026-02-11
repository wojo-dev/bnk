import { Feather } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import { styles } from './contacts-permission.styles';

type ContactsPermissionProps = {
  onRequestPermission: () => void;
};

export const ContactsPermission = ({ onRequestPermission }: ContactsPermissionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="users" size={48} color="#1B4FD8" />
        <View style={styles.shieldBadge}>
          <Feather name="shield" size={16} color="#1B4FD8" />
        </View>
      </View>
      <Text style={styles.title}>Access Your Contacts</Text>
      <Text style={styles.description}>
        Allow bnk to read your contacts so you can quickly find and transfer to people you know.
      </Text>
      <Pressable style={styles.button} onPress={onRequestPermission}>
        <Text style={styles.buttonLabel}>Allow Access</Text>
      </Pressable>
    </View>
  );
};
