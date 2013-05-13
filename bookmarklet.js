(function(){
	var url = 'https://raw.github.com/BitLucid/css-debugger/bookmarklet/debugger.css';
	var link=document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("type", "text/css");
	link.setAttribute("href", url);
	document.getElementsByTagName("head")[0].appendChild(link);
})();