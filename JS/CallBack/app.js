// sum(2,6,displayDOM);


// function sum(x, y, myFunc) {
//     let result = x + y;
//     myFunc(result);
//   }

//   function displayDOM(output) {  
//     document.getElementById("todom").innerHTML = output;
//   }

//Array.ForEach

let students =["thaitheyasudan","ramesh","suresh"];
students.forEach(captialize);
students.forEach(print);


function captialize(element,index,array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
  }

  function print(element){
     console.log(...element);
  }