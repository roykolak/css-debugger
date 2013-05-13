(function(){
	var url = 'http://www.ninjawars.net/css/debugger.css';
	var link=document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("type", "text/css");
	link.setAttribute("href", url);
	document.getElementsByTagName("head")[0].appendChild(link);
})();
