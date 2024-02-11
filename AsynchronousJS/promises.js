//Promise

//1)Pending state
//2)Fulfilled state (resolved)
//3)Rejected state  (reject)
//4)settled state

let myPromise = new Promise(function (resolve, reject) {
  const a = 4;
  const b = 5;
  setTimeout(() => {
    if (a === b) {
      resolve("The values are equal");
    } else {
      reject("The values are not equal");
    }
  }, 2000);
});

//pending state
//console.log(myPromise);

//Fulfilled -then method
//consuming promises
myPromise.then(function (result) {
  console.log(result);
}); //Promise is fulfilled

//Rejected means we have to handle using catch method
myPromise.catch(function (failedresult) {
  console.log(failedresult);
});

//promise is settled
