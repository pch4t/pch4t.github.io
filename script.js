window.onload = function(){
	Array.from(document.querySelectorAll('a')).map(function(a){
		var l = a.getAttribute('title');
		if (l) a.className = l>=5000 ? 'a' : l>=1000 ? 'b' : l>=500 ? 'c' : l>=100 ? 'd' : '';
		if (location.host == 'pchat.cf') {
			var h = a.getAttribute('href');
			a.setAttribute('href',h=='../index.html'?'../':h.slice(0,-5))
		}
	});
}