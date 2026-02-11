export const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);
};

// John Doe === John D. (keep first name only)
export const getHalfInitials = (name: string) => {
  return name.split(' ').slice(0, 1) + ' ' + name.split(' ')[1]?.[0] + '.';
};
