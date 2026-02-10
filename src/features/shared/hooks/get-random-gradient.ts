import { gradients } from '@/features/shared/styles/tokens/colors';
export const getRandomAvatarGradient = (): readonly [string, string] => {
  const avatarGradients = Object.values(gradients.avatar);
  return avatarGradients[Math.floor(Math.random() * avatarGradients.length)];
};
