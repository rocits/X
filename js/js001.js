// https://rocits.github.io/X/js/js001.js

var elements = document.getElementsByTagName('*');
var l = elements.length;
for (var i = 0; i < l; i++){
if(elements[i].attributes[0] != "href"||"src"){
var attnames += elements[i].attributes;}}
console.log(attnames);

Array.prototype.slice.call(attnames).forEach(function(item) { 
      elements.removeAttribute(item.name);}
