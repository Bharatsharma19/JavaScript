/*
let btn = document.querySelector("button");
btn.addEventListener("click", showMsg);

function showMsg() {
  alert("Hello Sir, How are you ?");
}
*/
let btn = document.querySelector("button");
btn.addEventListener("click", inputMsg);

function inputMsg() {
  let name = prompt("Enter Name of student");
  btn.textContent = "Roll No. 1:" + name;
}
