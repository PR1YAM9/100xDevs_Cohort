// const x: number = 1;
// console.log(x)

// function greet(firstname : string){
//     console.log("hello"+firstname);
// }

// greet("Priyam")

// function add(num1: number, num2: number): number{
//     return num1+num2;
// }
// console.log(add(10,20));

// function ageCheck(age: number): boolean{
//     if(age>18){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(ageCheck(25));


// function runAfter1(fn: ()=>void){
//     setTimeout(fn,1000)
// }

// runAfter1(()=>{
//     console.log("Hello World")
// })

// const user = {
//     name: "priyam",
//     age: 21
// }

// interface User {
//     name : String,
//     age: number
// }

// function isLegal(user: User){
//     if(user.age>18){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(isLegal(user))


// Implementing interface in a class

// interface Person {
//     name: string,
//     age: number,
//     greet(phrase: string): void
// } 

// class Employee implements Person{
//     name: string;
//     age: number;


//     constructor(n: string, a: number){
//         this.age = a;
//         this.name = n;
//     }

//     greet(phrase: string): void {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// const user= new Employee("Priyam",21)
// console.log(user.greet("Hello how are you?"));

// type id = number | string 

type Employee = {
    name: string,
    startDate: Date
}

interface Manager {
    name: string,
    endDate: Date
}

type TeamLeader = Employee & Manager;

const teamLead: TeamLeader = {
    name: "Priyam",
    startDate: new Date(),
    endDate: new Date()
}

console.log(teamLead)


function maxValue(arr: number[]){
    let num =0;
    for (let i = 0;i<arr.length;i++){
        num = Math.max(num,arr[i]);
    }
    console.log(num)
}