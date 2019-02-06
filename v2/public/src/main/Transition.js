window.addEventListener("load", function() {
     document.getElementById("scnLog").onclick = function() {logScreen()};
     document.getElementById("scnAdm").onclick = function() {admScreen()};
     document.getElementById("scnApp").onclick = function() {appScreen()};
     document.getElementById("scnAdmDisabled").onclick = function() {disabledScreen()};
     document.getElementById("scnAdmWrong").onclick = function() {wrongScreen()};
     document.getElementById("scnAdmOk").onclick = function() {okScreen()};
     document.getElementById("scnMagicLog").onclick = function() {magicLogScreen()};
     document.getElementById("scnDropdown").onclick = function() {dropdownScreen()};
});

function logScreen() {
    setDisplay({
       "session": false,
       "menu": false,
       "conLog": true,
       "conAdm": false,
       "conApp": false,
       "conDisabled": false,
       "conWrong": false,
       "conOk": false,
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
       "conWrong": false,
       "conOk": false,
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
       "conWrong": false,
       "conOk": false,
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
       "conWrong": false,
       "conOk": false,
       "conMagicLog": false
    });
}

function wrongScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "conLog": false,
       "conAdm": false,
       "conApp": false,
       "conDisabled": false,
       "conWrong": true,
       "conOk": false,
       "conMagicLog": false
    });
}

function okScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "conLog": false,
       "conAdm": false,
       "conApp": false,
       "conDisabled": false,
       "conWrong": false,
       "conOk": true,
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
       "conWrong": false,
       "conOk": false,
       "conMagicLog": true
    });
}

function dropdownScreen() {
  setDisplay({
       "session": true,
       "menu": true,
       "conLog": false,
       "conAdm": false,
       "conApp": false,
       "conDisabled": false,
       "conWrong": false,
       "conOk": false,
       "conMagicLog": false
    });
  document.getElementById("myDropdown").classList.toggle("show");
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
