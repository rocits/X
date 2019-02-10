// https://rocits.github.io/X/js/js001.js

var elements = document.getElementsByTagName('*');
var l = elements.length;
var attributes = '';

for (var i = 0; i < l; i++){
  if(attributes != "href"||"src"){
 elements[i].removeAttribute("*");
 console.log = i;}};
