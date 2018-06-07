var isNumber = function(s) {
  return s === ' ' ? false : !isNaN(Number(s));
};
console.log(isNumber('2e10'));
