function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order for coffee received");
    } else {
      reject("Other orders rejected");
    }
  });
}

function processOrder(order) {
  return new Promise(function (resolve) {
    console.log("Order is being processed");
    resolve(`${order} and is Served`);
  });
}

// placeOrder("coffee")
//   .then(function (orderPlaced) {
//     console.log(orderPlaced);
//     let orderIsProcessed = processOrder(orderPlaced);
//     return orderIsProcessed;
//   })
//   .then(function (processedOrder) {
//     console.log(processedOrder);
//   }) //chaining of Promise
//   .catch(function (err) {
//     console.log(err);
//   }); //solution with promises

//Async Await are keywords
//async work with function
//await will basically wait for particular promisefied functions to complete its task

async function serveOrder() {
  try {
    let orderPlaced = await placeOrder("soup");
    console.log(orderPlaced);
    let processedOrder = await processOrder(orderPlaced);
    console.log(processedOrder);
  } catch (error) {
    console.log(error);
  }
}
serveOrder();
