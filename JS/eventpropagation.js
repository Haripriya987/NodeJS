document.querySelector("#greatParent").addEventListener(
  "click",
  () => {
    console.log("GreatParent is clicked");
  },
  false
);
document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent is clicked");
    e.stopPropagation();
  },

  true
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child is clicked");
  },
  false
);
//true means capturing . It is from top down
//False means bubbling .It is bottom up
