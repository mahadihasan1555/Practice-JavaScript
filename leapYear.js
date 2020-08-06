// const year = 3688;
// console.log(year % 4);

// const year = 3998;
// let remainder = year % 4;
// console.log(remainder == 0);

// const year = 3998;
// let remainder = year % 4;
// console.log(remainder === 0);

const year = 3998;
let remainder = year % 4;
if (remainder == 0){
    console.log("this is a leap year");
}else { 
    console.log("this is not a leap year");
}


function isLeapYear (year){
    const remainder = year % 4;
    if (remainder == 0){
        return true;

    }else {
       return false;
    }

}

const check2000 = isLeapYear(1700);
console.log(check2000);




function leapYear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(1700));
console.log(leapYear(1800));
console.log(leapYear(100));


//revise leap year 

console.log( 2020 / 4); //LEAP YEAR
console.log( 2050 / 4); // IS NOT LEAP YEAR
console.log( 2030 / 4); // IS NOT LEAP YEAR

var  leapYear = 2230;
var reminder = leapYear % 4;
console.log(reminder);

var  leapYear = 2230;
var reminder = leapYear % 4;
console.log(reminder == 0);

var  leapYear = 2240;
var reminder = leapYear % 4;
console.log(reminder == 0);


var leapYear = 2323;
var reminder = leapYear % 4;
if (reminder == 0 ){
    console.log("this is a Leap Year");
}else{
    console.log("this is not a Leap Year");
}

var leapYear = 2320;
var reminder = leapYear % 4;
if (reminder == 0 ){
    console.log("this is a Leap Year");
}else{
    console.log("this is not a Leap Year");
}

//function check leap year

function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
  }
console.log(isLeapYear(2000)); 
console.log(isLeapYear(2001));
console.log(isLeapYear(2004));
console.log(isLeapYear(2100));


// function leapYear(year)
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }



// function leapYear(year){
//     var result; 
//     year = parseInt(document.getElementById("isYear").value);
//     if (years/400){
//       result = true
//     }
//     else if(years/100){
//       result = false
//     }
//     else if(years/4){
//       result= true
//     }
//     else{
//       result= false
//     }
//     return result
//  }