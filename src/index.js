// @flow
import { pipe, chain } from 'ramda';
import { toHankakuIfMoreThan10, splitBreak, validateLength } from 'message';
import { createSlackPostMessage } from 'factory';
import { postMessage, toStringFromResult } from 'slack';
import { saveResult } from 'repository';
import { returnPromise, success, failed, getStdin } from 'system';
import { slackAPIToken, slackPostChannel, mongoDBUrl } from 'env';
import type { Message, ConsoleString } from 'type';

const execute:
  Message => Promise<ConsoleString>
= pipe(
  toHankakuIfMoreThan10,
  splitBreak(20),
  validateLength(100),
  chain(pipe(
    createSlackPostMessage(slackPostChannel),
    postMessage(slackAPIToken),
  )),
  chain(saveResult(mongoDBUrl)),
  chain(pipe(
    toStringFromResult,
    returnPromise,
  )),
);

execute(getStdin())
  .then(success).catch(failed);
