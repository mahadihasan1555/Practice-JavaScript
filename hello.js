// console.log(21);

//  variable
var bananaPrice = 23;
console.log(bananaPrice);

var name = "mahadi";
console.log(typeof name);

var phoneName = "Redmi";
console.log(phoneName);

var phoneName = '';
console.log(typeof phoneName);

var isCool = true;
console.log(isCool);
var isHot = false;
console.log(typeof isCool);

var name1 = null;
console.log(name1);
var name3 ;
console.log(name3);

var promise = "i promise i will work hard to become a web developer";
console.log(promise.toUpperCase());
console.log(promise.toLowerCase());
console.log(promise.toLocaleLowerCase());

console.log(promise.indexOf("a"));
console.log(promise.indexOf("become"));
console.log(promise.indexOf("becme"));

console.log(promise.split(" "));
console.log(promise.substring("will"));

var nam1 = 30;
var nam2 = 33;
console.log(nam1 + nam2);

var nam3 = 3;
var nam5 = 3.4;
console.log(nam3 + nam5);

var nam22 = '44';
var nam44 = 2.3;
nam22 = parseFloat(nam22);
console.log(nam22 + nam44);

var nam22 = '44';
var nam44 = 2.3;
nam22 = +nam22;
console.log(nam22 + nam44);

var num11 = 0.1;
var num12 = 0.2;

// fix
var total = num11 + num12;
total = total.toFixed(5)
console.log(total);

// simple math

var price1 = 24;
var price3 = 53;
total = price1 + price3;
console.log(total);

var price1 = 24;
var price3 = 53;
total = price3 - price1;
console.log(total);

var price1 = 24;
var price3 = 53;
total = price3 * price1;
console.log(total);

var price1 = 24;
var price3 = 53;
total = price3 / price1;
console.log(total);

var price1 = 20;
var price3 = 64;
total = price3 % price1;
console.log(total);

// operator and incresing/decresing

var price1 = 20;
var price3 = 64;
var price3 = price3 + 2;
total = price3 + price1;
console.log(total);

var price1 = 20;
var price3 = 64;
price3--;
total = price3 + price1;
console.log(total);

var price1 = 20;
var price3 = 64;
price3++;
total = price3 + price1;
console.log(total);

var price1 = 20;
var name = "mahadi";

total = price3 + name;
console.log(total);

var name = 'mahadi';
var price1 = 20;
total = name + price1;
console.log(total);

var name = 'mahadi';
var price1 = 20;
total = name + " " + price1;
console.log(total);

// absolute math

var number = -5;
var absoluteNumber = Math.abs(number);
console.log(absoluteNumber);

var number = 5;
var absoluteNumber = Math.abs(number);
console.log(absoluteNumber);


var number = 5.55555;
var absoluteNumber = Math.round(number);
console.log(absoluteNumber);

var number = 5.55555;
var absoluteNumber = Math.ceil(number);
console.log(absoluteNumber);

var number = 5.00000;
var absoluteNumber = Math.ceil(number);
console.log(absoluteNumber);

var number = 5.55555;
var absoluteNumber = Math.floor(number);
console.log(absoluteNumber);

var number = 5;
var absoluteNumber = Math.random();
console.log(absoluteNumber);

// condition if else

var price = 20;
if (price > 20){
    console.log("this is true");
}else{
    console.log("this is false");
}

var price = 20;
if (price < 20){
    console.log("this is true");
}else{
    console.log("this is false");
}

var price = 20;
if (price = 20){
    console.log("this is true");
}else{
    console.log("this is false");
}

var price = 20;
if (price <= 20){
    console.log("this is true");
}else{
    console.log("this is false");
}

var price = 20;
if (price == 20){
    console.log("this is true");
}else{
    console.log("this is false");
}

var price = 20;
if (price === 20){
    console.log("this is true");
}else{
    console.log("this is false");
}

var price = '20';
if (price != 20){
    console.log("this is true");
}else{
    console.log("this is false");
}

//multiple condition

var jobPaiso = true;
var savingAmount = 4000; 
if(jobPaiso == true && savingAmount > 20000){
    console.log("yes, you are great");
}else{
    console.log("nope sorry bro");
}

var jobPaiso = true;
var savingAmount = 4000; 

if(jobPaiso == true || savingAmount > 20000){
    console.log("yes, You are great");
}
else if (jobPaiso == true){
    console.log("Okey bor just wait");
}
else{
    console.log("Nope sorry bro");
}
 
// date
var date = new date('2000-12-12');
console.log('date');

