const sumAll = function (firstNum, lastNum) {
  /// EDGE CASES -- 
  if (typeof (firstNum && lastNum) !== 'number' || (firstNum || lastNum) < 0) {
    return 'ERROR';
  }

  if (firstNum === lastNum) {
    return firstNum + lastNum;
  }

  //// USING DO WHILE LOOP ---
  let nextNum;
  let counter = 1;
  let sum = 0;
  let finalSum;

  // while we're not at the last num
  do {
    if (firstNum > lastNum) {
      //console.log("nextNum1 - ", nextNum)
      // ex firstNum = 4 ; lastNum = 1 => firstSum = 4 + 3 + 2 + 1 = 10 (decrement)
      nextNum = firstNum - counter // 4 - 1 = 3 (1st); 4 - 2 = 2(2nd); 4 - 1 = 1(3rd);
      sum += nextNum // 1st => 0 + 3 = 3. 2nd => 3 + 2 = 5. 3rd => 5 + 1 => 6
      counter++;
    } else if (firstNum < lastNum) {
      // ex firstNum = 1 lastNum = 5 => firstSum = 1 + 2 + 3 + 4 + 5 = 15(increment)
      nextNum = firstNum + counter; // 1 + 1 = 2 (1st); 1 + 2 = 3 (2nd); 1 + 3 = 4 (3rd); 1 + 4 = 5(4th)
      sum += nextNum // 1st => 0 + 2 => 2; 2nd => 2 + 3 => 5; 3rd => 5 + 4 => 9; 4th => 9 + 5 => 14
      counter++;
    }
    finalSum = firstNum + sum; // for firstNum > lastNum (4 + 6 = 10) | for firstNum < lastNum (1 + 14 = 15)

  } while (nextNum < lastNum || nextNum > lastNum)
  return finalSum;

  //// USING WHILE LOOP ---
  /* let nextNum = 0;
  let counter = 1;
  let sum = 0;
  let finalSum;

  // while we're not at the last num
  while (nextNum < lastNum || nextNum > lastNum) {
    if (firstNum > lastNum) {
      // ex firstNum = 4 ; lastNum = 1 => firstSum = 4 + 3 + 2 + 1 = 10 (decrement)
      nextNum = firstNum - counter // 4 - 1 = 3 (1st); 4 - 2 = 2(2nd); 4 - 1 = 1(3rd);
      sum += nextNum // 1st => 0 + 3 = 3. 2nd => 3 + 2 = 5. 3rd => 5 + 1 => 6
      counter++;
    } else if (firstNum < lastNum) {
      // ex firstNum = 1 lastNum = 5 => firstSum = 1 + 2 + 3 + 4 + 5 = 15(increment)
      nextNum = firstNum + counter; // 1 + 1 = 2 (1st); 1 + 2 = 3 (2nd); 1 + 3 = 4 (3rd); 1 + 4 = 5(4th)
      sum += nextNum // 1st => 0 + 2 => 2; 2nd => 2 + 3 => 5; 3rd => 5 + 4 => 9; 4th => 9 + 5 => 14
      counter++;
    }
    finalSum = firstNum + sum; // for firstNum > lastNum (4 + 6 = 10) | for firstNum < lastNum (1 + 14 = 15)

  }
  return finalSum; */

};

// Do not edit below this line
module.exports = sumAll;
