const express = require("express");
const dbConnection = require("./src/utils/DBConnections");
const app = express();
app.use(express.json())
dbConnection();

const employeesRoutes = require("./src/routes/EmployeesRoutes")
app.use("/employee",employeesRoutes);

const productRoutes = require("./src/routes/ProductRoutes")
app.use("/product",productRoutes)

const bookRoutes = require("./src/routes/BookRoutes");
app.use("/book",bookRoutes);

const cityRoutes = require("./src/routes/CityRoutes");
app.use("/city",cityRoutes)

const stateRoutes = require("./src/routes/StateRoutes");
app.use("/state",stateRoutes)

const categoryRoutes = require("./src/routes/CategoryRoutes");
app.use("/category",categoryRoutes)

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server started at PORT ${PORT}`)
});