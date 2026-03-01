const employees = [
    { id: 1, name: "Raj", salary: 20300 },
    { id: 2, name: "Ram", salary: 20600 },
    { id: 3, name: "Kunal", salary: 2000 },
    { id: 4, name: "Jiyan", salary: 30000 },
]

const getAllemployess = (req, res) => {
    res.json({
        message: "Employees data fetched successfully",
        data: employees,
    })
}

const getEmployee = (req, res) => {
    const found = employees.find((emp) => emp.id == parseInt(req.params.id));
    if (found) {
        res.json({
            message: "user found",
            data: found
        })
    } else {
        res.json({
            message: "user not found"
        })
    }
}

const getEmployeesBySalary = (req,res)=>{
    const foundEmployess = employees.filter((emp)=> emp.salary >= parseInt(req.params.salary));
    if(foundEmployess){
        res.json({
            message: "users found",
            data: foundEmployess
        })
    }else{
        res.json({
            message:"users not found"
        })
    }
}

module.exports = {
    getAllemployess,
    getEmployee,
    getEmployeesBySalary
}