import { colors } from '@/features/shared/styles/tokens/colors';
export const getRandomColor = () => {
  const pastelColors = Object.values(colors.avatar);
  return colors.avatar[
    pastelColors[Math.floor(Math.random() * pastelColors.length)] as keyof typeof colors.avatar
  ];
};
