import { haptic } from '@/lib/haptics';
import { colors } from '@/tokens/colors';
import { scale } from '@/tokens/scale';
import { Pressable, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { numpadStyles as styles } from './numpad.styles';
import { NumpadKey, NumpadProps } from './numpad.types';

const BackspaceIcon = () => (
  <Svg width={scale(28)} height={scale(28)} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9.707 5.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L6.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z"
      fill={colors.border.icon}
    />
    <Path
      d="M8 6a2 2 0 0 0-1.414.586l-4 4a2 2 0 0 0 0 2.828l4 4A2 2 0 0 0 8 18h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8Zm5.293 3.293a1 1 0 0 1 1.414 0L16 10.586l1.293-1.293a1 1 0 1 1 1.414 1.414L17.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L16 13.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L14.586 12l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      fill={colors.border.icon}
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Svg>
);

const KEYS: (NumpadKey | null)[][] = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  [null, '0', 'backspace'],
];

export const Numpad = ({ onKeyPress, disabled, style }: NumpadProps) => {
  return (
    <View style={[styles.container, style]}>
      {KEYS.flat().map((key, index) => {
        if (key === null) {
          return <View key="empty" style={styles.placeholder} />;
        }

        return (
          <Pressable
            key={key}
            style={({ pressed }) => [
              styles.key,
              pressed && styles.keyPressed,
              disabled && styles.disabled,
            ]}
            disabled={disabled}
            onPressIn={() => haptic.light()}
            onPress={() => onKeyPress(key)}
            accessibilityRole="button"
            accessibilityLabel={key === 'backspace' ? 'Delete' : key}>
            {key === 'backspace' ? <BackspaceIcon /> : <Text style={styles.keyLabel}>{key}</Text>}
          </Pressable>
        );
      })}
    </View>
  );
};
