/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count =0;
    for(let i =0;i<str.length;i++){
        if(isVowel(str.charAt(i))){
            count++;
        }
    }
    return count;
}
function isVowel(char){
    char = char.toUpperCase(char);
    if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U'){
        return true;
    }
    else{
        return false;
    }
}

module.exports = countVowels;