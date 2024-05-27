// Assignment operators

let x = 10;

x += 5
x *=5

console.log(x)

// comparison operators

let y = 1;
// Relational
console. log (y > 0)
console. log (y >=1 )
console. log (y < 0)
console. log (y <= 1)
// Equality
console. log(y === 1)
console. log (y !== 1)

// Equality operators

    // Strict Equality (Type + Value)
console.log(1 === 1)

console.log('1' === 1) //this equality type is more precise and accurate

    // Lose Equality

console.log(1 == 1)
console.log('1' == 1)
console.log(true == 1) //the output will be true

     // lose equality operator doesn't care about the types matching, if the types don't match, it will convert the type of what we have on the right side to match what we have onw the left side.

// Ternary operator or Conditional operator

    // If a customer has more than 100 points,
    // they are a 'gold' customer, otherwise,
    // they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log (type);

// Logical operator

// Logical OR (II)

     // Returns TRUE if one of the operands is TRUE     

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console. log( 'Eligible', eligibleForLoan);
// NOT
let applicationRefused = !eligibleForLoan;
console.log( 'Application Refused' , applicationRefused)

// Logical Operators with Non-booleans

    // Falsy (false)
    // undefined
    // null
    // false
    // NaN

    // not a falsy the its truthy(true)

// let userColor = 'red';
let userColor = undefined; // currentColor is blue
let defaultColor = 'blue';
let currentColor = userColor || defaultColor; //if the user given a color we can use that color , if they don't it take default color

console.log(currentColor)

// Bitwise operator

    // 1 = 00000001
    // 2 = 00000010
    

    console.log(1 | 2); // Bitwise OR // 3 = 00000011
    console.log(1 & 2); // Bitwise AND //0 = 00000000


const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission
let message = (myPermission & readPermission) ? 'yes' : 'no'; //00000110 00000100 00000010
console.log(message);

// Operators precedence

// let z = 2 + 3 * 5;
let z = (2+3)*5
console.log('z', z);


// ...EXERCISE...Swapping variables

let a = 'red';
let b = 'blue';

let c = a

a = b
b = c

console.log(a)
console.log(b)
