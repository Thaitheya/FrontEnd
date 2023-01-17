// let fruits = ["apple","orange","banana"];

// fruits.push("Grapes"); //Add the element at the last
// fruits.pop(); //Removes the element from the last
// fruits.unshift("mango"); //Add the element at the begining
// fruits.shift(); //Remove the element from the begining
// console.log(fruits);

// let prices = [5,10,15,20];

// for(let i = 0; i< prices.length; i++) {
//     console.log(prices[i]);
// }

// for (const price of prices) {
//     console.log(price);
// }

//Sort the array

// let fruits = ["apple","orange","banana"];

// fruits = fruits.sort();


// for (let fruit of fruits) {
//     console.log(fruit);
// }

//2D arrays

// let fruits = ["Apples","Mangoes","Bananas"];
// let vegetables = ["Carrots","Onions","potatoes"];
// let non_Veg = ["eggs","Chicken","Mutton"];


// let groceryList =[fruits,vegetables,non_Veg];

// groceryList[0][0] = "Mangoes";

// for (const list of groceryList) {
//     for (const food of list) {
//         console.log(food);
//     }
// }

//Spread Operators

// let numbers = [1,2,3,4,5,6,7,8,9];

// let maximum = Math.max(...numbers); //Makes the elements unpacked.

// console.log(maximum);

// let class1 = ["Ramesh","Suresh","Dinesh"];
// let class2 = ["Sundar","Ravi","Ragu"];

// class1.push(...class2);
// console.log(...class1);

//Rest Operator

//Function with rest parameters will packes the arguments in the array

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c));

function sum(...numbers) { 
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
 }
