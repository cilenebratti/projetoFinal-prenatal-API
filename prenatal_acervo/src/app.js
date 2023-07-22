require("dotenv").config();

const express = require("express");

const cors = require("cors");

const mongoose = require("./database/dbconnect");

const prenatalRoutes = require("./routes/prenatalRoutes");

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect();

app.use("/cadastro-prenatal/prenatal", prenatalRoutes);

module.exports = app