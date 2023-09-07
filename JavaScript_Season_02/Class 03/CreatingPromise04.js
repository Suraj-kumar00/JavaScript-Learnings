/*
?Creating a Promise, Chaining & Error Handling 
*/

const cart = ["shoes", "pants", "kurtas"];

const promise = createOrder(cart); // orderId

// remember this thing that while creating promise chaining you should return a promise from one chain down to other down to other....
promise
  .then(function (orderId) {
    //   proceedToPayment(orderId);
    console.log(orderId);
    return orderId;
  }) // i put catch here because if i put it in the last in the chain then if one promise intrrupted then other will not be executed
  .catch(function (err) {
    // here we have handled the rejection of a promise which is error handling and we should handle error gracefuly other in user's browser user wil get but he can't able to see that error
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId); // so this how we do promise chaining
  })
  .then(function (PaymentInfo) {
    console.log(PaymentInfo);
  });

// this is producer end
// createOrder take the cart items
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    // orderId

    // here we are rejectig a promise
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // logic for createOrder
    // here we are resolving a promise( success )
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  // here will be the logic
  return new Promise(function (resolve, reject) {
    resolve("Payment Succesfull");
  });
}

// function validateCart(cart) {
//   return true;
// }

// promise rejection / this is how we reject a promise
function validateCart(cart) {
  return true;
}
