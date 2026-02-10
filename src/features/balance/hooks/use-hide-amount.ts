import { useCallback, useState } from 'react';

export function useHideAmount(initialHidden = false) {
  const [isHidden, setIsHidden] = useState(initialHidden);

  const toggle = useCallback(() => {
    setIsHidden((prev) => !prev);
  }, []);

  const mask = useCallback(
    (value: string) => {
      if (isHidden) return '••••••';
      return value;
    },
    [isHidden],
  );

  return { isHidden, toggle, mask };
}
