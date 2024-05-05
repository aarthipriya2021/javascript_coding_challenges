function countVowels(str){
    let vowels = 'aeiouAEIOU';
    let totalVowels = 0;

    for(let char of str){
        if(vowels.includes(char)){
            totalVowels++
        }
    }
    return totalVowels;
}



const string = "Try the website regexr.com . There you can simulate more";
console.log(countVowels(string));