import { useEffect } from 'react';
import useIntervalFn from './useIntervalFn';

function useInterval(cb: () => unknown, ms: number) {
  const { interval, clear } = useIntervalFn(cb, ms);

  useEffect(() => {
    interval();

    return () => {
      clear();
    };
  }, [cb, clear, interval]);
}

export default useInterval;
