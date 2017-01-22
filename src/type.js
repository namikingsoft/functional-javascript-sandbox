// @flow

export type Message = string;
export type EveryCount = number;
export type MaxLength = number;
export type MongoDBUrl = string;
export type SlackChannel = string;
export type SlackAPIToken = string;
export type SlackAPIMethod =
  'chat.postMessage'
| 'channels.list'
;
export type SlackPostMessage = {
  channel: SlackChannel,
  text: Message,
};
export type SlackAPIEndpoint = string;
export type SlackAPIResult = Object;
export type ConsoleString = string;
