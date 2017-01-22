// @flow
import { MongoClient } from 'mongodb';
import type { MongoDBUrl, SlackAPIResult } from 'type';

export const saveResult:
  MongoDBUrl => SlackAPIResult => Promise<SlackAPIResult>
= url => async result => {
  const db = await MongoClient.connect(url);
  await db.collection('messages').insert({ result, created: new Date() });
  return result;
};
