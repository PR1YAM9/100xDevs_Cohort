/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// Brute Force
// function isAnagram(str1, str2) {
//     if(str1.length != str2.length){
//         return false;
//     }
//     else{
//         str1 = str1.split("").sort(); //O(nLogn)
//         str2 = str2.split("").sort(); //O(nLogn)
//         for(let i =0;i<str1.length;i++){ //O(n)
//             if(str1[i]!=str2[i]){
//                 return false;
//             }
//         }
//         return true;
//     }
// }
//Optimised
function isAnagram(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    if(str1.length != str2.length){
        return false;
    }
    else{
        let freq = new Array(26).fill(0);
        for(let i =0;i<str1.length;i++){
            freq[str1.charCodeAt(i)-'a'.charCodeAt(0)]++;
            freq[str2.charCodeAt(i)-'a'.charCodeAt(0)]--;
        } 
        for(let i =0;i<freq.length;i++){
            if(freq[i]!=0){
                return false;
            }
        }
        return true;
    }
}

module.exports = isAnagram;