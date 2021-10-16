class RandomNumberService {
  static generate(max) {
    const result = Math.floor(Math.random() * max); // +1
    return result + 1;
  }

  static generateYear(min, max) {
    // min = Math.ceil(min);
    const minValue = Math.ceil(min);
    // max = Math.floor(max);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  }

  static generateNotRepition(max) {
    const random = [];
    // no-plusplus
    for (let i = 0; i < max; i += 1) {
      const temp = Math.floor(Math.random() * max) + 1;
      if (random.indexOf(temp) === -1) {
        random.push(temp);
      } else {
        i -= 1;
      }
    }
    // eslint-disable-next-line no-console
    console.log(random);
    return random;
  }

  static validateDuplicated(arrayGenerate) {
    return new Set(arrayGenerate).size !== arrayGenerate.length;
  }
}

module.exports = { RandomNumberService };
