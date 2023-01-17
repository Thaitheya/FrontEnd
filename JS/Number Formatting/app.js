
let myNum = 100;


// myNum = myNum.toLocaleString("hi-IN", {style: "currency",currency: "INR"});
myNum = myNum.toLocaleString(undefined,{style: "unit", unit: "celsius"});
console.log(myNum);