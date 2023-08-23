// this is array.map() function in js,
//? map() funciton basically used to transform and arry(means to get new array out of old one)

const arr = [3, 2, 4, 2, 5];

// we can transform this array into this or so on...

// Double
// Triple
// Binary

// we can write functios like this or

function double(x) {
  return x * 2; // so x here is basically an element of an array
}
/*

like this function inside function i.e HOF
const output = arr.map(function Binary(x) {
  return x.toString(2); // this is the way you can find the binary of any array using "toString"
});

*/

// this is in arrow funciton representation of above

const output = arr.map((x) => x.toString(2));
console.log(output);
