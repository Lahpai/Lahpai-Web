const myMath = (function () {
    const PI = 3.14 
    const add = function (x,y) {return x + y;}
    const subtract = function (x,y) {return x-y}
    const multiply = function (x,y) {return x*y}
    const divide = function (x,y) {return x/y}
    return {
        addMath: add,
        subtractMath: subtract,
        multiplyMath: multiply,
        divideMath: divide,
        pi: PI
    };
})();

module.exports = myMath;


