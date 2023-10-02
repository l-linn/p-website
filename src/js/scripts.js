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
