
class Employee {
    id: number
    firstName: string
    lastName: string
    salary: number
    //hardcoded initalization: constructor
    constructor() {
        this.id = 1;
        this.firstName = 'Subramanian';
        this.lastName = 'Murugan'
        this.salary = 100;
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
//after object creation
emp.id =9000;
emp.firstName='foo'
emp.lastName='bar';
emp.salary=1000;
console.log(emp)
