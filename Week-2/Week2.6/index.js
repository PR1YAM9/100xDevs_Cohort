//Arrow functions: another way of writing a function

// old way 
function sum(a,b){
    console.log(a+b);
}

// Arrow function
let sumA = (a,b)=>{
    console.log(a+b);
}
sum(1,2);
sumA(1,2);

// Map function
// instead of a classic for loop we use a map function
const arr = [1,2,3,4,5];
function mult(i){
    return i*2;
}
console.log(arr.map(mult))
//other way

const ans = arr.map(function(i){
    return i*2;
})
console.log(ans);
// Filter function

const ans1 = arr.filter(function(i){
    if(i %2==0){
        return false;
    }
    else{
        return true;
    }
})
console.log(ans1)