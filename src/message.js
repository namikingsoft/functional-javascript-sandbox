// @flow
import { pipe, splitEvery, join } from 'ramda';
import { toKatakana, toHanAscii, toHanKana } from 'jaconv';
import type { Message, EveryCount, MaxLength } from 'type';

export const toHankaku:
  Message => Message
= pipe(toKatakana, toHanAscii, toHanKana);

export const toHankakuIfMoreThan10:
  Message => Message
= x => (x.length > 10 ? toHankaku(x) : x);

export const splitBreak:
  EveryCount => Message => Message
= x => pipe(splitEvery(x), join('\n'));

export const validateLength:
  MaxLength => Message => Promise<Message>
= maxLength => message => new Promise((resolve, reject) => (
  maxLength < message.length ? reject('many text error') : resolve(message)
));
