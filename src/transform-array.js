const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(!Array.isArray(arr)) {
    throw new Error("THROWN");
}

const arrCheck = [...arr];
const indexDN = arr.indexOf("--discard-next");
const indexDP = arr.indexOf("--discard-prev");

arrCheck.map((el, i) => {
  // console.log("weare in dbl", el, arr[i]);

  if (el === "--double-prev") {
    if (i === 0) {
      // return arrCheck.splice(i, 1);
      return arrCheck[i];
    } if (arrCheck[i - 1] === undefined) {
      return (arrCheck[i] = undefined);
    }else {
      // arrCheck.splice(i, 1);
      // console.log("--double-prev", (el = arr[i - 1]));

      return (arrCheck[i] = arr[i - 1]);
    }
    // return i === 0 ? arrCheck.splice(i, 1) : arr[i - 1];
  }
  if (el === "--double-next") {
    // return i === arr.length - 1 ? arrCheck.splice(i, 1) : (el = arr[i + 1]);
    // console.log("--double-next", (el = arr[i + 1]));

    // return i === arr.length - 1 ? el : (el = arr[i + 1]);
    return (arrCheck[i] = arr[i + 1]);
  }
  if (el === "--discard-next") {
    if (indexDN === arrCheck.length - 1) {
      // return arrCheck.splice(indexDN, 1);
      return arrCheck[i];
    } else {
      // return arrCheck.splice(indexDN, 2);
      return (arrCheck[indexDN + 1] = undefined);
    }
  }
  if (el === "--discard-prev") {
    if (indexDP === 0) {
      // return arrCheck.splice(indexDP, 1);
      return arrCheck[i];
    } else {
      // return arrCheck.splice(indexDP - 1, 2);
      return (arrCheck[indexDP - 1] = undefined);
    }
  } else {
    return arrCheck[i];
  }
});

console.log("arrCheck", arrCheck);

// return arrCheck.filter((n) =>  n !== undefined).filter((n) => n !== "--discard-prev" || n !== "--discard-next" || n !== "--double-next || n !== "--double-prev" );
return arrCheck.filter((n) =>  n !== undefined).filter((n) => n !== "--discard-prev" ).filter((n) => n !== "--discard-next").filter((n) => n !== "--double-next").filter((n) => n !== "--double-prev" );
};
