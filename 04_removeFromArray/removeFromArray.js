const removeFromArray = function (arr = [], ...removeThis) {
  return arr.filter(el => !removeThis.includes(el))
};

// Do not edit below this line
module.exports = removeFromArray;
