const express = require("express");
const app = express();
require("./src/connection_and_schemas/config");
const port = 3005
const Routes = require("./src/routes/Routes");


app.use("/", Routes)


app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;