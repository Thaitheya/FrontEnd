
// let userName = "";


// while(userName == "" || userName == null) {
//     userName = window.prompt("Enter the name");
// }

// console.log("Hello ",userName);

// //Do while

// let name;

// do{
//     name = window.prompt("Enter the name ");
// }while(name == "")
// console.log("Hello ",name);

//Nested for loop
let symbol = window.prompt("Enter the symbol");
let rows = window.prompt("Enter the rows");

let columns  = window.prompt("Enter the columns");


for(let i = 0; i< rows; i++){ //runs one time per iteration
    for(let j = 0; j < columns; j++) { //runs multple time in iteration
         document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}