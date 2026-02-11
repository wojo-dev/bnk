import { getHalfInitials, getInitials } from './get-initials';

describe('getInitials', () => {
  it('returns first letters of first and last name', () => {
    expect(getInitials('John Doe')).toBe('JD');
  });

  it('returns first two initials for three or more names', () => {
    expect(getInitials('John Michael Doe')).toBe('JM');
  });

  it('returns a single initial for a single name', () => {
    expect(getInitials('John')).toBe('J');
  });

  it('handles lowercase names', () => {
    expect(getInitials('alice smith')).toBe('as');
  });
});

describe('getHalfInitials', () => {
  it('returns first letters of first and last name', () => {
    expect(getHalfInitials('John Doe')).toBe('John D.');
  });
});
