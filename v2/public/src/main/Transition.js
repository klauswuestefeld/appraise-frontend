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
       "session": false,
       "menu": false,
       "conLog": true,
       "conAdm": false,
       "conApp": false,
       "conDisabled": false,
       "conRed": false,
       "conGreen": false,
       "conMagicLog": false
    });
}

function admScreen() {
    setDisplay({
       "session": true,
       "menu": true,
       "conLog": false,
       "conAdm": true,
       "conApp": false,
       "conDisabled": false,
       "conRed": false,
       "conGreen": false,
       "conMagicLog": false
    });
}


function appScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "conLog": false,
       "conAdm": false,
       "conApp":true,
       "conDisabled": false,
       "conRed": false,
       "conGreen": false,
       "conMagicLog": false
    });
}

function disabledScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "conLog": false,
       "conAdm": false,
       "conApp": false,
       "conDisabled": true,
       "conRed": false,
       "conGreen": false,
       "conMagicLog": false
    });
}

function redScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "conLog": false,
       "conAdm": false,
       "conApp": false,
       "conDisabled": false,
       "conRed": true,
       "conGreen": false,
       "conMagicLog": false
    });
}

function greenScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "conLog": false,
       "conAdm": false,
       "conApp": false,
       "conDisabled": false,
       "conRed": false,
       "conGreen": true,
       "conMagicLog": false
    });
}

function magicLogScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "conLog": false,
       "conAdm": false,
       "conApp": false,
       "conDisabled": false,
       "conRed": false,
       "conGreen": false,
       "conMagicLog": true
    });
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
