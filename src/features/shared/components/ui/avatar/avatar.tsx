import { getInitials } from '@/features/shared/hooks/get-initials';
import { getRandomColor } from '@/features/shared/hooks/get-random-color';
import { scale } from '@/features/shared/styles/tokens/scale';
import { Text, View, type ViewProps } from 'react-native';
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

  return (
    <View
      style={[
        styles.container,
        {
          width: scaledSize,
          height: scaledSize,
          backgroundColor: getRandomColor(),
        },
        style,
      ]}
      accessibilityRole="image"
      accessibilityLabel={initials}
      {...props}>
      <Text style={[styles.initials, { fontSize }]}>{initials}</Text>
    </View>
  );
};
