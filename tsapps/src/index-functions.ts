//functions declaration
// function  sayGreet(){
//     //logic
//     console.log('Hello , How are you?')
// }
// //function invocation
// sayGreet()

//parameters and functions
//name is arg
function sayGreet(name) {
    console.log(`Hello ${name}`)
}
//Subramanian is parameter
sayGreet('Subramanian');
//here we pass value 100, based on value type, type inference is enabled.
sayGreet(100);

function sayHello(name: string) {
    console.log(`Hello ${name}`);
}
sayHello('Subramanian');
// sayHello(1000) //error
//sayHello();

//default args 
function multiply(a: number = 0, b: number = 0) {
    return a * b;
}
console.log(multiply(10, 10))
console.log(multiply())

//optional parameters
function setValues(name: string, age?: number, city?: string) {
    console.log(`name : ${name} age:${age} city :${city}`)
}
setValues('subramanian', 18, 'coimbatore')
setValues('subramanian')

//union
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
printId(100)
printId("100")

//narrowing types
function printId1(id: number | string) {
    // console.log("Your ID is: " + id.toUpperCase());
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id.toFixed());
    }
}
printId1(100)
printId1("abcd")

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople("subramanian")
welcomePeople(['subu','ram'])
/////////////////////////////////////////////////////////////////////////////////////
//return types
function getName(): string {
    return "SUbramanian"
  //return 100
}
console.log(getName())
function getValue(): number {
    return 100
}
console.log(getValue())

function doStuff(): void {
    //return "hello"; //error
    return; //void -undefined
}
function getId(): string | number {
   //return 10 ;
   return "100"
   //return true;
}