const mongoose = require("mongoose");
//datas and their data type which are stored our monoose database
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  displayName: { type: String, required: true },
  Account_number: { type: Number, required: true, unique: true },
  IFSC_CODE: { type: String, required: true, unique: true },
  Name: { type: String, required: true, unique: true },
});

module.exports = User = mongoose.model("user", userSchema);
