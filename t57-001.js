var windowSize = window.innerHeight;
var scrollAmt = window.scrollY;
var documentWidth = document.innerWidth;
var title = document.getElementById("title");
var itchTitle = document.getElementById("get");
/*
var tl2 = false;
var tl22 =false;
*/

if (typeof(scrollAmt)=="undefined") {
	title.style.position = "relative";
}

var scrollPercent = scrollAmt/windowSize;
var scroller = 0;

/*
var links = document.getElementsByClassName("link");
var timeline1 = document.getElementsByClassName("timeline1");
var timeline2 = document.getElementsByClassName("timeline2");
*/

function checkScroll() {
	var title = document.getElementById("title");
	scrollAmt = window.scrollY;
	scrollPercent = scrollAmt/windowSize;
	
	title.innerHtml = "<h1>T57-001</h1><br><h2>A Narrative Design Postmortem</h2>";
						
	//title.innerHTML = "<h1>T57-001 " + windowSize + " " + scrollAmt + " " + scrollPercent + "</h1>";
	/*title.style.opacity = -scrollPercent;*/
	
	var titleH1 = title.getElementsByTagName("h1");
	var titleH2 = title.getElementsByTagName("h2");
	
	titleH1[0].style.opacity = .7 - scrollPercent;
	titleH2[0].style.opacity = .5 - scrollPercent;
	
	if (scrollPercent > .47){
		itchTitle.style.display = "none";
	}
	else { itchTitle.style.display = "flex"; }
	
	itchTitle.style.opacity = 1.6 - (scrollPercent + .7)
	
	scroller+=1;
	
	
}

/*
function setTimeline(){
	//declare variables to accumulate the total width of the elements on a line
	var menuWidth = document.getElementById("menu").offsetWidth;
	var sizeCount = 0;
	var lengthCount = 0;
	var line1 = 0;
	var line2 = 0;
	var lastLink = 0;
	timeline2[0].style.marginTop = links[0].offsetHeight + 5 + "px";
	
	//iterates through each element in the menu so that it can find the total width of each line of the menu flex items
	do {
		sizeCount += links[lengthCount].offsetWidth;
		
		
		if (sizeCount > menuWidth && line1 == 0) {
			line1 = sizeCount - links[lengthCount].offsetWidth - (links[lengthCount-1].offsetWidth / 2) - (links[0].offsetWidth/2);
			sizeCount = links[lengthCount].offsetWidth;
			lastLink = lengthCount;
			tl2=true;
			
		}
		lengthCount++;
	} while(lengthCount < links.length);
	
	if(lastLink==0){
				timeline2[0].style.transition = 0 + "s";
				timeline2[0].style.width=0 + "px";
				tl22=false;
			}
	
	if (line1 != 0) {
		
		line2 = sizeCount - (links[6].offsetWidth / 2) - 21;
		timeline2[0].style.display = "block";
		timeline1[0].style.borderBottom = "5px solid white";
	}
	
	else {
		line1 = sizeCount - (links[0].offsetWidth / 2) - (links[lengthCount-1].offsetWidth / 2);
		timeline2[0].style.height = 0 + "px";
		//timeline2[0].style.width = 0 + "px";
		timeline2[0].style.display = "none";
		timeline1[0].style.height = "0px";
		timeline1[0].style.borderBottom = "0px";
		timeline2[0].style.marginLeft = (links[0].offsetWidth / 2) + "px";
		sizeCount=0;
		tl22=false;
	}
	
	
	if(timeline2[0].style.width == "0px" && line2 !=0 && tl22== false){
		tl22=true;
		timeline2[0].style.transition = "1s, width 1s ease-out 1s, margin-left 1s ease-out 1s"
		//timeline2[0].style.transitionDelay = "1s"
		timeline2[0].style.width= (links[0].offsetWidth/2)-16 + "px";
		timeline2[0].style.marginLeft = 16 + "px";
		timeline1[0].style.height = "50.5px";
		setTimeout(createTimeline2, 2000, line2);
	}
	
	else {
		if( tl2 == true){
		timeline2[0].style.width = line2 + "px";
		timeline2[0].style.transition = "1s"
		if (line2 !=0) {
		
		timeline1[0].style.height = "50.5px";
		timeline2[0].style.height = links[0].offsetHeight - 59.5 + "px";
	
		timeline2[0].style.marginTop = links[0].offsetHeight + 5 + "px";
		timeline2[0].style.marginLeft = 16 + "px";
		}
		}
	
	}
		
	
	timeline1[0].style.width = line1 + "px";
	//timeline2[0].style.width = line2 + "px";
	
	timeline1[0].style.marginTop = links[0].offsetHeight - 50.5 + "px";
	timeline1[0].style.marginLeft = (links[0].offsetWidth / 2) + "px";

	

	/*if (line2 !=0) {
		
		timeline1[0].style.height = "50.5px";
		timeline2[0].style.height = links[0].offsetHeight - 59.5 + "px";
	
		timeline2[0].style.marginTop = links[0].offsetHeight + 5 + "px";
		timeline2[0].style.marginLeft = 16 + "px";
	}
}
	
setTimeline();

function createTimeline2(linetwo) {
	timeline2[0].style.transition = "1s, width 1s ease 1s";
	timeline2[0].style.width = linetwo + "px";
	timeline2[0].style.height = links[0].offsetHeight - 59.5 + "px";
	//timeline2[0].style.border = "7px solid green";
	tl2 =true;
	tl22=false;
}

var screenSizeChk1 = window.matchMedia("(max-width: 768px)");
var screenSizeChk2 = window.matchMedia("(max-width: 590px)");

function responsiveMenu1(s) {
	
	if(s.matches){		
		links[0].innerHTML = '<a href="#">What is it?</a> <a href="#"><div class="menuButton"></div></a>';
		links[1].innerHTML = '<a href="#">Emotional Mech Jam</a> <a href="#"><div class="menuButton"></div></a>';
		links[2].innerHTML = '<a href="#">Team</a> <a href="#"><div class="menuButton"></div></a>';
		links[3].innerHTML = '<a href="#">First Sketch</a> <a href="#"><div class="menuButton"></div></a>';
		links[4].innerHTML = '<a href="#">Overdeveloped</a> <a href="#"><div class="menuButton"></div></a>';
		links[5].innerHTML = '<a href="#">Discoverying Characters</a> <a href="#"><div class="menuButton"></div></a>';
		links[6].innerHTML = '<a href="#">The Player</a> <a href="#"><div class="menuButton"></div></a>';
	}
	
	else {
		links[0].innerHTML = '<a href="#">What is T57-001?</a>	<a href="#"><div class="menuButton"></div></a>';
		links[1].innerHTML = '<a href="#">Emotional Mech Jam</a> <a href="#"><div class="menuButton"></div></a>';
		links[2].innerHTML = '<a href="#">Meet the Team</a> <a href="#"><div class="menuButton"></div></a>';
		links[3].innerHTML = '<a href="#">Initial Sketch</a> <a href="#"><div class="menuButton"></div></a>';
		links[4].innerHTML = '<a href="#">Overdeveloped and Overscoped</a> <a href="#"><div class="menuButton"></div></a>';
		links[5].innerHTML = '<a href="#">Discovering your Characters</a><a href="#"><div class="menuButton"></div></a>';
		links[6].innerHTML = '<a href="#">What is the Player?</a> <a href="#"><div class="menuButton"></div></a>';
	}
	
	for (i=0; i < links.length; i++) {
		links[i].style.display = "block";
	}
}
function responsiveMenu2(s) {
	if(s.matches){		
		links[0].innerHTML = '<a href="#"><div class="menuButton"></div></a><a href="#">What is it?</a>';
		links[1].innerHTML = '<a href="#"><div class="menuButton"></div></a><a href="#">Emotional Mech Jam</a> ';
		links[2].innerHTML = '<a href="#"><div class="menuButton"></div></a><a href="#">Team</a>';
		links[3].innerHTML = '<a href="#"><div class="menuButton"></div></a><a href="#">First Sketch</a>';
		links[4].innerHTML = '<a href="#"><div class="menuButton"></div></a><a href="#">Overdeveloped</a>';
		links[5].innerHTML = '<a href="#"><div class="menuButton"></div></a><a href="#">Discoverying Characters</a>';
		links[6].innerHTML = '<a href="#"><div class="menuButton"></div></a><a href="#">The Player</a>';
	
	
	for (i=0; i<links.length; i++) {
		links[i].style.display = "inline-block";
	}
	}
}
	

responsiveMenu1(screenSizeChk1);
responsiveMenu2(screenSizeChk2);


screenSizeChk1.addListener(responsiveMenu1);
screenSizeChk2.addListener(responsiveMenu2);

window.onresize = setTimeline;
//document.onresize = setTimeline();
	/*set the width of timelines to the lines 
	and add appropriate heights if there is a line 2 
	Also, double check if and while loop syntax */
	

window.addEventListener("scroll",checkScroll());