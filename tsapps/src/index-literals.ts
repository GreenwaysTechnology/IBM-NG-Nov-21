// types
//strings

let firstName = "Subramanian";
let lastName = 'Murugan'
console.log("Name " + firstName + " " + lastName);
console.log("Name ", firstName, " ", lastName);
//es 6 string declaration -  template literals and interpolation
console.log(`Name ${firstName} ${lastName}`)
let title = 'IBM'
let htmlPage = `
    <html>
      <head>
       <title>
          ${title}
       </title>
     </head>
     <body>
      <h1>Welcome</h1>
     </body>
     </html>
`;
console.log(htmlPage);

///numbers

let a = 10;
let b = 20;
let c = a * b;
console.log(`A ${a} b ${b} result ${c}`)

//booleans
let isValid = true;
let isEnabled = false;

console.log(`Booleans ${isEnabled} ${isValid}`)

//undefined
//It is value, assigned to a variable, if no valid literal is assigned.
let myname;
let price;
let qty;
console.log(`My Name => ${myname}`);
console.log(`price => ${price}  Qty => ${qty}`);


//NaN 
//1.if we do computation against undefined.
// let price;
// let qty;
let totalPrice = price * qty;
console.log(`Total price => ${totalPrice}`)

//type conversion : implicit conversion
let x: any = "10";
let y: any = "20";
let z = x * y;
console.log(`Z value is ${z}`)
//type conversion : Explicity conversion
let z1 = parseInt(x) * parseInt(y);
console.log(`Z1 value is ${z1}`)

//type conversion : Explicity conversion
let z2 = +x * +y;
console.log(`Z2 value is ${z2}`)

//type conversion and NAN
let x1: any = "$10";
let z3 = x1 * 100;
console.log(`Z3 value is ${z3}`)

//Infinity: div/0

let a1 = 100;
let b1 = a1 / 0;
console.log(b1)
