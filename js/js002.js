// https://rocits.github.io/X/js/js002.js

links=document.getElementsByTagName('a');
	for(var l= 0; l < links.length; l++)
	{ var alllinks; alllinks += links[l].outerHTML;links[l].href;alllinks += '' ;
	 alllinks += links[l].title+'title';alllinks += '' };

window.open('data:text/html,'+encodeURI(alllinks),'_blank','toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400');document.write('URL,Title<br>'+alllinks);
