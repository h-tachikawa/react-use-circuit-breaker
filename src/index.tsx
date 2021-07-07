import { useCallback, useRef } from "react";

const wait = (waitMs: number) =>
    new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, waitMs);
    });

export const useCircuitBreaker = (
    countLimit: number,
    intervalMs: number,
    onReachLimit: () => void | Promise<void>,
): [() => Promise<void>] => {
  const count = useRef(0);

  const increment = () => {
    count.current += 1;
  };

  const decrement = () => {
    count.current -= 1;
  };

  const send = useCallback(async () => {
    increment();

    await wait(intervalMs);
    if (count.current >= countLimit) {
      onReachLimit();
    }

    decrement();
  }, [countLimit, intervalMs]);

  return [send];
};
