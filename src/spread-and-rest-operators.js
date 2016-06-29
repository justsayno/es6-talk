//spread
let oldArray = [10,11,12]

let newArray = [
    ...oldArray.slice(0, 1),
    ...oldArray.slice(2),
]

console.log(oldArray); // [10,11,12]
console.log(newArray); //[10, 12]

//rest
function someFunction(productId, ...catagories){
    console.log(catagories);
}

console.log(someFunction(1, 'cars'));
console.log(someFunction(1, 'sports', 'rugby'));
console.log(someFunction(1, 'politics', 'news', 'current events'));