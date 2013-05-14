(function(){
	var url = 'http://bitlucid.github.io/css-debugger/debugger.css';
	var link=document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("type", "text/css");
	link.setAttribute("href", url);
	document.getElementsByTagName("head")[0].appendChild(link);
    alert('Debugging css added to page.');
})();
