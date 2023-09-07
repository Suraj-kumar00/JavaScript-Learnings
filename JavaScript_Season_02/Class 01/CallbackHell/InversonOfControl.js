/*
* continued with callback hell
? inversion of control is the another problem we see while usign callbacks
? and kyle sympson explained it very beautifully 
? inversion of contrion is like you lose the control of your code when we are using callbacks
 
*/

const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  api.proceedToPayment();
});

// inversion of control: this an issue because we lose the control of our program

// so watch this video of akshay to write down some important point about inversion of conrtol
