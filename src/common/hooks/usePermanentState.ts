import React, { Dispatch, SetStateAction } from 'react';

export default function usePermanentState<T>(name: string): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = React.useState<T>(() => {
    // for server side rendering
    if (typeof window === 'undefined') {
      return undefined;
    }
    const str = window.localStorage.getItem(name);
    return str ? JSON.parse(str) : undefined;
  });

  React.useEffect(() => {
    if (value) {
      window.localStorage.setItem(name, JSON.stringify(value));
    } else {
      window.localStorage.removeItem(name);
    }
  }, [value, name]);

  return [value, setValue];
}
