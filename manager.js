const Employee = require("./employee")

class Manager extends Employee{
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager)
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(multiplier) {
        return (this.salary + this._totalSubSalary()) * multiplier
    }

    _totalSubSalary(emps = this.employees) {
        let sum = 0;
        emps.forEach((emp) => {
            if (emp.employees === undefined) {
                return (sum+= emp.salary)
            } else {
                sum += emp.salary + emp._totalSubSalary(emp.employees)
            }
        })
        return sum
    }
}


try {
    module.exports = Manager;
} catch {
    module.exports = null
}