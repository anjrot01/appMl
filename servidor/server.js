const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express();

const routes = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/", routes);

app.listen(port, () => console.log(`Aplicación corriendo en el puerto ${port}`));
