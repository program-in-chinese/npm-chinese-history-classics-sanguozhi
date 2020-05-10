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
    it('不空', function() {
      for (卷名 of 演示.魏书目录()) {
        console.log(卷名 + ": " + 演示.魏书按卷内容()[卷名].length)
        assert.ok(演示.魏书按卷内容()[卷名].length > 0);
      }
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
    it('不空', function() {
      for (卷名 of 演示.蜀书目录()) {
        console.log(卷名 + ": " + 演示.蜀书按卷内容()[卷名].length)
        assert.ok(演示.蜀书按卷内容()[卷名].length > 0);
      }
    });
    it('段落内容', function() {
      assert.strictEqual(演示.蜀书按卷内容()[演示.蜀书目录()[0]][4],
      '焉徙治成都，既痛其子，又感祅灾，兴平元年，痈疽发背而卒。州大吏赵韪等贪璋温仁，共上璋为益州刺史，诏书因以为监军使者，领益州牧，以韪为征东中郎将，率众击刘表。');
    });
  });
});

describe('吴书内容', function() {
  describe('', function() {
    it('目录', function() {
      assert.strictEqual(演示.吴书目录().length, 20);
    });
    it('段落数', function() {
      assert.strictEqual(演示.吴书按卷内容()[演示.吴书目录()[0]].length, 21);
    });
    it('不空', function() {
      for (卷名 of 演示.吴书目录()) {
        console.log(卷名 + ": " + 演示.吴书按卷内容()[卷名].length)
        assert.ok(演示.吴书按卷内容()[卷名].length > 0);
      }
    });
    it('段落内容', function() {
      assert.strictEqual(演示.吴书按卷内容()[演示.吴书目录()[0]][0],
      '孙坚字文台，吴郡富春人，盖孙武之后也。');
    });
  });
});

describe('演示', function() {
  describe('', function() {
    it('目录', function() {
      console.log(演示.魏书目录());
    });
    it('段落内容', function() {
      console.log(演示.蜀书按卷内容()['刘二牧传']);
    });
  });
});