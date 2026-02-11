import { colors } from '@/tokens/colors';
import { Button } from '@/ui/button/button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { authFailedStyles as styles } from './auth-failed.styles';
import { AuthFailedProps } from './auth-failed.types';

export function AuthFailed({ result, onRetry, onGoBack }: AuthFailedProps) {
  return (
    <>
      <Text style={styles.errorText}>
        {result.cancelled ? 'Verification cancelled' : result.error || 'Authentication failed'}
      </Text>
      {!result.cancelled && (
        <Button
          icon={
            <MaterialCommunityIcons name="refresh" size={24} color={colors.background.neutral} />
          }
          onPress={onRetry}
          title="Try Again"
        />
      )}
      <Button
        icon={<MaterialCommunityIcons name="arrow-left" size={24} color={colors.label.text} />}
        onPress={onGoBack}
        title="Go Back"
        variant="secondary"
      />
    </>
  );
}
