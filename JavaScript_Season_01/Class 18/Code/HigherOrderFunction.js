// this code follows DRY priciple
//? in interviews write code like this reusability

const radius = [1, 5, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circuference = function (radius) {
  return Math.PI * radius * radius;
};

const diameter = function (radius) {
  return Math.PI * radius * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circuference));
console.log(calculate(radius, diameter));
