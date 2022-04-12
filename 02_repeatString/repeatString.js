const repeatString = function (str, num) {

  let output = '';
  let err = 'ERROR';
  if (num < 0) {
    return err;
  }
  for (let i = 0; i < num; i++) {
    output += str;
  }
  return output;

};

// Do not edit below this line
module.exports = repeatString;
