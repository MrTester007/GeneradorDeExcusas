import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateExcuse() {
  let who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "My cat",
    "My girlfriend"
  ];
  let action = ["ate", "peed", "crushed", "broke", "punch"];
  let what = ["my homework", "my phone", "the car", "my leg"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let excuse = `${getRandomElement(who)} ${getRandomElement(
    action
  )} ${getRandomElement(what)} ${getRandomElement(when)}.`;
  return excuse;
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
};
