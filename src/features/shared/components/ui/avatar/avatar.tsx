import { getGradient } from '@/hooks/get-gradient';
import { getInitials } from '@/hooks/get-initials';
import { scale } from '@/tokens/scale';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { avatarStyles as styles } from './avatar.styles';
import { AvatarProps } from './avatar.types';

const DEFAULT_SIZE = 52;

export const Avatar = ({ name, size = DEFAULT_SIZE, style, ...props }: AvatarProps) => {
  const scaledSize = scale(size);
  const fontSize = scale(size * 0.34);
  const initials = getInitials(name);
  const gradientColors = getGradient(name);

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        styles.container,
        {
          width: scaledSize,
          height: scaledSize,
        },
        style,
      ]}
      accessibilityRole="image"
      accessibilityLabel={initials}
      {...props}>
      <Text style={[styles.initials, { fontSize }]}>{initials}</Text>
    </LinearGradient>
  );
};
