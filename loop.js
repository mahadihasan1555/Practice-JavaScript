//while loop
 var num = 0;
 while (num < 25){
    console.log(num);
   // num = num + 1;
   num++;
 }

var num = 10;
while (num < 20 ){
    console.log(num);
    num++;
}

var num = 30;
while (num <= 40 ){
    console.log(num);
    num++;
}

// for loop
for ( var i = 0; i < 10; i++){
    console.log(i);
}

for ( var i = 0; i <= 10; i++){
    console.log(i);
}

var nums = [12, 22, 11, 42, 24,41];
for (var i = 0; i < nums.length; i++){
    var element = nums [i];
    console.log(element);
}

//revise 
var  i = 1;
while (i <= 10){
    console.log(i);
    i++;
}

var  i = 1;
var factorial = 1;
while (i <= 10){
    factorial = factorial * i;
    console.log(i, factorial);
    i++;
}
