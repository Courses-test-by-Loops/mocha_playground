const assert = require('assert');
const Percentage = require('./demoFiles/Percentage');

describe('Percentage', () => {
  describe('#evaluation', () => {
    it('should give an evolution', () => {
      assert.equal(Percentage.evolution(100, 200), 100);
      assert.equal(Percentage.evolution(100, 150), 50);
      assert.equal(Percentage.evolution(100, 50), -50);
    });
  });
});
