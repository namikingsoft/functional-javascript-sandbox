// @flow
import { pipe, chain } from 'ramda';
import { toHankakuIfMoreThan10, splitBreak, validateLength } from './message';
import { createSlackPostMessage } from './factory';
import { postMessage, toStringFromResult } from './slack';
import { saveResult } from './repository';
import { returnPromise, success, failed, getStdin } from './system';
import { slackAPIToken, slackPostChannel, mongoDBUrl } from './env';
import type { Message, ConsoleString } from './type';

const execute:
  Message => Promise<ConsoleString>
= pipe(
  // Message => Message
  toHankakuIfMoreThan10,
  // Message => Message
  splitBreak(20),
  // Message => Promise<Message>
  validateLength(100),
  // Promise<Message> => Promise<SlackAPIResult>
  chain(pipe(
    // Message => SlackPostMessage
    createSlackPostMessage(slackPostChannel),
    // SlackPostMessage => Promise<SlackAPIResult>
    postMessage(slackAPIToken),
  )),
  // Promise<SlackAPIResult> => Promise<SlackAPIResult>
  chain(
    // SlackAPIResult => Promise<SlackAPIResult>
    saveResult(mongoDBUrl),
  ),
  // Promise<SlackAPIResult> => Promise<ConsoleString>
  chain(pipe(
    // SlackAPIResult => ConsoleString
    toStringFromResult,
    // ConsoleString => Promise<ConsoleString>
    returnPromise,
  )),
);

execute(getStdin())
  .then(success).catch(failed);
