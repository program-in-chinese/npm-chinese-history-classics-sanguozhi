var assert = require('assert');
var 演示 = require("../入口")

describe('魏书内容', function() {
  describe('', function() {
    it('目录', function() {
      assert.strictEqual(演示.魏书目录().length, 30);
    });
    it('段落数', function() {
      assert.strictEqual(演示.魏书按卷内容()[演示.魏书目录()[0]].length, 153);
    });
  });
});

describe('蜀书内容', function() {
  describe('', function() {
    it('目录', function() {
      assert.strictEqual(演示.蜀书目录().length, 15);
    });
    it('段落数', function() {
      assert.strictEqual(演示.蜀书按卷内容()[演示.蜀书目录()[0]].length, 9);
    });
    it('段落内容', function() {
      assert.strictEqual(演示.蜀书按卷内容()[演示.蜀书目录()[0]][4],
      '焉徙治成都，既痛其子，又感祅灾，兴平元年，痈疽发背而卒。州大吏赵韪等贪璋温仁，共上璋为益州刺史，诏书因以为监军使者，领益州牧，以韪为征东中郎将，率众击刘表。');
    });
  });
});
