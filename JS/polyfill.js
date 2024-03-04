//It is a sort of browser call back.if browser does not have bind function.
//we have to write our own bound function

let name = {
  //Here creating object called name
  firstname: "sachin",
  lastname: "Tendulkar",
};

let printName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " " + hometown + " " + state
  );
};
let printMyName = printName.bind(name, "Mumbai"); //Traditional bind method
printMyName("Maharastra");

//Our own bind function

Function.prototype.mybind = function (...args) {
  //  this->printName
  let obj = this;
  return function (...args2) {
    obj.apply(args[0], [...args.slice(1), ...args2]); //Here it will concatenate [...args.slice(1), ...args2] into a array and acess it
  };
}; //If we write like this then ech every method has aceess to mybind method

let printMyName2 = printName.mybind(name, "mumbai");
printMyName2("Maharastra");
