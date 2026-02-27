const express = require("express");
const app = express();


app.get("/test",(req,res)=>{
    console.log("test api called...");
    res.send("test api is called");
})

const user ={
    id: 101,
    name: "amit",
    age:18,
    salary: 20000,
}
app.get("/user",(req,res)=>{
    res.json({
        message:"user fetched successfully",
        data: user,
    });
});

const users = [
    {id: 1,name: "stu1",age: 23},
    {id: 2,name: "stu2",age: 24},
    {id: 3,name: "stu3",age: 24}
]

const employees = [
    {id: 1,name: "Raj",salary: 20300},
    {id: 2,name: "Ram",salary: 20600},
    {id: 3,name: "Kunal",salary: 2000},
    {id: 4,name: "Jiyan",salary: 30000},
]

app.get("/users",(req,res)=>{
    res.json({
        message:"all users",
        data: users
    })
});

app.get("/employees",(req,res)=>{
    res.json({
        message:"all employees data fetched successfully",
        data: employees
    })
})

app.get("/employees/:id",(req,res)=>{
    const found = employees.find(emp => emp.id == parseInt(req.params.id));
    if(found) {res.json({
        message:"employee data found",
        data: found
    })}
    else res.json({
        message:"employee data not found"
    })
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server started at PORT ${PORT}`)
});