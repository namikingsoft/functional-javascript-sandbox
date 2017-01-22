// @flow
import type { Message, SlackChannel, SlackPostMessage } from 'type';

export const createSlackPostMessage:
  SlackChannel => Message => SlackPostMessage
= channel => text => ({ channel, text });
