//declaring arrays
let myArray = [10, 5, 2024, 'September', 'October'];

//accessing arrays
let firstElement = myArray [0];
let lastElement = myArray [myArray.length - 1];
let middleElement = myArray [Math.floor(myArray.length / 2)];

console.log('First element:', firstElement);
console.log('Last element:', lastElement);
console.log('Middle element:', middleElement);

//using array properties to determine array length
console.log('Array length:', myArray.length);

//array methods .push(), .pop(), .shift(), .unshift(), .splice()
myArray.push('vacation'); //adds one or more elements to the end of an array
console.log('Push method:', myArray);

myArray.pop(); //removes the last element from an array
console.log('Pop method:', myArray);

myArray.unshift('Tobago'); //adds one or more elements to the beginning of an array
console.log('Unshift method:', myArray);

myArray.shift(); //removes the first element from an array
console.log('Shift method:', myArray);

myArray.splice(3, 1); //removing a shallow copy of a postion of an array
console.log('Splice method:', myArray);

//iterating through arrays
console.log('Taditional loop method:'); //traditional iteration through arrays for loop
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log('forEach loop method:'); //forEach iteration through arrays for loop
myArray.forEach((element) => {
    console.log(element);
});

console.log('Map loop method'); //map iteration through arrays for loop
myArray.map((element) => {
    console.log(element);
    return element;
});

//array destructing
const [first, second, ...rest] = myArray; //destructuring the first two elements and using the rest parameter
console.log('First element:', first);
console.log('Second element:', second);
console.log('The rest of the elements:', rest);