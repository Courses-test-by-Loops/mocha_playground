module.exports = {
  evolution(a, b) {
    if (a === 0) {
      return Infinity;
    }

    return this.round((100 * (b - a)) / a);
  },
  round(value) {
    return Math.round(100 * value) / 100;
  },
};
