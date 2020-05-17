"use strict";

let fibo = {
  result: [],
};

const fibonacci = () => {
  let a = 0,
    b = 1,
    i = 0,
    value = 350,
    t;
  while (b <= value) {
    t = a;
    a = a + b;
    b = t;
    fibo.result[i] = b;
    i++;
  }
  return fibo.result;
};

const isFibonnaci = (value) => {
  return fibo.result.some((element) => element === value);
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
