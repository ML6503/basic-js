const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

// С14/С12 = 1.3*10**-12 
//0,693 / HALF_LIFE_PERIOD

// t = 1/L*Math.log(MODERN_ACTIVITY/sampleActivity)
// t - time

// L(постоянная распада) = Math.LN2 / HALF_LIFE_PERIOD

module.exports = function dateSample(sampleActivity) {

   // we get natural logarithm of 2
   const  NatLog2 = ()  =>  Math.LN2;

 // to calculate constant of radioactiveDecay (постоянная распада)
  // we divide natural logarithm of two by HALF_LIFE_PERIOD

  const radioactiveDecay = NatLog2() / HALF_LIFE_PERIOD;

    // we check that our function parameter sampleActivity is a string and has number inside only
  // in case of wrong input parameter type or inadequate activity value or absence of argument -> return false
  if (
    typeof sampleActivity !== "string" ||
    Number(sampleActivity) <= 0 ||
    (!isNaN(sampleActivity) && isNaN(parseInt(sampleActivity, 10))) ||
    (sampleActivity.split(" ").filter((e) => isNaN(e)) && isNaN(sampleActivity))
  ) {
    console.log("we are in FALSE");
    return false;
  } else {
    // in other cases we calculate sample approximate age
    // with the law of radioactive decay formula
    // and return sample age

    const age = Math.ceil(
      (1 / radioactiveDecay) *
        Math.log(MODERN_ACTIVITY / Number(sampleActivity))
    );
    
    // we check if no inadequate activity value returns negative age
    // and then return age otherwise return false
    return age > 0 ? age : false;
  }
}
  
