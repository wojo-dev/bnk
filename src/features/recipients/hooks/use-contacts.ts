import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export function useContacts() {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [permissions, setPermissions] = useState<Contacts.PermissionStatus | null>(null);

  const fetchContacts = async () => {
    try {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Emails],
      });
      setContacts(data);
    } catch (e: unknown) {
      Alert.alert('Failed to fetch contacts: ', String(e));
      setContacts([]);
      setPermissions(null);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.getPermissionsAsync();
      setPermissions(status);
      if (status === 'granted') {
        await fetchContacts();
      }
    })();
  }, []);

  const requestPermissions = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    setPermissions(status);
    if (status === 'granted') {
      await fetchContacts();
    }
  };

  return {
    hasPermissions: permissions === 'granted',
    requestPermissions,
    contacts,
    permissions,
  };
}
