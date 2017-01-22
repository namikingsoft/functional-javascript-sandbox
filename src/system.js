// @flow
import { readFileSync } from 'fs';

export const success:
  string => void
= x => {
  console.log(`${x}\n`);
  process.exit(0);
};

export const failed:
  Error => void
= e => {
  console.error(e);
  process.exit(1);
};

export const returnPromise:
  <T>(_:T) => Promise<T>
= x => (Promise.resolve(x): any);

export const getStdin:
  void => string
= () => readFileSync('/dev/stdin', 'utf8');
