const CustomError = require("../extensions/custom-error");

const repeat = (length, str, separator) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    i === length - 1 ? array.push(str) : array.push(str.concat(separator));
  }

  return array;
};

const convertToString = (val) =>  typeof str !== 'string' ? String(val) : val;

module.exports = function repeater(str, options) {
  str = convertToString(str);

  let additionArray;

  const createAddstr = () => {
    const additionRepeat = options.additionRepeatTimes
      ? options.additionRepeatTimes
      : 1;
    additionArray = repeat(
      additionRepeat,
      convertToString(options.addition),
      options.additionSeparator
        ? convertToString(options.additionSeparator)
        : "|"
    );

    return additionArray.join("");
  };

  const strRepeat = options.repeatTimes ? options.repeatTimes : 1;
  const strArray = repeat(
    strRepeat,
    options.addition !== undefined ? str.concat(createAddstr()) : str,
    options.separator ? convertToString(options.separator) : "+"
  );

  return strArray.join("");
};
  