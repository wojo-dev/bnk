// components/section-title.tsx
import { Text, TouchableOpacity, View } from 'react-native';
import { sectionTitleStyles as styles } from './section-title.styles';
import { SectionTitleProps } from './section-title.types';

export const SectionTitle = ({
  title,
  actionLabel,
  onAction,
  style,
  ...props
}: SectionTitleProps) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <Text style={styles.title}>{title}</Text>
      {actionLabel && (
        <TouchableOpacity onPress={onAction} hitSlop={8}>
          <Text style={styles.action}>{actionLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
