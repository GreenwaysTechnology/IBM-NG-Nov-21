//arrays

let list = [1, "hello", true]
console.log(list)

//normal syntax
let numberList: number[] = [1, 2, 3, 4, 5, 6];

//generics - <type> - Array<?> - Array<number> Array<string>Array<Employee>
let numberList1: Array<number> = [1, 2, 3, 4, 5, 6];

class Employee {
    id: number;
    name: string;
}
//literal object
let empList: Array<Employee> = [
    { id: 1, name: 'subramanian' }
];

let empList1: Employee[] = [
    { id: 1, name: 'subramanian' }
];

