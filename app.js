const express = require("express");
const app = express();

const employeesRoutes = require("./src/routes/Employess.Routes")
app.use(employeesRoutes);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server started at PORT ${PORT}`)
});