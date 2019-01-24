window.addEventListener("load", function() {
     document.getElementById("scnLog").onclick = function() {logScreen()};
     document.getElementById("scnAdm").onclick = function() {admScreen()};
     document.getElementById("scnApp").onclick = function() {appScreen()};
});

function logScreen(){
	document.getElementById("session").style.display = "none";
	document.getElementById("menu").style.display = "none";
	document.getElementById("conLog").style.display = "flex";
	document.getElementById("conAdm").style.display = "none";
	document.getElementById("conApp").style.display = "none";
}

function admScreen(){
	document.getElementById("session").style.display = "flex";
	document.getElementById("menu").style.display = "flex";
	document.getElementById("conAdm").style.display = "flex";
	document.getElementById("conLog").style.display = "none";
	document.getElementById("conApp").style.display = "none";
}


function appScreen(){
	document.getElementById("session").style.display = "flex";
	document.getElementById("menu").style.display = "flex";
	document.getElementById("conApp").style.display = "flex";
	document.getElementById("conAdm").style.display = "none";
	document.getElementById("conLog").style.display = "none";
}
