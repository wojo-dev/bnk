import { getInitials } from '@/features/shared/hooks/get-initials';
import { getRandomAvatarGradient } from '@/features/shared/hooks/get-random-gradient';
import { scale } from '@/tokens/scale';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, type ViewProps } from 'react-native';
import { avatarStyles as styles } from './avatar.styles';

type AvatarProps = ViewProps & {
  name: string;
  size?: number;
};

const DEFAULT_SIZE = 52;

export const Avatar = ({ name, size = DEFAULT_SIZE, style, ...props }: AvatarProps) => {
  const scaledSize = scale(size);
  const fontSize = scale(size * 0.34);
  const initials = getInitials(name);
  const gradientColors = getRandomAvatarGradient();

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
