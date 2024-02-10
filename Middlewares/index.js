const express = require("express");

const morgan = require("morgan");

const myMiddle = require("./middleware/middle");
const myMiddle2 = require("./middleware/middle2");

const app = express();
///get,post,put,delete
//get method is used to access data from resource
//Middle ware means a piece of code that connects one http req pass in to another http req

app.use(express.json());

app.use(myMiddle);

app.use(myMiddle2);
app.use(morgan("tiny"));
//morgan is used to keep log of requests

let courses = [
  { id: 1, name: "JS" },
  { id: 2, name: "Java" },
  { id: 3, name: "Python" },
];

//get request for read operations
//post request for create operations
//put method for to update already existing entries.
//Delete method used to delete entries

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/about", (req, res) => {
  res.send("we create impact");
});

app.get("/contact", (req, res) => {
  res.send("Drop your queries in email");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.put("/courses/:id", (req, res) => {
  let course = courses.find((course) => course.name === req.params.coursename);
  if (!course)
    res.status(404).send("The course you are looking for does not exist");

  course.name = req.body.name;
  res.send(course);
});
//Only one delete method should exist in one route

// app.delete("/courses/:coursename", (req, res) => {
//   let updatedCourses = courses.filter(
//     (course) => course.name != req.params.coursename
//   );
//   courses = updatedCourses;
//   res.send(courses);
// });

app.delete("/courses/:id", (req, res) => {
  let course = courses.find((course) => course.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course you are looking does not exist");
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});
app.post("/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});
//Route Parameters
app.get("/courses/:coursename", (req, res) => {
  console.log(req.params.coursename);
  let course = courses.find((course) => course.name === req.params.coursename);
  //res.send(req.params.id);

  if (!course)
    res.status(404).send("The course you are looking for does not exist");
  else res.send(course);
});

//Environment variable
const port = process.eventNames.PORT || 3000;

app.listen(port, () => console.log(`Port is running  on ${port}`));
