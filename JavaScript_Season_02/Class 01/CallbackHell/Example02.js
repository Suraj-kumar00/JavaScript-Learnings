//? this is the 2nd example of "Callback Hell"

const cart = ["shoes", "pants", "kurta"];

//* so here we are creating cart which first create a order then
api.createOrder(cart, function () {
  //* it'll proceed to the payment gateway

  api.proceedToPayment(function () {
    //* then it'll show you order summery

    api.showOrderSummery(function () {
      //* then it'll update your wallet on the basis of purchase

      api.updateWallet();
    });
  });
});

/*
? so here do you see the problem with the code - yes, it's "Callback Hell"
? like when we have large number of code base and we have so many APIs here and there
? and APIs are dependent on one after other, so we end up falling into this "callback hell"

* What is the Callback Hell: so the above code example is callback hell, api inside api and some if
* statement all are mixed then make this callback hell and this type of code is unreadable and unmaintainanble
? and the this callback hell structure is also known as "Pyramid of Doom"

*/
