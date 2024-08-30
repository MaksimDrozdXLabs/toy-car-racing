import {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';

const useDebounce = <T>(
  initialValue: T,
  delay: number,
): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(state);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [state, delay]);

  return [debouncedValue, setState];
};

export default useDebounce;
