import { getFormatPrice } from './get-format-price';

describe('getFormatPrice', () => {
  it('formats a whole number with two decimal places', () => {
    expect(getFormatPrice('MYR', 1000)).toBe('MYR 1,000.00');
  });

  it('formats a decimal amount', () => {
    expect(getFormatPrice('USD', 49.5)).toBe('USD 49.50');
  });

  it('uses absolute value for negative amounts', () => {
    expect(getFormatPrice('MYR', -250)).toBe('MYR 250.00');
  });

  it('formats zero', () => {
    expect(getFormatPrice('USD', 0)).toBe('USD 0.00');
  });

  it('formats large amounts with commas', () => {
    expect(getFormatPrice('MYR', 1234567.89)).toBe('MYR 1,234,567.89');
  });
});
