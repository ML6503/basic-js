const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(condition = true) {
    this.machine = condition ? "direct" : "reverse";
    this.keyNumbers = [];
  }

  convertToNumber(str) {
    return str
      .toLowerCase()
      .split("")
      .map((el) => (/[a-z]/.test(el) ? el.charCodeAt(0) - 97 : el));
  }

  getKeyNumbers(key, msgNumbers) {
    this.keyNumbers = this.convertToNumber(key);

    while (this.keyNumbers.length < msgNumbers.length) {
      this.keyNumbers = [...this.keyNumbers, ...this.keyNumbers];
    }

    for (let ind = 0; ind < msgNumbers.length; ind++) {
      if (typeof msgNumbers[ind] !== "number") {
        this.keyNumbers.splice(ind, 0, msgNumbers[ind]);
      }
    }
    return this.keyNumbers;
  }

  getCodeForLetter(m, k) {
    return (m + k) % 26;
  }

  getDecodeForLetter(c, k) {
    return (c - k + 26) % 26;
  }

  getReverse(str) {
    return str.split("").reverse().join("");
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error(`Not enought input data`);
    }
    const messageNumbers = this.convertToNumber(message);

    this.keyNumbers = this.getKeyNumbers(key, messageNumbers);

    const result = messageNumbers
      .map((n, i) => {
        if (typeof n === "number") {
          const charCode = this.getCodeForLetter(n, this.keyNumbers[i]);

          return String.fromCharCode(97 + charCode);
        } else {
          return n;
        }
      })
      .join("")
      .toUpperCase();

    return this.machine === "reverse" ? this.getReverse(result) : result;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error(`Not enought input data`);
    }
    const encryptedMessageNumbers = this.convertToNumber(encryptedMessage);

    this.keyNumbers = this.getKeyNumbers(key, encryptedMessageNumbers);

    const result = encryptedMessageNumbers
      .map((n, i) => {
        if (typeof n === "number") {
          const charCode = this.getDecodeForLetter(n, this.keyNumbers[i]);

          return String.fromCharCode(97 + charCode);
        } else {
          return n;
        }
      })
      .join("")
      .toUpperCase();

    return this.machine === "reverse" ? this.getReverse(result) : result;
  }
};

module.exports = VigenereCipheringMachine;
