// @flow
import assert from 'power-assert';
import { buildEndpoint, postMessage } from 'slack';

describe('Slack', () => {
  describe('buildEndpoint', () => {
    it('should be build endpoint of slack api', () => {
      assert(
        buildEndpoint('chat.postMessage')('xoxb')({ channel: 'c', text: 't' })
        === 'https://slack.com/api/chat.postMessage?token=xoxb&channel=c&text=t',
      );
    });
  });
  describe('postMessage', () => {
    xit('should be post message to slack');
    it('should be throw error when specify wrong token', async () => {
      try {
        const token = 'xoxb-****';
        await postMessage(token)({ channel: '****', text: 'test' });
        assert(false);
      } catch (e) {
        assert(e.name === 'AssertionError');
      }
    });
  });
});
