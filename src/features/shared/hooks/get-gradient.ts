import { gradients } from '@/tokens/colors';

// Filter out nested objects, only keep gradient tuples
const gradientKeys = (Object.keys(gradients.avatar) as (keyof typeof gradients.avatar)[]).filter(
  (key) => Array.isArray(gradients.avatar[key]),
);

export const getGradient = (str: string): readonly [string, string] => {
  const hash = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const key = gradientKeys[hash % gradientKeys.length];
  return gradients.avatar[key] as readonly [string, string];
};
