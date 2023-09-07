/*
? Deep Dive into Promises
* so Promise object is an empty object with some data field or something no it is more than that
* let's see Promise object in Browser
*/

//* fetch() function is basically an API given by browser to us to make external calls

const GitHub_API = "https://api.github.com/users/Suraj-kumar00";

//* this fetch() function returns us a promise
const user = fetch(GitHub_API); //* remember it's async operation - it'll take some to time to execute

console.log(user);

//* Now what if we have attacked some callback to it:

user.then(function (data) {
  console.log(data);
});

//? As we understood Promises so far

/*
* So Let's see What is a Primise when you asked in the interview:
? A "Promise" is and object representing the eventual completion or failure of and asynchornous operation.

and this is more technical, precise and beautiful answer evern to define what promise is.
*/
