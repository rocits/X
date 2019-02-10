// https://rocits.github.io/X/js/js001.js

var elements = document.getElementsByTagName('*');
var l = elements.length;

for (var i = 0; i < l; i++){
Array.prototype.slice.call(elements[i].attributes).forEach(function(item) { 
      if(item.name != "href"||"src"){
      elements[i].removeAttribute(item.name);}
      else
      console.log(item.name);                                              };
                          );
                            };
