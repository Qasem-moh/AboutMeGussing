"use strict";
let movies = document.getElementsByClassName("movies");

let myMovie = [
  "The Assistant",
  "The Nest",
  "Never Rarely Sometimes Always",
  "Beanpole",
  "Minari",
  "Da 5 Bloods",
  "First Cow",
  "David Byrne’s American Utopia",
  "Nomadland",
  "Small Axe: Lovers Rock",
];
//array iamge
let imageMovies = [
  "https://static.rogerebert.com/redactor_assets/pictures/5fd647fc306fcc0c9f0a7792/content_Assistant.jpg",
  "https://static.rogerebert.com/redactor_assets/pictures/5fd64807306fcc0ca50a77de/content_The_Nest.jpg",
  "https://static.rogerebert.com/redactor_assets/pictures/5fd64811b8b50d6c7dbc8b74/content_Never_Rarely.jpg",
  "https://static.rogerebert.com/redactor_assets/pictures/5fd6481a306fcc0ca50a77df/content_Beanpole.jpg",
  "https://static.rogerebert.com/redactor_assets/pictures/5fd64823b8b50d6c78bc8b95/content_Minari.jpg",
  "https://static.rogerebert.com/redactor_assets/pictures/5fd6482cb8b50d6c76bc8b93/content_Da_5_Bloods.jpg",
  "https://static.rogerebert.com/redactor_assets/pictures/5fd64834306fcc0ca50a77e0/content_First_Cow.jpg",
  "https://static.rogerebert.com/redactor_assets/pictures/5fd64840306fcc0c9d0a7760/content_American_Utopia.jpg",
  "https://static.rogerebert.com/redactor_assets/pictures/5fd6484c306fcc0c9f0a7793/content_Nomadland.jpg",
  "https://static.rogerebert.com/redactor_assets/pictures/5fd64856b8b50d6c78bc8b96/content_Lovers_Rock.jpg",
];

renderMovie();
async function renderMovie() {
  for (let i = 0; i < myMovie.length; i++) {
    console.log(myMovie[i]);
    document.getElementById("movies").innerHTML += `<li>${myMovie[i]}</li>`;
  }
}
renderImageMovies();
function renderImageMovies() {
  for (let i = 0; i < imageMovies.length; i++) {
    console.log(imageMovies[i]);
    document.getElementById(
      "imageMovies"
    ).innerHTML += `<img src="${imageMovies[i]}" alt="" srcset="">
        `;
  }
}
// /************************* */
let userName = prompt("Whats Your Name?");

while (userName === "" || userName === null || userName.length < 3) {
  alert("Please Enter Correct name");
  userName = prompt("Whats Your Name?");
  break;
}
alert("Welcome " + userName);

// /*********************************** */
function gussName() {
  let nameArr = ["qasem", "ahmad", "mohammad"];
  let askMyName = prompt(
    "What You Think my name From This Name  Qasem,Ahmad,Mohammad "
  ).toLowerCase();
  console.log(askMyName);

  for (let i = 0; i < userName.length; i) {
    if (askMyName === nameArr[i]) {
      console.log(nameArr[i]);
      alert("Yes Good, My Name's Qasem and I'm owner This web site");
      break;
    } else {
      alert("ooH sorry Is Not Correct my name's Qasem");
      break;
    }
  }
}
gussName();

/*************************************** */
function gussEducation() {
  let myEduction = prompt(
    "What do you think I'm studied? [Media or Computr Since or I'm Not Stuided]"
  ).toLowerCase();
  console.log(myEduction);

  if (myEduction == "media") {
    alert("Yes, Good my Stuided Media and press");
  } else {
    alert("ooh Soory I'm Stuided Media and press");
  }
}
gussEducation();

//university******************************
function gussUniversity() {
  let university = prompt(
    "what is a good university in your think?"
  ).toUpperCase();
  console.log(university);
  let arrUniversity = [
    "AABU",
    "AOU",
    "JU",
    "YU",
    "MUTAH",
    "JUST",
    "HU",
    "BAU",
    "AHU",
    "TTU",
    "GIU",
  ];

  for (let i = 0; i < arrUniversity.length; i++) {
    if (university === arrUniversity[i]) {
      alert("I Think" + arrUniversity[i] + " It's favorit university");
      console.log(arrUniversity[i]);
    }
  }
}

// //******************** */
let askCode = prompt("do you think I like code y,n").toLowerCase();
if (askCode == "yes" || askCode == "y") {
  alert("Yes I like code");
} else {
  alert("Yes I like code And It passion ");
}
/*********************************************** */
let myAge = prompt("What You think My Age?");
console.log(myAge);
let art = 6;
while (myAge !== "28" && art > 0 && art < 7) {
  myAge = prompt("What You think My Age?");
  art = art - 1;
  if (art == 0) {
    alert("My Age Is 28");
  }
}
// /************************ */
let artt = 6;
let myNationality = prompt(
  "What Do You think My nationalityt?\n [Egyptian, Jordanian, Syrian, Lebanese, syria, سوريا، الاردن]"
).toLowerCase();
console.log(myNationality);

while (
  myNationality == "syrian" ||
  myNationality == "syria" ||
  myNationality == "سوريا"
) {
  myNationality = prompt(
    "What Do You think My nationalityt?\n [Egyptian, Jordanian, Syrian, Lebanese, syria, سوريا، الاردن]"
  ).toLowerCase();
  art = art - 1;
  if (art == 0) {
    alert("ooh Soory, I from" + myNationality);
  }
  alert("ooh Soory, I'm Syrian");
}

// //************************ */

let askMovies = prompt("Do You Like movies?").toLowerCase();
console.log;
if (askMovies == "yes" || askMovies == "y") {
  moveuser = prompt("Whats Your favorite Movie?");
  alert(
    "Your favorite movie is " + moveuser + "and my favorite movie is 'First Cow' ");
}

let rang = prompt("How much do you give a rating of 10 for my work?");

// while(typeof(rang)!== Number){
//     alert("please Enter Number")
//     rang = prompt("How much do you give a rating of 10 for my work?");
// }
console.log(rang);
alert("Thank you " + userName + "visit");
