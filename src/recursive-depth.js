const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(arr) {
    this.arr = arr; // bind incoming array
  }

  calculateDepth(arr) {
    const self = this; // we got ref to our obj

    // if present array is array and it has something inside
    // then we return 1 + we map inside each element to chek
    // if it is also an array and return recursive check of such array element
    // if it is just an array (has nothing inside) we return + 1
    // otherwise return zero
    return Array.isArray(arr) && arr.length
      ? 1 + Math.max(...arr.map((e) => self.calculateDepth(e)))
      : Array.isArray(arr) && !arr.length
      ? +1
      : 0;    
  }
};
