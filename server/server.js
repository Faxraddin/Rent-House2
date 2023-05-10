const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const UserRouter = require("./routes/user.js");

//App config
const app = express();
dotenv.config();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
mongoose.set("strictQuery", false);
//Routes
app.use("/", UserRouter);

const PORT = process.env.PORT || 8000;
const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connection Succeeded."))
  .catch((err) => console.log("Error in DB connection: " + err));

app.listen(PORT, () =>
  console.log(`Listening on http://localhost:${PORT}/allUsers`)
);
