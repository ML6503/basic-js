const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(!Array.isArray(arr)) {
    throw new Error("THROWN");
}

const arrCheck = [...arr];

arrCheck.map((el, i) => {
  if (el === "--double-prev") {
    return i === 0 ? arrCheck.splice(i, 1) : arr[i - 1];
  }
  if (el === "--double-next") {    
    return i === arr.length - 1 ? arrCheck.splice(i, 1) : arr[i + 1];
  } else {
    return el;
  }
});


  const indexDN = arrCheck.indexOf("--discard-next");
  if (indexDN > -1) {
    if (indexDN === arrCheck.length - 1) {
      arrCheck.splice(indexDN, 1);
    } else {
      arrCheck.splice(indexDN, 2);
    }
  }
  const indexDP = arrCheck.indexOf("--discard-prev");

  if (indexDP > -1) {
   
    if (indexDP === 0) {
      arrCheck.splice(indexDP, 1);
    } else {
      arrCheck.splice(indexDP - 1, 2);
    }
  }

  return arrCheck;
};
