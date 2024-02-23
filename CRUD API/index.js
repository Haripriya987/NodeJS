const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productmodel.js");
const productRoute = require("./routes/productroute.js");

//middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

//DB connect
mongoose
  .connect("mongodb://127.0.0.1/DemoAPIDB")
  .then(() => console.log("Connection is successful to DB"))
  .catch((err) => console.error("Couldn't connect to mongodb", err));

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

console.log("Hello world");
app.listen(3000, () => console.log("server is running"));
