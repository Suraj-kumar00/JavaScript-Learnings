// array.filter() function in Js

//? filter() fuction is used to filter the values of an array
//? like you want to filter some odd or evern values of values which are
//? divisible by 2 or 3 , like we get new array as an output which is filtterd based on some login

const arr = [3, 2, 4, 2, 5];

// so below are the some filters that is tried

function isOdd(x) {
  return x % 2;
}
function isEven(x) {
  return x % 2 === 0;
}

// function Greaterthen4(x) {
//   return x > 4;
// }

/*
this HOF

const output = arr.filter(function Greaterthen4(x) {
  return x > 4;
  
});

*/

// now we can write this in arrow funtion also

const output = arr.filter((x) => x > 4);

console.log(output);
