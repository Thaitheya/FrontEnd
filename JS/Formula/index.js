// console.log("Hellw World");

// window.alert("Javascript");

// //document.getElementById
// let firstName = "Thaitheyasudan";
// let age = 21;
// let boolean = false;

// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "Your are " + age +"old";
// document.getElementById("p3").innerHTML = "Enrolled " + boolean;



// let userName;

// document.getElementById("myButton").onclick = function(){
//       userName = document.getElementById("myText").value;
//       console.log(userName);
// }
// Type Conversion

// let age = window.prompt("How old are you??");
// age = Number(age);
// age = age + 1;

// console.log("Your are ", age, "old!!!");

// const PI =3.14159;
// let radius;
// let circumference;
// radius = window.prompt("Enter the radius of the circle");
// radius = Number(radius);
// circumference = 2 * PI * radius;
// console.log(circumference);

//Math

// let x = 5;
// let y = 10;
// let z = 15;
// let MAX;
// let MIN;

// // x = Math.round(x);
// // x = Math.floor(x);
// // x = Math.ceil(x);
// // x = Math.random();
// // x = Math.pow(x, 5);
// MAX = Math.max(x,y,z);
// console.log(MAX);

// let a = window.prompt("Enter value a");
// let b = window.prompt("Enter value b");
// let c;
// a = Number(a);
// b = Number(b);
// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

// console.log(c);

document.getElementById("submitbutton").onclick = function() {
   let a = document.getElementById("a").value;
    a = Number(a);

let b = document.getElementById("b").value;
b = Number(b);
c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
 document.getElementById("c").innerHTML = "Side C:" + c;
}

