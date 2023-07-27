require("dotenv").config();

const express = require("express");

const cors = require("cors");

const mongoose = require("./database/dbconnect");

const prenatalRoutes = require("./routes/prenatalRoutes");

const cadastroRoute = require("./routes/cadastroRoute");

const app = express();

const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('../swagger/swagger_output.json');

app.use(express.json());

app.use(cors());

mongoose.connect();

app.use("/cadastro-prenatal/prenatal", prenatalRoutes);

app.use("/cadastro-prenatal", cadastroRoute);

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app