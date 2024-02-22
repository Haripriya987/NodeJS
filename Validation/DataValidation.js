//Adding required keyword for validation
const mongoose = require("mongoose");

function connectToMongoDB() {
  mongoose
    .connect("mongodb://127.0.0.1/userDataBase")
    .then(() => console.log("Connection is successful"))
    .catch((err) => console.error("Couldn't connect to DB", err));
}

connectToMongoDB();

const userDetails = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  age: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: ["BE", "BTech", "BSc", "MSc"],
  },
  isgraduated: { type: Boolean, required: true },
  issueCertificate: {
    type: Boolean,
    required: function () {
      return this.isgraduated;
    },
  },
});
const User = mongoose.model("User", userDetails);
async function createUser() {
  const addUser = new User({
    name: "Bob",
    age: 20,
    isgraduated: false,
    //    issueCertificate: true,
  });

  try {
    await addUser.validate();
    const result = await addUser.save();
    console.log(result);
  } catch (error) {
    for (field in error.error) {
      //check the log of errors
      console.log(error.errors[field]);
    }
    // console.error(error.message);
  }
  //  const result = await addUser.save();
  // console.log(result);
}
createUser();

//Inbuilt Data Validators
//minlength : 5
