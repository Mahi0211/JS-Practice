// Object-oriented Programming (OOP)

const circleRadius = {
    radius: 1,
    location: {
        x: 1, 
        y: 1
    },
    isVisible: true,
    draw: function() {
        console. log('draw');
    }
}

circleRadius.draw(); // Method


//***Factory or Constructor functions***

// if our key and the value are the same, we make our code simple by removing a value and simply adding a key

function createCircle(radius) {
    return {
        radius,
        draw() {
        console. log('draw'); //function method shortly
        }
    }
}
const circle1 = createCircle(1);
console.log(circle1);

// circle1.draw


//  Constructor function

function Circle(radius){ //pascol notation
    this.radius = radius;
    this.draw = function(){
        console.log("Draw");
    }
}

const circle = new Circle(1)
console.log(circle)

// Enumerating properties of an object

const cir = {
    radius: 1,
    draw() {
        console.log('drawl');
    }
}

for (let key in cir)
    console.log(key, cir[key]);
for (let key of Object.keys(cir))
    console.log(key);
for (let entry of Object.entries(cir))
    console.log(entry);

    if ('color' in circle) console.log('yes');


// cloning an object

// const another = {}
// for(let key in cir)
// another[key] = circle[key]  //old way

const another = Object.assign({color: 'yellow'}, cir);  //new method

const another1 = { color: 'yellow', ...cir }; //simple method

console.log(another1)


// math

function getRandomArbitrary(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomArbitrary(2, 5))

// ---Exercise 1--- Address object

// street
// city
// zibcode

// let address = {
//     street: 'RC',
//     city: 'mul',
//     zibcode: 619
// }

// function showAddress(address){
//     for(let key in address)
//     console.log(key, address[key]);
// }

// showAddress(address);

// ---Exercise 2--- factory function, constructor function

let address = createAddress('a','b','c')

function createAddress(street, city, zibcode){
    return{
        street,
        city,
        zibcode
    };
}

console.log(address)

function CreateAddress(street, city, zibcode){
    this.street = street;
    this.city = city;
    this.zibcode = zibcode;
}

const newAddress = new CreateAddress('a','b','c')
console.log(newAddress)

// ---Exercise 3--- object equality

let address1 = new Address('a','b','c')
let address2 = new Address('a','b','c')
let address3 = address1


console.log(areSame(address1, address2))
console.log(areEqual(address1, address2))
console.log(areSame(address1, address3))

function Address(street, city, zibcode){
    this.street = street;
    this.city = city;
    this.zibcode = zibcode;
}

function areEqual(address1, address2){
    let result = (address1.street === address2.street && 
    address1.city === address2.city && 
    address1.zibcode === address2.zibcode)
    return result;
}

function areSame(address1, address2){
    // let result = (address1 === address2) ? true : false;
    // return result;

    return address1 === address2;
}


// ---Exercise 4---blog post

// title
// body
// author
// views
// comments
    // (author, body)
// isLive

let blog = new PostBlog('a', 'b', 'c')
    // title: 'Attack on Titans',
    // body: 'Tatake',
    // author: 'Hayato',
    // views: 768,
    // comments: [
    //     { body: 'Tatake', author: 'Hayato' },
    //     { body: 'Titan', author: 'Eren' }
    // ],
    // isLive: true

function PostBlog(title, body, author){
    this.title= title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

console.log(blog)

// ---Exercise 5--- price range

// less, medium, moderate, high


let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    { label: '$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
] 

let restaurants = [
    { averagePerPerson: 5}
]

