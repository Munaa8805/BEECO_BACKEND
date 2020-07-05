const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://1234:1234@crudbeeco-odnco.mongodb.net/beeco?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );
  console.log(
    `MongoDB connected : ${conn.connection.host}`.cyan.underline.bold
  );
};
module.exports = connectDB;
