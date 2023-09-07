//* topic: Callback Hell

//below is simply we are printing three stings

console.log("Namaste");

//? here let's put this log into a function(callback funciton) and put this callback funtion inside a setTimeout()

setTimeout(function () {
  console.log("Javascipt");
}, 5000);

console.log("Season 2 ep 1");
