var friendsAge = [12, 23, 53, 533];
var myAge = friendsAge[2];
friendsAge[1] = 21;
var position = friendsAge.indexOf(53);
console.log(position);

// push (ADD ARRAY)
var friendsAge = [12, 3, 42, 4, 44];
friendsAge.push(14);
friendsAge.push(32);
friendsAge.push(99);
console.log(friendsAge);

//ARRAY LENGTH
var friendsAge = [12, 3, 42, 4, 44];
friendsAge.push(14);
friendsAge.push(32);
console.log(friendsAge.length);

//POP (DELETE/REMOVE ARRAY)
var friendsAge = [12, 3, 42, 4, 44];
friendsAge.pop();
console.log(friendsAge);

var friendsAge = [12, 3, 42, 4, 44];
friendsAge.pop();
friendsAge.push(5);
console.log(friendsAge);

//add element at the beginning 
var friendsAge = [12, 3, 42, 4, 44];
friendsAge.unshift(22);
friendsAge.unshift(23);
friendsAge.unshift(24);
console.log(friendsAge);

//REMOVE ELEMENT AT THE BEGINNING
var friendsAge = [12, 3, 42, 4, 44];
friendsAge.shift();
console.log(friendsAge);

var friendsAge = [66, 12, 3, 42, 4, 44];
friendsAge.shift();
console.log(friendsAge);

//ARRAY SLICE
var friendsName = ["mahadi", "hasan", "sobuj", "jahid"]
var removeFriends = friendsName.slice(2);
console.log(removeFriends);
// console.log(friendsName);

var friendsName = ["mahadi", "hasan", "sobuj", "jahid", "santo", "sahid", "karim"]
var removeFriends = friendsName.slice(2, 4);
console.log(removeFriends);
console.log(friendsName);




