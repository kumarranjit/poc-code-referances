var sample = [1, 2, 3]
var sum = sample.reduce((sum, elem) => sum + elem)
console.log(sum)


//Javascript Array Methods;

//1. Foreach

Foreach takes a callback function and run that callback function on each element of array one by one.
Basically forEach works as a traditional for loop looping over the array and providing you array elements to do operations on them.

Example; 

var sample = [1, 2, 3];
// es5
sample.forEach(function (elem, index){
   console.log(elem + ' comes at ' + index);
})
// es6
sample.forEach((elem, index) => `${elem} comes at ${index}`)
------------------------------------------------------------------------------------------------------------------------------------
//2. Filter

The main difference between forEach and filter is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value.
Also take notice filter does not update the existing array it will return a new filtered array every time.

Ex;
var sample = [1, 2, 3]
// es5
var result = sample.filter(function(elem){
    return elem !== 2;
})
console.log(result);
// es6
var result = sample.filter(elem => elem !== 2)
console.log(result);

Ex-2 Single Multi Dimension Array;

let small_animals = animals.filter((animal) => {
    return animal.size === "small"
}) console.log(small_animals); 

Ex-3
var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];
var javscriptPersons = persons.filter(personObj => personObj.tags.indexOf("javascript") > -1); console.log(javascriptPersons);
-------------------------------------------------------------------------------------------------------------------------------

3. Map

Map like filter & foreach takes a callback and run it against every element on the array but whats makes it unique is it generate a new array based on your existing array.
var sample = [1, 2, 3]
Ex-1 Single Dimension Array;
// es5
var mapped = sample.map(function(elem) {
    return elem * 10;
})
// es6
let mapped = sample.map(elem => elem * 10)
console.log(mapped);

Ex-2 Single Multi Dimension Array;

var animals = [
{
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    },	
     {
        "name": "lion",
        "size": "medium",
        "weight": 150
    }
]
let animal_names = animals.map((animal, index, animals) => {
	console.log(animal);
    return animal.name;
}) 
console.log(animal_names);
--------------------------------------------------------------------------------------------------------------------------------------

4. Reduce

As the name already suggest reduce method of the array object is used to reduce the array to one single value.

var sample = [1, 2, 3]
// es5
var sum = sample.reduce(function(sum, elem){
    return sum + elem;
})
// es6
var sum = sample.reduce((sum, elem) => sum + elem)
console.log(sum) 

Ex-2 Single Multi Dimension Array;

let total_weight = animals.reduce((weight, animal, index, animals) => {
    return weight += animal.weight
}, 0) console.log(total_weight);

temp1.reduce(function(prev, cur) { 
console.log(new Date(prev.clonedStart), new Date(cur.clonedStart))
if (new Date(cur.clonedStart).getTime()> new Date(prev.clonedEnd).getTime() || new Date(cur.clonedStart).getTime() < new Date(prev.clonedStart).getTime()) {    
    console.log("Specified date is not in this range.");  
}  
else {  
   console.log("Specified date is within this range.");  
}  
        return prev;    });
--------------------------------------------------------------------------------------------------------------------------------
5. Find
.find() When you want to select a single element from an array.

Ex-1;
var animals = [
{
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    },	
     {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
]
var result = animals.find(elem => elem.name=="lion");
console.log(result);

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});
--------------------------------------------------------------------------------------------------------------------------------
6. Some

Array.Some is used to check if at least one element in the array passes a condition or not. Like Array.Filter, it accepts a test function where it loops through the source array’s element. It returns true if any one of the element passes the test condition. If all the elements fails on the test function, it returns false. it short circuits the loop as soon as one of element passes the test function. Ex below

//for Version
var hasFive = false;
for (var counter=0; counter < numberArray.length; counter++){
     if (numberArray[counter] === 5){
        hasFive = true;
        break;
     }
}
console.log(hasFive);
//forEach Version
var hasFive1 = false;
numberArray.forEach(number => {
     if (number === 5){
        hasFive1 = true;
     }
})
console.log(hasFive1);
//Some version
var hasFive2 = numberArray.some(number => number === 5);
//es5 version
var hasFive2 = numberArray.some(function(number){
     return number === 5
});
console.log(hasFive2); // logs true
var hasEleven = numberArray.some(number => number === 11);
console.log(hasEleven); // logs false
Example 2:- Check for someone with java.
var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];
var hasJava = persons.some(personObj => personObj.tags.indexOf("java") > -1);
//es5 version
var hasJava = persons.some(function(personObj){
    return personObj.tags.indexOf("java") > -1
});
console.log(hasJava);
===============================================================================================================================

Example 1 :- Filter even numbers
var numberArray = [1,2,3,4,5,6,7,8,9,10];

//for Version
var evenNumbers = [];
for (var counter=0; counter < numberArray.length; counter++){
    if (numberArray[counter] %2 === 0){
        evenNumbers.push(numberArray[counter])
    }
}
console.log(evenNumbers);

//forEach Version
var evenNumbers1 = [];
numberArray.forEach(number => {
    if (number%2 === 0){
        evenNumbers1.push(number)
    }
})
console.log(evenNumbers1);

//filter version
var evenNumbers2 = numberArray.filter(number => number%2===0);
console.log(evenNumbers2);
// es5 style
var evenNumbers2 = numberArray.filter(function(number){
   return number%2===0;
});

Example 2:- Filter objects with tags javascript
var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];
var javscriptPersons = persons.filter(personObj => personObj.tags.indexOf("javascript") > -1);
//es5 style
var javscriptPersons = persons.filter(function(personObj){
   return personObj.tags.indexOf("javascript") > -1
});
console.log(javscriptPersons);

Example 1 :- find square of numbers
var numberArray = [1,2,3,4,5,6,7,8,9,10];
//for Version
var squareNumbers = [];
for (var counter=0; counter < numberArray.length; counter++){
   squareNumbers.push(numberArray[counter] * numberArray[counter])
}
console.log(squareNumbers);

//forEach Version
var squareNumbers1 = [];
numberArray.forEach(number => {
    squareNumbers1.push(number*number);
})
console.log(squareNumbers1);

//Map version
var squareNumbers2 = numberArray.map(number => number*number);
//es5 version
var squareNumbers2 = numberArray.map(function(number){
     return number*number;
});
console.log(squareNumbers2);

Example 2:- Map objects to String array having name
var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];
var nameArray = persons.map(personObj => personObj.name);
//es5 version
var nameArray = persons.map(function(personObj){
      return personObj.name;
});
console.log(nameArray);

Example 1 :- find square of numbers
var numberArray = [1,2,3,4,5,6,7,8,9,10];
//for Version
var squareNumbers = [];
for (var counter=0; counter < numberArray.length; counter++){
   squareNumbers.push(numberArray[counter] * numberArray[counter])
}
console.log(squareNumbers);
//forEach Version
var squareNumbers1 = [];
numberArray.forEach(number => {
    squareNumbers1.push(number*number);
})
console.log(squareNumbers1);

//Map version
var squareNumbers2 = numberArray.map(number => number*number);
//es5 version
var squareNumbers2 = numberArray.map(function(number){
     return number*number;
});
console.log(squareNumbers2);

Example 2:- Map objects to String array having name
var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];
var nameArray = persons.map(personObj => personObj.name);
//es5 version
var nameArray = persons.map(function(personObj){
      return personObj.name;
});
console.log(nameArray);

===========================================================================================================================================================
Merge two objects (like multiple inheritance).
---------------------------------------------
var obj1 = { food: 'pizza', car: 'ford', animal: 'dog'}
var obj2 = { animal: 'cat de' }
console.log(Object.assign(obj1, obj2));
output: {food: "pizza", car: "ford", animal: "cat de"}
--------------------------------------------------------------------------------------------------
Cloning an object
-------------------
var copy = Object.assign({}, obj);
 
 
var obj = { food: 'pizza', car: 'ford', animal: 'dog'}
var src = { animal: 'cat de' }
function extend(obj, src) {
    Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
    return obj;
} 
console.log(extend(obj,src));
output: {food: "pizza", car: "ford", animal: "cat de"}

var a = { foo: true }, b = { bar: false };
var c = jQuery.extend(a, b);
console.log(c);
output: {foo: true, bar: false}

=============================================================================================================================================================
Javascript String Methods
-----------------------------

var str ="abcdef"; output should be -> ["a", "b", "c", "d", "e", "f"]
ans: str.split('');

var str ="abcdef"; output should be -> ["f", "e", "d", "c", "b", "a"]
ans: str.split('').reverse();

var str ="abcdef"; output should be -> "fedcba"
ans: str.split('').reverse().join('');

var arr=["f", "e", "d", "c", "b", "a"] output should be -> "f,e,d,c,b,a"
ans: str..join();

var arr=["f", "e", "d", "c", "b", "a"] output should be -> "fedcba"
ans: str..join('');

ES5 version use Array.concat:
------------------------------
var array1 = ["Vijendra","Singh"];
var array2 = ["Singh", "Shakya"];

var array3 = array1.concat(array2); // Merges both arrays
// [ 'Vijendra', 'Singh', 'Singh', 'Shakya' ]


var str ="abcdef";
function duplicate(){};
duplicate.prototype.ans=str.split('').concat(str.split('').reverse());
ans:["a", "b", "c", "d", "e", "f", "f", "e", "d", "c", "b", "a"]


var arr=["a", "b", "c", "d", "e", "f", "f", "e", "d", "c", "b", "a"];
How to remove duplicates
var unique_array = Array.from(new Set(arr)); //or [...new Set(arr)]
ans: ["a", "b", "c", "d", "e", "f"]

function func(x){
   console.log(typeof x, arguments[2]);
	console.log(x);
}
func();                
func(1);     
func("1", "2", "3");
func(1, 4, 5);
=============================================================================================================================================================
// Javascript Call 
// functionname.call(obj, functionarguments)
var obj={num:3};
var addToThis = function(a,b,c){
console.log('this', this);
return this.num+a+b+c;
}
console.log(addToThis.call(obj,2,1,3));

// Javascript Apply 
// functionname.apply(obj, functionarguments)
var arr=[2,3,4];
var addToThisApply = function(a,b,c){
console.log('this', this);
return this.num+a+b+c;
}
console.log(addToThisApply.apply(obj,arr));

// Javascript Bind
var addToBind = function(a,b,c){
return this.num+a+b+c;
}
var bound = addToBind.bind(obj);
console.dir(bound);
console.log(bound(2,3,4));
=============================================================================================================================================================
Callback function
------------------
A callback function is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some kind of routine or action.

A callback function, also known as a higher-order function, is a function that is passed to another function 
(let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction. 

A callback is a plain JavaScript function passed to some method as an argument or option. 
Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.
// simple callback function
var x = function(){
console.log("this is x ");
}
var y = function(callback){
console.log("this is y function")
callback();
}
y(x);


function add(a,b){
return a+b;
}

function multi(a,b){
return a*b
}

var calc = function(a,b,callback){
if(typeof callback ==='function'){
return callback(a,b);
}
}
console.log(calc(1,2,multi));

var myarr=[{id:7,str:"apple"},{id:5,str:"mango"},{id:1, str:"banana"}]
myarr.sort(function(v1,v2){
if(v1.id>v2.id){
return -1;
} else{
return 1;
}
})
console.log(myarr);

var friends = ["Mike", "Stacy", "Andy", "Rick"];
friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});

function greeting(name) {
  alert('Hello ' + name);
}
function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}
processUserInput(greeting);
===================================================================================================================================================
Geolocation API
-----------------
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(displayLocationInfo);
}

function displayLocationInfo(position) {
  const lng = position.coords.longitude;
  const lat = position.coords.latitude;

  console.log(`longitude: ${ lng } | latitude: ${ lat }`);
}

==============================================================================================================================================================

RxJs Observable
------------------------------------------
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import { timer } from 'rxjs/observable/timer';
import { fromEvent } from 'rxjs/observable/fromEvent';
@Component({
    selector: "overlapPopup",
    template: `<div id="overlapGridContainer"></div>`
})

export class overlapGridPopup implements OnInit {
ngOnInit(): void {
        const interval$ = interval(1000);
        const timer$ = timer(3000,1000);
        interval$.subscribe(val=>console.log("stream 1", val));
        
        const click$=fromEvent(document,"click");
        click$.subscribe(evt=>console.log(evt));
    }
}


import { interval } from 'rxjs/observable/interval';
import { share } from 'rxjs/operators';

const interval$ = interval(1000).pipe(share());

interval$.subscribe(value => console.log(`Subscriber 1: ${value}`));

setTimeout(() => {
  interval$.subscribe(value => console.log(`Subscriber 2: ${value}`))
}, 3000