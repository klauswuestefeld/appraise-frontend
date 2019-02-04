window.addEventListener("load", function() {
     document.getElementById("scnLog").onclick = function() {logScreen()};
     document.getElementById("scnAdm").onclick = function() {admScreen()};
     document.getElementById("scnApp").onclick = function() {appScreen()};
     document.getElementById("scnAdmDisabled").onclick = function() {disabledScreen()};
     document.getElementById("scnAdmRed").onclick = function() {redScreen()};
     document.getElementById("scnAdmGreen").onclick = function() {greenScreen()};
     document.getElementById("scnMagicLog").onclick = function() {magicLogScreen()};
});

function logScreen() {
    setDisplay({
       "session": false
    });
	document.getElementById("menu").style.display = "none";
	document.getElementById("conLog").style.display = "block";
	document.getElementById("conAdm").style.display = "none";
	document.getElementById("conApp").style.display = "none";
	document.getElementById("conDisabled").style.display = "none";
	document.getElementById("conRed").style.display = "none";
	document.getElementById("conGreen").style.display = "none";
	document.getElementById("conMagicLog").style.display = "none";
}

function admScreen() {
    setDisplay({
       "session": true
    });

	document.getElementById("session").classList.remove('force-display-none');
	document.getElementById("menu").style.display = "flex";
	document.getElementById("conAdm").style.display = "block";
	document.getElementById("conLog").style.display = "none";
	document.getElementById("conApp").style.display = "none";
	document.getElementById("conDisabled").style.display = "none";
	document.getElementById("conRed").style.display = "none";
	document.getElementById("conGreen").style.display = "none";
	document.getElementById("conMagicLog").style.display = "none";
}


function appScreen(){
	document.getElementById("session").style.display = "flex";
	document.getElementById("menu").style.display = "flex";
	document.getElementById("conApp").style.display = "block";
	document.getElementById("conAdm").style.display = "none";
	document.getElementById("conLog").style.display = "none";
	document.getElementById("conDisabled").style.display = "none";
	document.getElementById("conRed").style.display = "none";
	document.getElementById("conGreen").style.display = "none";
	document.getElementById("conMagicLog").style.display = "none";
}

function disabledScreen(){
	document.getElementById("session").style.display = "flex";
	document.getElementById("menu").style.display = "flex";
	document.getElementById("conApp").style.display = "none";
	document.getElementById("conAdm").style.display = "none";
	document.getElementById("conLog").style.display = "none";
	document.getElementById("conDisabled").style.display = "block";
	document.getElementById("conRed").style.display = "none";
	document.getElementById("conGreen").style.display = "none";
	document.getElementById("conMagicLog").style.display = "none";
}

function redScreen(){
	document.getElementById("session").style.display = "flex";
	document.getElementById("menu").style.display = "flex";
	document.getElementById("conApp").style.display = "none";
	document.getElementById("conAdm").style.display = "none";
	document.getElementById("conLog").style.display = "none";
	document.getElementById("conDisabled").style.display = "none";
	document.getElementById("conRed").style.display = "block";
	document.getElementById("conGreen").style.display = "none";
	document.getElementById("conMagicLog").style.display = "none";
}

function greenScreen(){
	document.getElementById("session").style.display = "flex";
	document.getElementById("menu").style.display = "flex";
	document.getElementById("conApp").style.display = "none";
	document.getElementById("conAdm").style.display = "none";
	document.getElementById("conLog").style.display = "none";
	document.getElementById("conDisabled").style.display = "none";
	document.getElementById("conRed").style.display = "none";
	document.getElementById("conGreen").style.display = "block";
	document.getElementById("conMagicLog").style.display = "none";
}

function magicLogScreen(){
	document.getElementById("session").style.display = "flex";
	document.getElementById("menu").style.display = "flex";
	document.getElementById("conApp").style.display = "none";
	document.getElementById("conAdm").style.display = "none";
	document.getElementById("conLog").style.display = "none";
	document.getElementById("conDisabled").style.display = "none";
	document.getElementById("conRed").style.display = "none";
	document.getElementById("conGreen").style.display = "none";
	document.getElementById("conMagicLog").style.display = "block";
}

function setDisplay(displaysById){
    for (id in displaysById) {
        if (displaysById[id]) {
 	        document.getElementById(id).classList.remove('force-display-none');
        } else {
            document.getElementById(id).classList.add('force-display-none');
        }
    }
}
