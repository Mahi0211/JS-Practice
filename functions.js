function sum(){  //no need to put parameters inside sum
    let sum = 0;
    for(let values of arguments)
    sum += values;
return sum;

    // console.log(arguments)
    // return a+b;
}

console.log(sum(0.1,30,40))

// function sum(...args){
//     return args.reduce((a,b) => a+b);
// }
function sum(discount, ...args){      //rest parameter will not take another parameter after placed rest
    const total = args.reduce((a,b) => a+b);
    return total * (1-discount);
}

// default parameter

// function interest(principal, rate, time){
//     return principal * rate * time / 100;
// }

// console.log(interest(10000, 3.5, 5));
function interest(principal, rate = 3.5, time = 5){  //if we put default parameter then remaining parameters should have its default parameter, otherwise it returns a value NaN
    return principal * rate * time / 100;
}

console.log(interest(10000));

// getters and setters

const person = {
    firstName: 'Mahin',
    secondName: 'Pranave',
    get fullName() {
        return `${person.firstName} ${person.secondName}`
    },
    set fullName(value){
        const parts = value.split(' ')
        this.firstName = parts[0];
        this.secondName = parts[1]
    }
}

person.fullName = 'John Smith'
console.log(person.fullName)

// Error handling - try and catch


// const person = {
//     firstName: 'Mahin',
//     secondName: 'Pranave',
//     // get fullName() {
//     //     return `${person.firstName} ${person.secondName}`
//     // },
//     set fullName(value){
//         if (typeof value !== 'string')
//         throw new Error("Value must be a string");

//         const parts = value.split(' ')
//         this.firstName = parts[0];
//         this.secondName = parts[1]
//     }
// }

// try{
//     person.fullName = true
// }

// catch(e){
//     alert(e);
// }
// person.fullName = 'John Smith'
// console.log(person.fullName)


// ---this keyword---

// method -> obj
// function -> global (window, global)
    
// const video = {
//     title: 'a',
//     tags: ['a','b','c'],
//     showTags() {
//         this.tags.forEach(function(tag){
//             console.log(this.title, tag);
//         }, this);
//     }
// };

// video.showTags();

// const video = {
//     title: 'a',
//     tags: ['a','b','c'],
//     showTags() {
//         const self = this;
//         this.tags.forEach(function(tag){
//             console.log(self.title, tag);
//         });
//     }
// };

// video.showTags();

const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();

// ---Exercise 1--- sum of arguments

// function sum(...args){
//     const sum = args.reduce((a,b) => a+b)
//     return sum;
// }

// console.log(sum(1,2,3,4))

function sum(...args){
    if (args.length === 1 && Array.isArray(args[0]))
    args = [...args[0]];
    return args.reduce((a,b) => a+b);
}

console.log(sum([1,2,3,4]))

// ---Exercise 2--- area of circle

const circle = {
    radius : 5,
    get area() {
        return Math.PI * Math.pow(this.radius , 2);
    }
}

console.log(circle.area)

//---Exercise 3--- error handling



function countOcuurances(array, searchElement){
    if(!Array.isArray(array))
        throw new Error("Invalid array."); 
    return array.reduce((accumulator,current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    },0);
}

try{
    const numbers = [1,2,3,4,1, 1]
    const output = countOcuurances(null, 1)
    console.log(output)
}

catch(e){
    console.log(e.message);
}
