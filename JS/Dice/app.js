// let x = Math.floor(Math.random() * 6) + 1;
// let y = Math.floor(Math.random() * 6) + 1;
let x;
let y;
let z;

document.getElementById("rollcontrol").onclick = function() {
 x = Math.floor(Math.random() * 6) + 1;
 y = Math.floor(Math.random() * 6) + 1;
 z = Math.floor(Math.random() * 6) + 1;   

document.getElementById("xlabel").innerHTML = x;
document.getElementById("ylabel").innerHTML = y;
document.getElementById("zlabel").innerHTML =z;
}