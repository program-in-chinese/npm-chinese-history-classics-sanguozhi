var assert = require('assert');
var 演示 = require("../入口")

/*
for (卷名 of 魏书目录.三十卷) {
  console.log(卷名)
  const 卷 = require('./魏书/' + 卷名)
  console.log(卷.内容.length)
}*/
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
