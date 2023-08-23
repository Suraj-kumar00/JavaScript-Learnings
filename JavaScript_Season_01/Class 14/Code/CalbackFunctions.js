//* What is a callback function in js

//? here first thing heppens is registering , here js won't wait for setTimeout to finish over here for 5000ms to expire

/*
setTimeout(() => {
  console.log("timer"); //* so below functions will executed and till now this 5000ms will expire and then it will print this console log
}, 5000);

function x(y) {
  //* fist it'll console of "x"
  console.log("x");
  y(); //* here we call y() it'll print "x" and it'll print y() and it just go on and on
}
x(function y() {
  console.log("y");
});
*/

//? so the output is:
//? x y and timer

//*------------------------------------------------------------------------

//* Closures demo with event listers
function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("button is clicked", ++count);
  });
}
attachEventListeners();

//* Garbage Collection & removeEventListeners
/*
* so the above program is not freeing the memory , eventListeners are 
* very heavy, and we should remove eventlisteners when we're not using
* them and suppose our page has hundreds and thousand or button then our
* page is going to slow because of these  so many closures sitting in our
* memory, so the good the practice is to remove these, whem we remvoe these 
* eventlisteners then all the variables which were held by these closures 
* will be garbage collected


*/
