//Document Object Model (DOM) is a programming interface for HTML. 
//two built-in functions to select nodes in the DOM
//both functions take a CSS selector string as a parameter
document.querySelector('a'); //use document as the node
document.querySelectorAll('a');
//examples - using 'a' element in html/css
let firstA = document.querySelector('a');
console.log(firstA);
console.log(firstA.length);//undefined - only one element
console.log(firstA[0]);//undefined

let a = document.querySelectorAll('a');
console.log(a);
console.log(a.length);
console.log(a[0]);
console.log(a[7]);

a.forEach(element => console.log(element))

console.log(firstA.parentElement);
console.log(firstA.nextElementSibling);
console.log(firstA.previousElementSibling);
console.log(firstA.firstElementChild);
console.log(firstA.lastChild);
console.log(firstA.childElementCount);

let edu = document.querySelectorAll('.edu-employ__item > *');
console.log(edu);

//innerHTML - generally not recommended 
/*
let title = document.querySelector('.profile-container h1');
console.log(title);
title.innerHTML = ('<strong>Creative Developer</strong>');
*/
//add element
let title = document.querySelector('.profile-container h1');
console.log(title);
let newLine = document.createElement('a');// tag naem
newLine.innerHTML = " & Designer";
title.appendChild(newLine);

//move element
title = document.querySelector('.typy-animation');
console.log(title);
let parag = title.nextElementSibling;
console.log(parag);
parag.appendChild(title);