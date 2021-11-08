
//explicit
let firstName: string = "Subramanian"
console.log(`Name ${firstName}`)
//firstName = 100
firstName = "Foo"
//firstName =100;
console.log(`Name ${firstName}`)

//implicit
let lastName = "Murugan"
lastName = "bar"
console.log(`Name ${firstName} ${lastName}`)

//dynamic typed syntax
let myvar: any = 100;
console.log(`My var ${myvar}`)
myvar = "hello"
console.log(`My var ${myvar}`)

//implicit undefined
let price;
console.log(`Price ${price}`)
price = 100;
console.log(`Price ${price}`)
price = "200";
console.log(`Price ${price}`)

//explicit undefined
let qty:undefined;
console.log(`Qty ${qty}`)
//qty =1000;
qty = undefined
////

//const  is read only : once the variable is initalized , we cant reinitalize

let a:number =100;
a =200;
const PI:number=3.14;
//PI =9000.90;
