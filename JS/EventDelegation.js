//Technique to handle events in a webpage in a better way .

// document.querySelector("#category").addEventListener("click", (e) => {
//   // console.log("Category parent clicked");
//   console.log(e.target.id);
//   if ((e.target.tagname = "LI")) {
//     window.location.href = "/" + e.target.id;
//   }
// });

//
document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

//Pros of Event Delegation Model
//1)when we are using event delegation we need to attach only one eventlistener .Memory
//is saved .
//2)It mitigates risk of performance.
//3)writing less code.
//4)DOM Manipulation

//Limitations
//1)All the events are not bubbled up .Like blur,focus,resizing
//2)If e.stopPropagation is used in child , then events are not bubbled up
