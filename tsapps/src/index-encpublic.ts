//Encapsulation : private,public,protected

//explicit public ;

class Employee {
    public id: number
    public firstName: string
    public lastName: string
    public salary: number
    //hardcoded initalization: constructor
    constructor(id: number = 1, firstName: string = "", lastName: string = "", salary: number = 0) {
        this.id = id;
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
    }

    //instance methods
    public calculateSalary(amount: number = 0): number {
        return this.salary * amount;
    }

}

let emp = new Employee(90,'Subramanian','Murugan',10000);
console.log(emp.id,emp.firstName,emp.lastName,emp.calculateSalary(11))