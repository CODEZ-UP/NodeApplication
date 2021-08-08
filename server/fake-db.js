const Employee = require('./models/employee');

class FakeDb
{
    constructor()
    {
        this.employees = [
            {
                name:"Rajesh",
                age: 21,
                salary: 20000,
                designation: "Clerk"
            },
            {
                name: "Vivek",
                age: 26,
                salary:40000,
                designation:"Programmer"
            },
            {
                name: "Aditya",
                age: 41,
                salary:80000,
                designation:"Manager"
            }]
    }

    async cleanDb()
    {
        await Employee.remove({});
    }

    pushEmployeesToDb()
    {
        this.employees.forEach((employee) => {
            
            const newEmployee = new Employee(employee);

            newEmployee.save();

        })
    }

    seedDb()
    {
        this.cleanDb();
        this.pushEmployeesToDb();
    }

}

module.exports = FakeDb;