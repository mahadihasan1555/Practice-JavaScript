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



