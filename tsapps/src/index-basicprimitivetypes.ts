// typescript data types
//types can be declared in two ways ; explicity and type inference(implicit)
//let variable:type=literal // explicit


//explicit type declaration

let firstName: string = "Subramanian";
console.log(`Name ${firstName}`)
//type viloation
//firstName = 100; // here we initalize number ; error
firstName = "Murugan"
//number
let age: number = 41;
//boolean
let isValid: boolean = true;

//implicit type declaration which is called type inference
let lastName = "Murugan" //last Name is assigned with string,
//lastName =100;
let price = 100;
price = 9000;
//price =true;