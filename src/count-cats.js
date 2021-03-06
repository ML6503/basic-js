const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  const cat = "^^";

  const catsArr = backyard.map((arr) => arr.filter((e) => e === cat).length);


  return backyard.length === 0 ? 0 : catsArr.reduce((acc, val) => acc + val);
};
