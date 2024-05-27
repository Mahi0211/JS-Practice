// // const numbers = [1, 2, 3, 1, 4, 5]
// // End
// // numbers.push (5,6);
// // // Beginning
// // numbers.unshift(1, 2);
// // // Middle
// // numbers.splice(2, 0, 'a', 'b')
// // console.log(numbers);


//     // console.log(numbers.indexOf(1, 3));
//     // console.log (numbers.lastIndexOf(1));
//     // console.log(numbers.indexOf(1) !== -1);
//     // console.log (numbers.includes(1));

// // Reference type

// const courses = [
//     {id: 1, name:'a'},
//     {id: 2, name:'b'},
// ];

// // const course = courses.findIndex(function(course){
// //     return course.name === 'b';
// // });
// // Arrow function
// // const course = courses.findIndex(course => course.name === 'b');
// const course = courses.find(course => course.name === 'b');

// console.log(course)

// // emptying array 

// // numbers.length = 0;

// // combining and slicing

// // let combined = a.concat(b)
// // let slice = combined.slice()

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // spread method
// const combinedArrays = [...first, ...second]

// // Iterating an Array

// const numbers = [1,2,3]

// for(let number of numbers)
//     console.log(number);

// numbers.forEach((number, index) => console.log(index, number));

// // joining arrays

// const numbers1 = [2,3,1,4];
// const joined = numbers1.join(',');
// console.log(joined)

// const message = 'Creating arrays in javascript';
// const words = message.split(' ');
// console.log(words)
// const combined = words.join('-');
// console.log(combined)

// // sorting arrays

// numbers1.sort();
// console.log(numbers1);

// numbers1.reverse()
// console.log(numbers1)

// // const pallindrome = 'tamil'
// // const reversedPallindrome = pallindrome.split('').reverse().join('')
// // if (reversedPallindrome === pallindrome)
// // console.log(true)
// // else
// // console.log('its not a pollindrome')

// const courses1 = [
//     { id: 1, name: 'Node.js'},
//     { id: 2, name: 'javaScript'},
// ]

// courses1.sort((a,b)=>{
//     const nameA = a.name.toLocaleUpperCase();
//     const nameB = b.name.toLocaleUpperCase();

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// })

// console.log(courses1)

// // testing the elements of an array

// const hasOne = [1, 2, -3, 4]
// // every()
// // some()

// const isAllPositive = hasOne.every(value => value >= 0);
// console.log(isAllPositive) // false
// const anyOnePositive = hasOne.some(value => value >= 0);
// console.log(anyOnePositive) // true

// // Filtering an array

// const filtered = hasOne.filter(value => value >=0 );
// console.log(filtered)

// // Mapping an array

// // const items = filtered.map(value => '<li>' + value + '</li>');
// // const items1 = items.join('')
// // console.log(items1)

// const array = [1,2,3,-2,4]

// const items = array.filter(value => value >=0)
// .map(value => ({value: value}))
// .filter(n => n.value > 1)
// .map(n => n.value); //chaining method

// console.log(items)

// // Reducing an array

// // let sum = 0;
// // for(let n of array)
// //     sum += n
// // console.log(sum)

// const sum = array.reduce((p,c) => {
//     return p+c;
// },0); // p = previous value , c = current value
// //if we didn't put previous value as 0 then it take first value of an array as its previous value(accumulator)

// console.log(sum)

// ---Exercise 1---Array from range

// const numbers = arrayFromRange(-10,5);

// console.log(numbers)

// function arrayFromRange(min, max){
//     const array = [];
//     for(let i=min; i <= max; i++)5
//     array.push(i);
// return array;
// }

// ---Exercise 2--- search element

// const numbers = [1,2,3,4]

// function includes(array, element){
//     for(let values of array)
//     if (values === element)
//     return true;
// return false;
// }

// console.log(includes(numbers, 4))

// ---Exercise 3--- except value of an array

// const output = excludes(numbers, [3])
// console.log(output)

// function excludes(array, element){
//     const output = [];
//     for(let values of array)
//     if (!element.includes(values)) //checks 3 is includes in array values of numbers
//         output.push(values);
//     return output;
// }


// ---Exercise 4--- moving an element

// const numbers = [1,2,3,4]

// const output = move(numbers, 1, -2)

// console.log(output)

// function move(array, index, offset){
//     const position = index + offset
//     if (position >= array.length || position < 0){
//         console.error('Invalid offset.')
//         return;
//     }
//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(position, 0, element);
//     return output;
// }

// exercise - 5  count occurances

const numbers = [1,2,3,4,1, 1]

const output = countOcuurances(numbers, 1)
console.log(output)

function countOcuurances(array, searchElement){
//     let count = 0;
//     for(let elements of array)
//     if (elements === searchElement)
//     count++
// return count;
    return array.reduce((accumulator,current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        // console.log(accumulator, current, searchElement)
        return accumulator + occurrence;
    },0);
}


// ---Exercise 6--- Get max

const numbers1 = [1,2,3,4,9,2,5,7,11,35,23]

const max = getMax(numbers1)
console.log(max)

function getMax(array){
//     let max = array[0];

//     for(let i=0; i < array.length; i++)
//     if(array[i] > max)
//     max = array[i]
// return max;

    return array.reduce((a, b) => (a > b) ? a : b);
}


// ---Exercise 7--- Movies

const movies = [
    {title: 'The Shawshank Redemption', year: 1994, rating: 4.9},
    {title: 'The Godfather', year: 1972, rating: 4.8},
    {title: 'Pulp Fiction', year: 1994, rating: 4.6},
    {title: 'Fight Club', year: 1999, rating: 4.1}
]

// All the movies in 2018 with rating > 4.5
// Sort them by their rating
// Descending order
// Pick their title

 const titles = movies.filter(m => m.year === 1994 && m.rating > 4.5) //filter returning a new array
 .sort((a,b) => a.rating - b.rating) //sort method by default only works for numbers and string
 .reverse()
 .map( m => m.title)

 console.log(titles)

 // sort
//  a > b => -1
//  a === b => 0
//  a < b => 1