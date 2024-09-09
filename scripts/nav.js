var hamburger_enabled = false;

function hamburger() {

	if (hamburger_enabled) {
		document.getElementById("hamburger").classList.remove("is-active");
		document.getElementById("mobile-nav-buttons").style.display = "none";
		document.getElementsByTagName('body')[0].style.overflowY = "visible";

	}
	else {
		document.getElementById("hamburger").classList.add("is-active");
		document.getElementById("mobile-nav-buttons").style.display = "contents";
		document.getElementsByTagName('body')[0].style.overflowY = "hidden";

	}

	hamburger_enabled = !hamburger_enabled;

}

window.onload = function() {

	window.onresize();

}

window.onresize = function() {
	var hamb = document.getElementById("hamburger-container");
	var nav = document.getElementById("nav-buttons");
	var register = document.getElementById("nav-register");
	var nav_container = document.getElementsByClassName("nav")[0];

    if (window.innerWidth <= 950) {
    	hamb.style.display = 'contents';
    	nav.style.display = 'none';
    	register.style.display = 'none';
    	nav_container.style.gridTemplateColumns = "2fr 1fr 1fr";
    } else {
    	hamb.style.display = 'none';
    	nav.style.display = 'flex';
    	register.style.display = 'block';
    	register.style.float = 'right';
    	nav_container.style.gridTemplateColumns = "1fr 2fr 1fr";
    	document.getElementById("hamburger").classList.remove("is-active");
		document.getElementById("mobile-nav-buttons").style.display = "none";
		document.getElementsByTagName('body')[0].style.overflowY = "visible";

    }
}
