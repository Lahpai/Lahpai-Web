/**
 *2. Write a Node.js program that uses readline to keep on asking the user for a number until they 
enter “stop”. The program should then output the sum of all the numbers that the user has 
entered. 
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });


   function sumNums() {
    let sum = 0;
    const getNum = function () {
        readline.question ('Enter a Number, or "stop" to exit: ', inputNum => {
            if(inputNum.toLowerCase() === 'stop') {
                console.log("Sum: " ,sum);
                readline.close();
            } else{
                sum += parseInt(inputNum);
                getNum();
            }
        })
    } 
    getNum();
}
sumNums();