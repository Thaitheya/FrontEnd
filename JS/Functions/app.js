// birthday();

// function birthday() { 
//     let name = "Thaitheyasudan";
//     let age = 23;
//     console.log("Happy birthday");
//     birthdaySong(name, age);
//  }

//  function birthdaySong(name, age){
//     console.log("Happy birthday to ", name);
//     console.log("Happy ", age, " old");
//  }

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log("Area is :", area);

function getArea(width, height) {
   let result = width * height;
   return result;
}