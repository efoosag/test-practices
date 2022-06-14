const stringCheck = {
  length: (str) => str.length,
  range: (str) => {
    if (str.length === 1 && str.length < 10) {
      return true;
    }
    return 'Out of Range';
  },
};

module.exports = stringCheck;
