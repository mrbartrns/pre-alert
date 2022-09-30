import { useCallback, useEffect, useRef } from 'react';

function useIntervalFn<T extends unknown[]>(
  cb: (...args: T) => unknown,
  ms: number,
) {
  const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);

  const interval = useCallback(
    (...args: T) => {
      intervalId.current = setInterval(() => {
        cb(...args);
      }, ms);
    },
    [cb, ms],
  );

  const clear = useCallback(() => {
    if (intervalId.current) clearInterval(intervalId.current);
  }, []);

  useEffect(() => clear, [clear]);

  return { interval, clear };
}

export default useIntervalFn;
