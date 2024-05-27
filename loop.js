// Loop - For, While, do while, for...in, for...of

// for(initialExpression) initialize a variable

// for(let i=0) i is the shortform of index , and it is loop variable

// for(let i=0, i < 5) i<5 is a condition

// for(let i=0, i < 5, i++) i++ is a incrementExpression

for (let i = 1; i <= 5; i++){
    if (i % 2 !== 0) console.log(i)
}
for (let i = 5; i >= 1; i--){
    if (i % 2 !== 0) console.log(i)
}

// while loop

// let i = 0
// while (i <= 5) {
// if (i % 2 !== 0) console.log(i);
// i++;
// }


// do-while loop
let i = 9
do {
if (i % 2 !== 0) console.log(i);
}while(i <= 5);

// for-in

const person = {
    name: 'Mosh',
    age: 30
}
for (let key in person) console.log(key, person[key]);

const colors = ['red', 'green', 'blue']
// for (let index in colors) console.log(index, colors[index]);

// for-of

for (let color of colors) console.log(color);

// for-in iterate properties of an object
// for-of iterate values of an array


// break and continue

// let i = 0
// while (i <= 10) {
// if (i === 5) break; // stop the loop here
// }
// console. log(i);
// i++;
// }


// let i = 0
// while (i <= 10) {
// if (i % 2 === 0){
//     i++;
//     continue;
// }
// console. log(i);
// i++;
// }


// ---Exercise---

// Write a function that takes two numbers and returns the maximum of the two.

// function max(a, b){
//     return a > b ? a : b;
//     // if (a < b) 
//     // console.log(b);
//     // else 
//     // console.log(a);
// }
// max(4,7)

let a = 7;
let b = 5;

if (a < b) 
    console.log(b);
else 
    console.log(a);


let number = max(1, 2);
console.log(number);

function max(a, b) {
// if (a > b) return a;
// else return b;
return a > b ? a : b;

}

// ---Exercise 2 - Portrait or landscape

let position = isLandscape(300, 300)
console.log(position)

function isLandscape(width, height){
    // return width > height ? true : false; 
    return width > height // no explicit to write true or false
}

// ---Exercise 3 - FizzBuzz

        // Divisible by 3 => Fizz
        // Divisible by 5 => Buzz
        // Divisible by both 3 and 5 => FizzBuzz
        // Not divisible by 3 or 5 => input
        // Not a number => 'Not a number'

        const output = fizzBuzz(30);
        console.log(output);
        
        function fizzBuzz(input) {
            if (typeof input !== 'number') {
                return NaN;
            } else {
                switch (true) {
                    case (input % 3 === 0) && (input % 5 === 0): // coz if its in bottom then a number check first all conditions, if 15, 3 is also a divisor so it not go to the last condition 
                        return "FizzBuzz";
                    case input % 3 === 0:
                        return "Fizz";
                    case input % 5 === 0:
                        return "Buzz";
                    default:
                        return input;
                }
            }
        }
        
// ---Exercise 4--- 

// Speed Limit = 70 is ok
// 5 -> 1 point
// Math. floor (1.3)
// 12 points -> suspended
checkSpeed(70);

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;
        
//         if (speed >= 180)
//             console.log('License Canceled') 
//         if (speed < speedLimit + kmPerPoint)
//             console.log('ok') 
//         else{
//             let points = Math.round((speed - speedLimit) / kmPerPoint)
//             if (points >= 12)
//             console.log("Suspended")
//             else
//             console.log(`Points ${points}`)
//     }
        
// }

// Avid intentations



function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
        
        if (speed >= 180)
            console.log('License Canceled') 
        if (speed < speedLimit + kmPerPoint){
            console.log('ok');
            return;
        }
        
        let points = Math.round((speed - speedLimit) / kmPerPoint)
        if (points >= 12)
        console.log("Suspended")
        else
        console.log(`Points ${points}`)
}


// ---Exercise 5--- Odd oe Even

showNumbers(10)

function showNumbers(limit){
    for(i = 0; i <= limit; i++){
    //     if (i % 2 == 0) console.log(`${i} even`)
    // else
    // console.log(`${i} odd`)

    const message = (i % 2 == 0) ? 'EVEN' : 'ODD';
    console.log(`${i} ${message}`)
    }
}

// ---Exercise 6--- count truthy

        // undefined
        // null
        // false
        // NaN
        // Falsy

const array = [0, null, undefined, 1, 2, 3, '']
console.log(countTruthy(array));
    
    
function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value) 
        count++
    return count;
}


// ---Exercise 7---String Properties

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties (movie)
function showProperties(obj) {
    for(let key in obj)
    if (typeof obj[key] !== 'number')
    console.log(key, obj[key]);
}


// ---Exercise 8--- Sum of multiples 3 and 5


console.log(sum(115))

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

function sum(limit) {
    let sum = 0;
    
    for(let i=0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
        sum += i;

    return sum;
}

// ---Exercise 9--- Grade

const marks = [98, 89, 93, 99, 98]

// Average = 70
// 1-59: F
// 60-69:D
// 70-79:C
// 80-89:B
// 90-100:A

console.log (calculateGrade(marks)) ;

function calculateGrade(marks) {
    const average = calculateAverage(marks)
   if (average < 60) return 'Grade F';
   if (average < 70) return 'Grade D';
   if (average < 80) return 'Grade C';
   if (average < 90) return 'Grade B';
   return 'Grade A';
}


// we can use this function in anytime simply call his function name


function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}


// ---Exercise 10--- Stars

showStars (5) ;
function showStars(rows) {
    for(let row = 1; row <= rows; row++){
        let pattern = '';
            for(let i = 0; i < row; i++)
            pattern += '*'
        console.log (pattern);
    }
}


// ---Exercise 11--- show prime numbers

// Prime (whose factors are only 1 and itself)
// Composite
// Can be
// 12 = 1,2,3,4,6,12
// can be divided evenly by its factors
// 11 = 1,11
// 13 = 1,13

showPrimes(20)
function showPrimes(limit) {
    for(let number = 2; number <= limit; number++){
        if (primeCheck(number)) console.log(number)
    }
}

function primeCheck(number){
    let isPrime = true;
    for(let factor = 2; factor < number; factor++){
        if(number % factor == 0){
            isPrime = false; 
            break;
        }
    }
    return isPrime;
}

// sum of n number prime numbers

function sumPrimes(limit) {
    let sum = 0;
    for (let number = 2; number <= limit; number++) {
      let isPrime = true;
      for (let factor = 2; factor < number; factor++) {
        if (number % factor == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        sum += number;
      }
    }
    return sum;
  }
  
  console.log(sumPrimes(20)); // Output: 77


  