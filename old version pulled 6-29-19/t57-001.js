var windowSize = window.innerHeight;
var scrollAmt = window.scrollY;

	
var scrollPercent = scrollAmt/windowSize;
var scroller = 0;

function checkScroll() {
	var title = document.getElementById("title");
	scrollAmt = window.scrollY;
	scrollPercent = scrollAmt/windowSize;
	
	title.innerHtml = "<h1>T57-001</h1><br><h2>A Narrative Design Postmortem</h2>";
						
	//title.innerHTML = "<h1>T57-001 " + windowSize + " " + scrollAmt + " " + scrollPercent + "</h1>";
	title.style.opacity = .7-scrollPercent;
	
	scroller+=1;
}

window.addEventListener("scroll",checkScroll());