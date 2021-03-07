const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnSpeedSec = turnsSpeed / 3600;

  const turns = Math.pow(2, disksNumber) - 1;

  const seconds = Math.floor(turns / turnSpeedSec);

  const result = { turns: turns, seconds: seconds };

  return result;
};
