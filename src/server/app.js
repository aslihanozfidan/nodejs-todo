const express = require("express");
const routes = require("./Routes");
const app = express();
const bodyParser = require("body-parser");
const port = 2500;
const router = new routes();
const connection = require("../database/connection");
//const mockDataSaver = require('../data/mockDataSaver')

appInitializer = () => {
  connection.getInstance();
  router.mountRoutes(app);
};

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

appInitializer();
