// transfer success

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TransferSuccess = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Transfer successful</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
});

export default TransferSuccess;
