var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10


var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10


var x = function(x, y) {
   return x * y;
}   
// "Consuming Code" (Must wait for a fulfilled Promise

// ES6
const x = (x, y) => x * y;

const x = (x, y) => { return x * y };

//loop
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}

//looping over string
let language = "JavaScript";
let text = "";

for (let x of language) {
    text += x + " ";
}

// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a new Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);


// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
///js class

class Car {
   constructor(name, year) {
     this.name = name;
     this.year = year;
   }
 }


// promise code
 const myPromise = new Promise(function(myResolve, myReject) {

   
     myResolve(); 
     myReject()
   });

   myPromise.then(
     function(value) { /* code if successful */ },
     function(error) { /* code if some error */ }
   );


   //default parameter
   function myFunction(x, y = 10) {
      
      return x + y;
    }
    myFunction(5); //  15