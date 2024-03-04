const cart = ["shoes", "books"];
createOrder(cart, function (orderId) {
  //async operation .So we don't know how much time it will take.It return as object
  proceedToPayment(orderId);
});
//we are passing callback functio to another function.

const promise = createOrder(cart);
//{data:undefined}
// promise is object .It will hold data of that createOrder operation completed
//{data:orderDetails}

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

//we are attaching callback function to promise object.
//Here we have control of our program with us.Here promises Guarantee as.

const GITHUB_API = "https://api.github.com/users/";

const user = fetch(GITHUB_API);
user.then(function (data) {
  console.log(data);
}); //we have attached callback to promise here

//Three states in promise
//Pending
//Fulfilled
//Rejected
//Promise objects are immutable

//fetch => api given by browser to make external api calls

//Promise
