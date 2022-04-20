const ftoc = function (num) {
  // formula to convert f -> c ==> [°C] = ([°F] − 32) × 5⁄9
  // 32 => 0
  // toFixed(1) => rounds to decimal place but returns value as string
  // + => converts string to number
  // can also use Number(calculation.toFixed(1)) -- Number func
  return +((num - 32) * 5 / 9).toFixed(1);
};

const ctof = function (num) {
  // formula to convert c -> f ==> [°F] = [°C] × 9⁄5 + 32
  // 0 => 32
  return +((num * 9 / 5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
