// https://rocits.github.io/X/js/js001.js

var images = document.getElementsByTagName('*');var l = images.length;for (var i = 0; i < l; i++) {    images[i].removeAttribute("class" && "jsname" && "jslog" && "aria-label" && "autofocus" && "target" && "jsaction" && "jscontroller" );
images[i].removeAttribute("data-pid" && "draggable" && "id" && "aria-expanded" && "aria-hidden" && "title" && "data-pid" && "aria-expanded" && "role" && "tabindex");                                                                                                                         images[i].removeAttribute("id" && "style" && "aria-label" && "expanded");}
/*
var elements = document.getElementsByTagName('*');
var l = elements.length;
for (var i = 0; i < l; i++){
if(elements[i].attributes[0] != "href"||"src"){
var attnames += elements[i].attributes;}}
console.log(attnames);

Array.prototype.slice.call(attnames).forEach(function(item) { 
      elements.removeAttribute(item.name);} */
