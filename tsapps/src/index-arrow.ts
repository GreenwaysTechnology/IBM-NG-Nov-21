//arrow function
//function literal ; we can store function in a variable

//es 5 style
let hai = function () {
    console.log('hai')
};
hai();

//arrow function.
hai = () => {
    console.log('hai')
};
hai();
//rules ; if function has only one line of body ; remove {}
hai = () => console.log('hai');
hai();

let add = (a: number = 0, b: number = 0): void => {
    let c = a + b;
    console.log(c);
};
add(10, 10)

add = (a: number = 0, b: number = 0): number => {
    return a + b;
};
console.log(add(10, 10));

//if no more body , we can remove {} and return statement
add = (a: number = 0, b: number = 0): number => a + b;
console.log(add(10, 10));