const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const database = require("./config/database");
require("dotenv").config();

app.use(bodyParser.json());

const userRoutes = require("./routes/User.routes");

// connect mongodb
database.connectToDb();

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
