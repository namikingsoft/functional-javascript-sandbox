// @flow
import assert from 'power-assert';
import {
  toHankaku,
  toHankakuIfMoreThan10,
  splitBreak,
  validateLength,
} from 'message';

describe('Message', () => {
  describe('toHankaku', () => {
    it('should be convert hankaku', () => {
      assert(toHankaku('嗚呼Ａあアｱ') === '嗚呼Aｱｱｱ');
    });
  });
  describe('toHankakuIfMoreThan10', () => {
    it('should be convert hankaku if more than 10 length string', () => {
      assert(toHankakuIfMoreThan10('嗚呼Ａあアｱ') === '嗚呼Ａあアｱ');
      assert(
        toHankakuIfMoreThan10('嗚呼Ａあアｱ呼Ａあアｱ')
        === '嗚呼Aｱｱｱ呼Aｱｱｱ',
      );
    });
  });
  describe('splitBreak', () => {
    it('should be split break specify count', () => {
      assert(splitBreak(2)('test') === 'te\nst');
    });
  });
  describe('validateLength', () => {
    it('should be validate length', async () => {
      assert(await validateLength(5)('test') === 'test');
      assert(await validateLength(4)('test') === 'test');
      assert(await validateLength(4)('ああああ') === 'ああああ');
    });
    it('should be throw error ', async () => {
      try {
        await validateLength(3)('test');
        assert(false);
      } catch (e) {
        assert(e === 'many text error');
      }
    });
  });
});
