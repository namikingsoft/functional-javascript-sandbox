// @flow
import assert from 'power-assert';
import { saveResult } from 'repository';

describe('Repository', () => {
  describe('saveResult', () => {
    xit('should be save message log');
    it('should be throw error when failed to connect', async () => {
      try {
        const url = 'mongodb://****:****@example.com:****/messagelog';
        const { test } = await saveResult(url)({ test: 'test' });
        assert(test === 'test');
        assert(false);
      } catch (e) {
        assert(e.name === 'Error');
      }
    });
  });
});
