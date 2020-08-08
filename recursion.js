//how recursion works and recursion vs iterative

// 5! = 5 * 4 * 3 * 2 * 1

function factorial(num) {
    var fact = 1;

    for (var i = 1; i <= num; i++){
        fact = fact * i;
        
    }
    return fact;
}

function factorialRecursive(num){
    if(num == 0){
        return 1;
    }
    else {
        return num * factorialRecursive;
    }
}
var result = factorial(5);
console.log("result", result);