// https://rocits.github.io/X/js/js001.js

var elements = document.getElementsByTagName('*');
var l = elements.length;
var attributes = '';

for (var i = 0; i < l; i++){
  if(attributes != "href"||"src"){
 elements[i].removeAttribute("*");
 console.log = i;}};

/*links=document.getElementsByTagName(%22a%22);
%20for%20(var%20l%20=%200;%20l%20<%20links.length;%20l++){%20var%20alllinks;
%20alllinks%20+=%20links[l].outerHTML;
links[l].href;
alllinks%20+=%20%22<br><br>%20%22%20;
alllinks%20+=%20links[l].title+%22%C2%A0:%C2%A0%22;
alllinks%20+=%20%22%22%20};
window.open(%22data:text/html,%22+encodeURI(alllinks),%22_blank%22,%22toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400%22);document.write(%22URL,Title<br>%22+alllinks);
*/

