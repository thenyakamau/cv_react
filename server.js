const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");

const connectDB = require('./config/database');

dotenv.config({ path: ".env" });

connectDB();
const transactions = require('./routes/Transactions');
const admin = require('./routes/Admin');
const app = express();

app.use(express.json());
app.use(fileUpload());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use('/api/v1/transactions', transactions);
app.use('/api/v1/admin', admin);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
