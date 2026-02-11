import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const baseWidth = 375;
export const scale = (size: number) => (width / baseWidth) * size;
