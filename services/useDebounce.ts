import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, delay = 1000) => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};

export { useDebounce };
