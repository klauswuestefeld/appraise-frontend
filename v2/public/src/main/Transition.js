window.addEventListener("load", function() {
     document.getElementById("scnLog").onclick = function() {logScreen()};
     document.getElementById("scnAdm").onclick = function() {admScreen()};
     document.getElementById("scnApp").onclick = function() {appScreen()};
});

function logScreen(){
	document.getElementById("session").style.display = "none";
	document.getElementById("menu").style.display = "none";
}

function admScreen(){
	document.getElementById("session").style.display = "flex";
	document.getElementById("menu").style.display = "flex";
}


function appScreen(){
	document.getElementById("session").style.display = "flex";
	document.getElementById("menu").style.display = "flex";
}
