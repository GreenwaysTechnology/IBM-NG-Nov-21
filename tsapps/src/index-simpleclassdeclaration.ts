
class Employee {
    //instance variables and methods
    id: number = 1;
    firstName: string = "Subramanian";
    lastName: string = "Murugan";
    salary: number = 100;

    constructor(){
        console.log('emp constructor')
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
console.log(emp.id, emp.firstName, emp.lastName, emp.calculateSalary(900))