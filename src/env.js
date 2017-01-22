// @flow
require('dotenv').config({ silent: true });

const {
  SLACK_API_TOKEN,
  SLACK_POST_CHANNEL,
  MONGODB_URL,
} = process.env;

export const slackAPIToken = SLACK_API_TOKEN || '';
export const slackPostChannel = SLACK_POST_CHANNEL || '';
export const mongoDBUrl = MONGODB_URL || '';
