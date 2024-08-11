var str = 'Wonderful, Joyful';
var str2 = 'Happiness, Time, Task, Apple';
var re = /\b(?=[^Aa\s]{6,})[^Aa\s]{6,}\b/g;

console.log(str.match(re));
console.log(str2.match(re));
