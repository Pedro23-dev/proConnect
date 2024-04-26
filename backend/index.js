const express = require("express");
const cors = require("cors");
const dataBase = require("./config/mysql");
const userRoutes = require("./routes/userRoutes")
const app = express();

app.use(cors());
app.use(express.json());

// app.use("/user",userRoutes)

app.listen(process.env.PORT || 5000);
