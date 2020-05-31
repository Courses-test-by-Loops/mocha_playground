const { assert } = require('chai');
const { expect } = require('chai');
const Percentage = require('../lib/Percentage');

describe('Percentage', () => {
  describe('#evaluation', () => {
    it('should give an evolution', () => {
      expect(Percentage.evolution(100, 200)).be.equal(100);
      expect(Percentage.evolution(100, 150)).be.equal(50);
      assert.equal(Percentage.evolution(100, 50), -50);
    });
    it('should handle 0 evolution', () => {
      assert.equal(Percentage.evolution(0, 100), Infinity);
    });
    it('should round values', () => {
      assert.equal(Percentage.evolution(30, 100), 233.33);
    });
  });
  describe('#wait', () => {
    it('should exit', () => {
      assert.notEqual(Percentage.wait, undefined);
    });
    it('should wait', (done) => {
      Percentage.wait(300, (test) => {
        assert.equal(test, 18);
        done();
      });
    });
  });
});
