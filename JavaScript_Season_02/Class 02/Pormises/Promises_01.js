//? topic : Promises
//* Let's say we are creating an e-commerce website like amazon

// and as we know every e-commmerce website has a cart

const cart = ["shoes", "pants", "kurta"];

//creatOrder(cart); //* so this createOrder API return OrderId

//proceedToPayment(orderId); //* now both createorder and proceedToPayment are asynchronous, we don't know how much time it'll take and they are dependend on each other

//? how did we handle this type of situation in our code using "Callbacks"
// we wrap the proceedToPatment function inside the callback function

createOrder(cart, function () {
  proceedToPayment(orderId);
});

/*
 * but we know that there is an big issue with this code it's " iversion of control"
 * here we are just blindly trusting our APIs and it never call our callback function back or it might call it twice
 * the point here is that we have given the responsibility of our code  proceedToPayment to some other API and it's
 * not in our control anymore , isn't it risky
 */

//? now let's see how can we solve this problem using "Promises"

// when we create our createOrder APi it no longer take callback function but it'll just take cart details and it'll return us a promise

const promise = createOrder(cart); // here we are capturing promise into a variable named promise, whenever this line is excuted by Js it'll return a object which is  {data : undefined} (undefined = empty value)
// so as we now this createOrder API is an async operation it'll take a time to execute but we don't know how much

//* promise is nothing but we can assume it as an empty object like { data : undefined }
//* and after createOrder executed then we get {data: orderDetails}

//? now we'll attach callback function to this promise object
//* so we'll use the function " .then() "

promise.then(
  createOrder(cart, function () {
    proceedToPayment(orderId);
  })
);

/*
 * so this code is very this piece of code is lot better than the above createorder API
 
 ? Calbacks Vs Promises
 * Because in createorder api we are blindly trusting to createorder api and we are "passing" the funtion to the other funciton  that it will do his work
 * And this the promise case, we are "attaching" the funciton to a promise object
 * and this case we have control of our program with us, that create order API will only do its job 
 * and when promise object filled with data it'll automatically call our callback function back 
 * and we have control of our progarm with us promises gives us this trust
 *
 ? Importance of promises
 * and promises gives us this gaurantee that it will call the callback function whenever there is a data inside promise object
 * and our earlier program we have lots of doubt that may be call callback function twice or thrice or it might never call it
 * promises handle it beautifully 
 * and it'll call our callback function just once only once.
 * and we have also control of our program as we are not passing our code to some external function 
 * 
 *
 */
