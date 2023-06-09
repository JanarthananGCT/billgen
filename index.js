const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");



require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
//conecting mongodb database using connection string
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://Admin:jana1729J@barcodebillgenerator.h7ziz.mongodb.net/BillFields?retryWrites=false&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);
app.use("/users", require("./routes/users"));
app.use("/todos", require("./routes/todo"));

