console.log("hello world");

// JS IS LOOSELY TYPED LANGUAGE
let number = 5;
number = "hello";
console.log(number);

// Take input and print it
const prompt = require("prompt-sync")();
let username = prompt("What is your name?");
console.log(username);

// If else condition on the basis of input
let gender = prompt("whats your gender ?");
if(gender=="male"){
    console.log("hello sir");
}else{
    console.log("hello madam");
}

// Better way to write if else condition
gender== "male" ? console.log("hello sir") : console.log("hello madam");

// For Loop
let ans = 0;
for(let i=0;i<1000;i++){
    ans = ans + 1;
    console.log(ans);
}

// Print even numbers in array 
let arr = [1,2,3,4,5,6,7,8,9,10];
for(let i =0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}

Objects
let obj ={
    name: "priyam",
    gender: "Male"
}
console.log(obj.name);
console.log(obj["name"]);

// Array of objects
let arr1 = [
    {
        name: "priyam",
        gender: "male"
    },
    {
        name: "priyam",
        gender: "male"
    }
];

for(let i=0;i<arr.length;i++){
    console.log(arr[i].name);
}

// Functions
function add(a,b){
    return a+b;
}
console.log(add(1,2));

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

console.log(sum(1, 2, displayResult));