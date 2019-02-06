window.addEventListener("load", function() {
     document.getElementById("scenario-login").onclick = function() {logScreen()};
     document.getElementById("scenario-admin-filled").onclick = function() {admScreen()};
     document.getElementById("scenario-appraisals-vazio").onclick = function() {appScreen()};
     document.getElementById("scenario-admin-vazio").onclick = function() {disabledScreen()};
     document.getElementById("scenario-admin-error").onclick = function() {wrongScreen()};
     document.getElementById("scenario-admin-ok").onclick = function() {okScreen()};
     document.getElementById("scenario-magic-login").onclick = function() {magicLogScreen()};
     document.getElementById("scenario-dropdown").onclick = function() {dropdownScreen()};
});

function logScreen() {
    setDisplay({
       "session": false,
       "menu": false,
       "login": true,
       "conAdm": false,
       "appraisals": false,
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
       "login": false,
       "conAdm": true,
       "appraisals": false,
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
       "login": false,
       "conAdm": false,
       "appraisals":true,
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
       "login": false,
       "conAdm": false,
       "appraisals": false,
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
       "login": false,
       "conAdm": false,
       "appraisals": false,
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
       "login": false,
       "conAdm": false,
       "appraisals": false,
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
       "login": false,
       "conAdm": false,
       "appraisals": false,
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
       "login": false,
       "conAdm": false,
       "appraisals": false,
       "conDisabled": false,
       "conWrong": false,
       "conOk": false,
       "conMagicLog": false
    });
  document.getElementById("session-dropdown").classList.toggle("show");
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
