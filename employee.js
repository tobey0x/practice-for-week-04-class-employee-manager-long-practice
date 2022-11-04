class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title
    }

    checkManager() {
        if (this.manager) {
            this.manager.addEmployee(this)
        }
    }

    calculateBonus(multiplier) {
        return this.salary * multiplier
    }
}

try {
    module.exports = Employee;
} catch {
    module.exports = null
}