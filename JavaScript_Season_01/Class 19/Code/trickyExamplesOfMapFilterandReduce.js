const users = [
  { firstName: "suraj", lastName: "kumar", age: 20 },
  { firstName: "mohit", lastName: "kumar", age: 21 },
  { firstName: "mahesh", lastName: "kumar", age: 20 },
  { firstName: "rakesh", lastName: "kumar", age: 60 },
];

//? this example is for map()
// const output = users.map((x) => x.firstName + " " + x.lastName);
// console.log(output);

//? this example is for reduce()
// now here we have to find out how many users have particular age

// { 20: 2, 21: 1, 60: 1}

// reduce run this function against each of users values
// const output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {}); // so the initial value of acc here is empty object{},because there is no data present

//? Chaining map, filter and reduce
// so now our problem is to find out the first name of every user whose age is less then 30
// a power of these functions is chaining map , filter and reudce
const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output);
