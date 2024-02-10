function middle2(req, res, next) {
  console.log("I am  Second custom middleware");
  next();
}
module.exports = middle2;
