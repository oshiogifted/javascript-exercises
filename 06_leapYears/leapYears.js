const leapYears = function (isLeapYear) {
  const FOUR = 4;
  const ONEHUNDRED = 100;
  const FOURHUNDRED = 400;
  /* 
  NOTE: the below will not work for 1996 
  remember order of operations
  1996 % FOUR = 0 
  1996 % ONEHUNDRED = 96
  1996 % FOURHUNDRED = 396
  0 && 96 = 0 
  0 === 0 => true
  Bracket comes first, then remainder, then since we're in bracket, logical AND, then strict equality
  IN THIS ORDER --> () => % => && => ===
  if ((isLeapYear % FOUR && isLeapYear % ONEHUNDRED) === 0 && (isLeapYear % FOURHUNDRED !== 0)) {
    console.log('false');
    console.log('this one?');
  } 
 */
  if (isLeapYear % FOUR === 0 && isLeapYear % ONEHUNDRED === 0 && isLeapYear % FOURHUNDRED !== 0) {
    return false;
  } else if ((isLeapYear % ONEHUNDRED && isLeapYear % FOURHUNDRED) === 0) {
    return true;
  } else if (isLeapYear % FOUR === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
