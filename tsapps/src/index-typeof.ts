//typeof  operator and js runtime types

let firstName = "Subramanian";
let lastName = 'Murugan'
//console.log("First Name" + firstName);
console.log(`First Name ${firstName} ${lastName}`);
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

//Numbers 
let a = 100;
let b = 200;

//booleans 
let isValid = true;
let isEnabled = false;

//undefined
let price;
let qty;
console.log(`price ${price} ${qty}`);

//NaN ; it is error code , will come during numerical computation

let totalPrice = price * 1000;
console.log(`Total Price ${totalPrice}`)

//type conversion
let count = "$10" //string
let totalCount = parseInt(count) * 10;
console.log(totalCount)

//infinity
//div by 0
let newprice = 1000;
let avgPrice = newprice / 0;
//Avg Price Infinity
console.log(`Avg Price ${avgPrice}`);

//typeof operator ; tells the type of variable

console.log(`First Name Type ${typeof firstName}`) // string
console.log(`a Type ${typeof a}`) // number
console.log(`totalPrice(NaN) ${typeof totalPrice}`) // number
console.log(`avgPrice(Infinity) ${typeof avgPrice}`) // number
console.log(`isValid Type ${typeof isValid}`) // boolean
console.log(`price(undefined) ${typeof price}`) // undefined