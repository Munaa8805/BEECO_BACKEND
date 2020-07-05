const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const Routes = require("./routes/routes");
const cors = require("cors");
//// Load env vars
dotenv.config({ path: "./config/config.env" });
const logger = require("./middleware/logger");

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
///body parser
app.use(express.json());
///// Middlewhere
////Dev loggin middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.use(logger);
/////Mount routes
app.use(cors());
app.use("/api/v1/crud", Routes);

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
////Handel unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  ///close server
  server.close(() => process.exit(1));
});
