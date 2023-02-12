const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoute = require("./controllers/auth");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  //   { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute.router);

const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
  console.log(`Server port: ${PORT}`);
});
