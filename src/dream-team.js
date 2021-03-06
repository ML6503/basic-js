const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 
  return !Array.isArray(members) ? false : members
  .filter((m) => typeof m === "string")
  .map((n) => n.trim().toUpperCase().split("")[0]).sort().join('');  
};