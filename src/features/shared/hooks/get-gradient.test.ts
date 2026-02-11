import { getGradient } from './get-gradient';
import { gradients } from '@/tokens/colors';

const avatarGradients = Object.entries(gradients.avatar)
  .filter(([, v]) => Array.isArray(v))
  .map(([, v]) => v);

describe('getGradient', () => {
  it('returns a tuple of two color strings', () => {
    const result = getGradient('Alice');
    expect(result).toHaveLength(2);
    expect(typeof result[0]).toBe('string');
    expect(typeof result[1]).toBe('string');
  });

  it('returns a gradient from the avatar palette', () => {
    const result = getGradient('Alice');
    expect(avatarGradients).toContainEqual(result);
  });

  it('returns the same gradient for the same input', () => {
    expect(getGradient('Bob')).toEqual(getGradient('Bob'));
  });

  it('returns different gradients for different inputs', () => {
    const results = new Set(
      ['Alice', 'Bob', 'Charlie', 'Dana', 'Eve'].map((n) => getGradient(n)[0]),
    );
    expect(results.size).toBeGreaterThan(1);
  });
});
