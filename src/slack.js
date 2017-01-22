// @flow
import axios from 'axios';
import { pipe, keys, map, join } from 'ramda';
import type { AxiosPromise } from 'axios';
import type {
  SlackAPIToken,
  SlackAPIMethod,
  SlackAPIEndpoint,
  SlackAPIResult,
  SlackPostMessage,
  ConsoleString,
} from 'type';

const baseUri = 'https://slack.com/api';

const returnData:
  AxiosPromise<any> => Promise<any>
= async x => (await x).data;

export const buildEndpoint:
  SlackAPIMethod => SlackAPIToken => SlackPostMessage => SlackAPIEndpoint
= method => token => param => {
  const param2string = pipe(keys, map(x => `${x}=${encodeURI(param[x])}`), join('&'));
  return `${baseUri}/${method}?token=${token}&${param2string(param)}`;
};

export const postMessage:
  SlackAPIToken => SlackPostMessage => Promise<SlackAPIResult>
= token => pipe(
  buildEndpoint('chat.postMessage')(token),
  axios.get,
  returnData,
);

export const toStringFromResult:
  SlackAPIResult => ConsoleString
= x => `Posted at ${x.ts} to ${x.channel}`;
