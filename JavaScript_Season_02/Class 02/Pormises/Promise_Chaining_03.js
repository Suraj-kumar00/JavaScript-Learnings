//? Promise Chaining in JavaScript

// This is a Simple array with some elements
const cart = ["shoes", "pants", "kurta"];

//? This is a Callback hell

//* so here we are creating cart which first create a order then
api.createOrder(cart, function (orderId) {
  //* it'll proceed to the payment gateway

  api.proceedToPayment(orderId, function (paymentinfo) {
    //* then it'll show you order summery

    api.showOrderSummery(paymentinfo, function () {
      //* then it'll update your wallet on the basis of purchase

      api.updateWalletBalance();
    });
  });
});

//? Now we are going o resolve the above Callbakc hell with Promise Chaining

//* So this is how we write our code and our code doesn't grow horizontally but in a meaningful chained fashion

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId); //* here we return a promise from in promise when we are chaining it, so that's when we get data properly into our chain, but lots of time we forget to wirte it
  })
  .then(function (paymentinfo) {
    return showOrderSummery(paymentinfo);
  })
  .then(function (paymentinfo) {
    return updateWalletBalance(paymentinfo);
  });

//? we can write it in Arrow function alos to look more lean/ readable:
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentinfo) => showOrderSummery(paymentinfo))
  .then((paymentinfo) => updateWalletBalance(paymentinfo));
