const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

/// load env vars
dotenv.config({ path: "./config/config.env" });
/// load models
const Model = require("./models/Model");

//// connect to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

//// read json files
const names = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8")
);

//// import into DB
const importData = async () => {
  try {
    await Model.create(names);
    console.log("Data imported ....".green.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
//// delete data from DB
const deleteData = async () => {
  try {
    await Model.deleteMany();
    console.log("Data deleted ....".red.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
} else {
  console.log("bolsongui");
}
