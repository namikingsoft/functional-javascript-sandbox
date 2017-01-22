// @flow
import assert from 'power-assert';
import { createSlackPostMessage } from 'factory';

describe('Factory', () => {
  describe('createSlackPostMessage', () => {
    it('should be create slack param for post message', () => {
      assert.deepEqual(
        createSlackPostMessage('c')('m'),
        {
          channel: 'c',
          text: 'm',
        },
      );
    });
  });
});
