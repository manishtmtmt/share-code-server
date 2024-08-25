require("dotenv").config();
const cors = require("cors");
const express = require("express");

const connectDB = require("./config/db");
const codeRoutes = require("./routes/codeRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, Welcome to express app");
});

app.use("/", codeRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  try {
    await connectDB;
    console.log("Connected to Database");
  } catch (error) {
    console.log("Failed to connect with Database");
  }
  console.log(`Server is up and running at port: ${PORT}`);
});
