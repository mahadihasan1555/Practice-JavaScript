// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5

var factorial = 1;
for (var i = 1; i <= 5; i++){
    factorial = factorial* i
    console.log(i, factorial);
}

var factorial = 1;
for (var i = 1; i <= 10; i++){
    factorial = factorial* i
    console.log(i, factorial);
}

var factorial = 1;
for (var i = 1; i <= 15; i++){
    factorial = factorial* i
    console.log(i, factorial);
}

//for loop
for ( let i = 0; i<= 10; i++){
    console.log(i);
}

var factorial = 1;
for (var i = 1; i<=5; i++){
    factorial = factorial * i;
    console.log(i, factorial);
}

// function 

function factorial(n){
    var factorial = 1;
    for (var i = 1; i <= n; i++){
        factorial = factorial * i;

    }
    return factorial;
}
var result = factorial(10);
console.log(result);