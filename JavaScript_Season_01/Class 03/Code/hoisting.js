/* the below code will not show any error and this is "HOISTING IN JAVASCRIPT" that 
means you can use functions and variables even before you have initialized it or even 
before you have put some value in it and this is possible in only JavaScript language 
but other languages shows error in 
this logic */

// printCourse();

// var x  - like this

console.log(printCourse);
console.log(x);
printCourse();

var x = 7; /*  when this line is going to be in execution the memory is already allocated to x which x: undefined  */

// the above var x = 7 is converts in this and the decleration part which var x; moves at the first line of code
// var x;
// x = 7;

function printCourse() {
  console.log("Namaste JavaScript");
}

/*so basically the below invokings are valid will print as expected 

printCourse();
console.log(x);

*/

/* 

-Undefined : 

-Not Defined :
*/
