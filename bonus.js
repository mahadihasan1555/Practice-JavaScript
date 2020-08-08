//revisit variable , string, array, loop

var marks = [93, 43, 63, 62, 65];

//for loop

for (var i = 0; i < marks.length; i++) {
    const element = marks[i];
    console.log(element);
}


//remove confusion with function and function vs loop

function add(number1, number2) {
    var total = number1 + number2;
    return total;
}
var result1 = add(65, 23);
console.log(result1);

function multiple(num3, num4, num5) {
    var total = num3 * num4 * num5;
    return total;
}
var total1 = multiple(12, 2, 4)
console.log(total1);

function add(numA, numB) {
    var total = numA / numB;
    return total; 
}
var total2 = add(12, 6);
console.log(total2);
//we can use variable 
var name = "mahadi";
var name2 = "jahid";
console.log(name);
console.log(name2);
//we can use for loop 
var array = ["mahadi", "hasan", "jahid", "santo", "sahid", "sakib"];

for (var i = 0; i < array.length; i++) {
    var element = array[i];
    console.log(element);  
}
var total3 = add(24, 12);
console.log(total3);

var total23 = add (12, 2);
console.log(total23);

//find largest number

function largestNumber(numbers){
    var larger = numbers[0];

    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if ( element > larger){
            larger = element;
        }
        console.log(element);
    }
    return larger; 

}

//var output = largestNumber([23, 42, 234, 53]);
//console.log("output", output);

var numbers = [23, 42, 53, 55, 64, 22];
var output1 = largestNumber(numbers);
console.log("output =", output1);



