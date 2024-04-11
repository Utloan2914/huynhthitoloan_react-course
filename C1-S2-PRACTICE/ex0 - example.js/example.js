// Let s say we have the following start code:
// Let numbers = [1, 2, 3, 4, 5]
// Add an element at the end of the array
let numbers = [1, 2, 3, 4, 5];
numbers.push(5);
// Loop on all array elements
numbers.forEach(num => {
    console.log(num);
});

// Access to the array element with its index
let index = 2; 
console.log(numbers[index]);

// Remove an array element with its index
let indexToRemove = 3; 
numbers.splice(indexToRemove, 1);

// Filter array elements
let filterNumbers = numbers.filter(num => num % 2 === 0); 
console.log(filterNumbers);

// Transform each array element by applying a function on them
let transformNumbers = numbers.map(num => num * 2); 
console.log(transformNumbers);
