const express = require("express");
const app = express();
require("./src/connection_and_schemas/config");
const port = 3005
const customerRoutes = require("./src/routes/customerRoutes");
const inventoryRoutes = require("./src/routes/inventoryRoutes");
const orderRoutes = require("./src/routes/orderRoutes");

app.use("/", customerRoutes)
app.use("/", inventoryRoutes)
app.use("/", orderRoutes)

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;