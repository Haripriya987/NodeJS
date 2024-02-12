const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();

function rateLimitSpecifier() {
  const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100,
    message: "Too Many Requests",
  });
  return (req, res, next) => {
    limiter(req, res, (err) => {
      if (err) {
        return res.status(429);
      }
      next();
    });
  };
}

app.use(rateLimitSpecifier);

app.get("/", (req, res) => {
  res.send("Limited Requests only!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
