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
}

let emp = null;
//traditional way of accessing object properties by checking null
// if(emp!==null){
//     console.log(emp.id)
//     console.log(emp.firstName)
// }else{
//     console.log('no value')
// }

//console.log(emp.id)
// emp = new Employee()
console.log(emp?.id) //safe navigation operator

//replace with alternate value incase undefined using tenary operator
console.log(emp?.id ? emp.id : 10)

//elvish operator
//if emp is null, replace with empty object
console.log('fallback ', emp ?? {})

//elvish notation to replace default values or fallbacks
console.log(emp?.id ?? 0);

function bar() {
    // let emp = new Employee(1000);
    let emp = null;
    return emp;
}
function fallback() {
    return 'Fallback'
}
console.log(bar()?.id ?? fallback())

function printEmployee(emp) {
    // if (emp !== null) {
    //     console.log(emp.name);
    // }
    console.log(emp?.id ?? fallback())
}







