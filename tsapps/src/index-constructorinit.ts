
class Employee {
    id: number
    firstName: string
    lastName: string
    salary: number
    //hardcoded initalization: constructor
    constructor(id: number = 1, firstName: string = "", lastName: string = "", salary: number = 0) {
        this.id = id;
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
    }

    //instance methods
    calculateSalary(amount: number = 0): number {
        return this.salary * amount;
    }
}//instance creation
//emp is reference variable
//new is keyword
//Employee () -  constructor call
let emp = new Employee();
console.log(emp)

emp = new Employee(90,'Subramanian','Murugan',10000);
console.log(emp)