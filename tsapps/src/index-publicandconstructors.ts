//variables are declared inside class and initalized iniside constructor
// class Employee {
//     //just declare variable
//     public id: number
//     //default is public
//     name: string
//     public isWorking: boolean;
//     //constructor args variables ; local variables
//     constructor(id: number, name: string = "foo", isWorking: boolean = false) {
//         this.id = id;
//         this.name = name;
//         this.isWorking = isWorking;
//     }
//     //instance methods
//     public calculateSalary(): number {
//         return 1000;
//     }
// }

// class Employee {
//         //just declare variable
//     public id: number
//     //default is public
//     name: string
//     public isWorking: boolean;
//     //here id ,name are constructor arg variable : local variables
//     constructor(id: number, name: string = "foo", isWorking: boolean = false) {
//         this.id = id;
//         this.name = name;
//         this.isWorking = isWorking;
//     }
//     //instance methods
//     public calculateSalary(): number {
//         return 1000;
//     }
// }

//converting constructor local variables into instance variables:
// class Employee {
//     constructor(public id: number, public name: string = "foo", public isWorking: boolean = false) {
//         this.id = id;
//         this.name = name;
//         this.isWorking = isWorking;
//     }
//     //instance methods
//     public calculateSalary(): number {
//         return 1000;
//     }
// }

//we can remove even initalization also
class Employee {
    constructor(public id: number, public name: string = "foo", public isWorking: boolean = false) {  }
    public calculateSalary(): number {
        return 1000;
    }
}

let emp = new Employee(1, "subramanian", true);

console.log(emp.id, emp.name, emp.isWorking, emp.calculateSalary())