//? This is the Concurrency model:A concurrency model specifies how threads in the the system collaborate to complete the tasks they are are given.

console.log("start");

setTimeout(function cb() {
  console.log("Callbakc");
}, 5000);

console.log("end");

//? now we are going to block here out main thread(Call Stack)

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("while finishes here");
