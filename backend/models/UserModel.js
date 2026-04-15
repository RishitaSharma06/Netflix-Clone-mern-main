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

try{
  await User.deleteMany({});
  await User.insertMany(DataTransfer,{ ordered: false });
  console.log("Sample users inserted successfully.");
} catch(error){
  console.log("Error inserting sample users:", error.message);
}
    

module.exports = User;
