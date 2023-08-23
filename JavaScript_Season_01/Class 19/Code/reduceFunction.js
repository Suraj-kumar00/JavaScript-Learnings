// array.reduce() funciton in js

//? reduce() function as the name suggest does not reduece anything

// sum or max
const arr = [1, 3, 5, 2, 6];

// this is the traditional way for finding the sum

function findsum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

//? Now let's find the sum using reduce() function
// so the reduce funtion is basically iterate this function over each and every element of this array

// here the function inside the reduce accepts two parameters 1st is acc(accumulator), 2nd curr()
const output = arr.reduce(function (acc, curr) {
  // so here the curr represents every element inside an array
  acc = acc + curr;
  return acc;
}, 0); // so this reduece method accept two arguments , 1st is the function and 2nd is acc value you can initialize any value to acc
// and acc is basically used to accumulate the values or accumulate the the result what we have get out of those values which are present inside the array
console.log(output);
console.log(findsum(arr));
