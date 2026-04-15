const mongoose = require("mongoose");
const users = require("../data/data.js");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50, 
  },
  likedMovies: Array,
});

const User = mongoose.model("User", userSchema);

User.insertMany(users)
  .then(() => console.log("Data inserted successfully"))
  .catch((err) => console.log(err));

module.exports = User;
