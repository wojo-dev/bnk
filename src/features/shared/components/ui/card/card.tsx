// components/card.tsx
import { Text, View } from 'react-native';
import { cardStyles as styles, variantStyle } from './card.styles';
import { CardProps } from './card.types';

export const Card = ({
  variant = 'default',
  title,
  description,
  header,
  footer,
  children,
  style,
  ...props
}: CardProps) => {
  return (
    <View style={[styles.base, variantStyle(variant), style]} {...props}>
      {header && <View style={styles.header}>{header}</View>}
      {title && <Text style={styles.title}>{title}</Text>}
      {description && <Text style={styles.description}>{description}</Text>}
      {children}
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};
