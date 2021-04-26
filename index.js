"use strict";

let askUserName = prompt("Welcome In Site\n Whats Your Name");

console.log(askUserName);

alert("Welcome " + askUserName + " in site");
/**
// for (let i = 0; i < 3; i++) {
//   let askMyName = prompt(
//     "What You Think my name From This Name [Qasem,Ahmad,Mohammad]"
//   ).toLowerCase;
//   console.log(askMyName);

//   if (askUserName == "qasem") {
//     alert("Yes Good My Name's Qasem and I'm owner This web site");
//   } else {
//     alert("OOOH sorry Is Not Correct");
//     alert("thank You For Visit my site");
//   }
// }



 */

let askMyName = prompt(
  "What You Think my name From This Name [Qasem,Ahmad,Mohammad]"
).toLowerCase();
console.log(askMyName);

if (askMyName == "qasem") {
  alert("Yes Good My Name's Qasem and I'm owner This web site");
 
} else {
  alert("OOOH sorry Is Not Correct");
}
/*************************************************** */

let myAge = prompt("What You tink My Age less than 30 years?").toLowerCase();
console.log(myAge);

if (myAge == "yes" || myAge == "y") {
  alert("Yes My Age Is 28");
 
} else {
  alert("OOh Sorry it's Not Correct my age is 28");
}
/***************************** */

let myEduction = prompt(
  "What do you think I'm studied? \n [Media or Computr Since or I'm Not Stuided]"
).toLowerCase();
console.log(myEduction);

if (myEduction == "media") {
  alert("Yess Good my Stuided Media and press");
} else {
  alert("ooh Soory I'm Stuided Media and press");
}
/************************ */

let myNationality = prompt(
  "What Do You think My nationalityt?\n [Egyptian, Jordanian, Syrian, Lebanese]"
).toUpperCase();
console.log(myNationality);
if (myNationality == "SYRIAN") {
  alert("Yes I'm Syrian");
} else {
  alert("ooh Soory, I'm Syrian");
}
//******************** */

let askCode = prompt("do you show me y,n").toLowerCase();
if (askCode == "yes" || askCode == "y") {
  document.write(
    '<img src="https://i.ibb.co/XC3xYGy/75634309.jpg" alt="Qase">'
  );
}

alert("Thank "+askUserName+  "for visit site")


document.write('<span id="username">My Name\'s Qasem </span><br> <span id="age">My age Is 28</span> <span id="age">my Stuided Media and press</span> <span id="age"> and I\'m Syrian</span>')