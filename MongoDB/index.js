const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1/testDataBase")
  .then(() => console.log("Connection is Successful"))
  .catch((err) => console.error("Could't connect to DB", err));

//Schema (as class)
const courseSchema = new mongoose.Schema({
  name: String,
  creator: String,
  publishedDate: { type: Date, default: Date.now },
  isPublished: Boolean,
});
const Course = mongoose.model("Course", courseSchema); //class

async function createCourse() {
  //classes and objects
  //car ==>BMW

  const course = new Course({
    name: "Java",
    creator: "Hari Priya",
    isPublished: false,
  });

  //It will save in DB
  const result = await course.save(); //It is async method

  console.log(result);
}

async function getCourses() {
  const courses = Course.find({ creator: "Hari Priya" });
  console.log(courses);
}
getCourses();
// createCourse();
