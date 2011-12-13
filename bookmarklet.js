javascript:(function(){
	if (!document.getElementById('awesomestylesheet')){
		var objHead = document.getElementsByTagName('head'); 
		if (objHead[0]){if (document.createElementNS && objHead[0].tagName == 'head') var objCSS = objHead[0].appendChild(document.createElementNS('http://www.w3.org/1999/xhtml', 'link')); 
		else var objCSS = objHead[0].appendChild(document.createElement('link')); 
		objCSS.id = 'awesomestylesheet'; objCSS.rel = 'stylesheet'; 
		objCSS.href = 'http://buttonpresser.com/CLRDX/styles/countries.css'; 
		objCSS.type = 'text/css';
	}
}
})()