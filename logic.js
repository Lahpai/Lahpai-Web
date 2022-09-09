/*1 Define a function max() that takes two numbers as arguments and returns the largest of them. 
Use the if-then-else construct available in Javascript.*/

function max(x,y){
    if(x>y)
    return x;
    else
    return y;
}

console.log(max(7,12));

//2 Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(a,b,c){
if (a>b && a>c) 
    return a;
else if (b>a && b>c)
    return b;
else
return c;
}
console.log(maxOfThree(7,8,9));

//3 Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(ch){
    if(ch=='a'|| ch=='e'|| ch=='i'|| ch=='o'|| ch=='u'){
    return true;
    }
    else
    return false;
}
console.log(isVowel('u'));


/*4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. */

function sum(array) {
    let total = 0;
    for(let i=0; i<array.length; i++) {
        total += array[i];
    }
    return total;
}
console.log(sum([1,2,3,4]));


//multiply
function mul(array){
    let prod=1;
    for(let i=0; i<array.length; i++){
prod*=array[i];
    }
    return prod;
}
console.log(mul([1,2,3,4]));

//5 Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".


function reverse(s)
{ 
    let output="";
    for(let i=s.length-1;i>=0;i--)
    {
        output+=s.charAt(i);
    }
    return output;
}

//6 Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(words)
{
    let longestWord="";
    for(let i=0;i<words.length;i++)
    {
        if(words[i].length>longestWord.length)
                longestWord=words[i];
    }
    return longestWord;
}
console.log(filterLongWords(["Rose","Lily","Lotus","Sunflower"],4));


//7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords(arr, n){
    let newArr = [];
    arr.forEach(value => { if(value.length > n){
    newArr.push(value);
    }
    });
    return newArr;
}

console.log(filterLongWords(["hi","hola","hello","bonjour"],4));

//     Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:

// a) multiply each element by 10; 

// b) return array with all elements equal to 3; 

// c) return the product of all elements;

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
return elem + 3;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
return elem !== 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
return prevValue + elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);



//anonymos
(function(){
console.log("this is anonymos function")
})


//shortest,
function shortest(arr=[]){
    let min=arr[0];
    let count=0;
for(let i=1; i<arr.length; i++){
        if(arr[i].length<min.length){
            count=i;
            min=arr[i];
        }
} 
return min; 
    }
console.log(shortest(["hello","z","bye"]));



function myFunctionTest(expectedVal, testfn)
{
   if(JSON.stringify(testfn())==JSON.stringify(expectedVal))
        return "TEST SUCCEEDED";
    else
        return "TEST FAILED. Expected "+JSON.stringify(expectedVal)+" found "+ JSON.stringify(testfn());
}

console.log("Expected output of max(20,10) is 20 and  " +
   myFunctionTest(20, function(){return max( 20, 10);} ));

console.log("Expected output of maxOfThree(5,4,44) is 44 and  " +
myFunctionTest(44, function(){return maxOfThree(5,4,44);} ));


console.log("Expected output of isVowel('b') is false and  " +
myFunctionTest(false, function(){return isVowel('b');} ));


console.log("Expected output of sum([1,2,3,4]) is 10 and  " +
myFunctionTest(10, function(){return sum([1,2,3,4]);} ));


console.log("Expected output of mul([1,2,3,4]) is 24 and  " +
myFunctionTest(24, function(){return mul([1,2,3,4]);} ));


console.log("Expected output of reverse(abc) is cba and  " +
myFunctionTest("cba", function(){return reverse("abc");} ));


console.log("Expected output of findLongestWord([\"Rose\",\"Lily\",\"Lotus\",\"Sunflower\"]) is \"Sunflower\" and  " +
myFunctionTest("Sunflower", function(){return findLongestWord(["Rose","Lily","Lily","Sunflower"]);} )); 


console.log("Expected output of filterLongWords([\"Rose\",\"Lily\",\"Lotus\",\"Sunflower\"],4) is [\"Lotus\",\"Sunflower\"]] and  " +
myFunctionTest(["Lotus","Sunflower"], function(){return filterLongWords(["Rose","Lily","Lotus","Sunflower"],4);} ));