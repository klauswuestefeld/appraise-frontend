window.addEventListener("load", function() {
     document.getElementById("scenario-login").onclick = function() {logScreen()};
     document.getElementById("scenario-dropdown").onclick = function() {dropdownScreen()};
     document.getElementById("scenario-magic-login").onclick = function() {magicLogScreen()};
     document.getElementById("scenario-admin-filled").onclick = function() {admScreen()};
     document.getElementById("scenario-appraisals-empty").onclick = function() {appScreen()};
     document.getElementById("scenario-admin-empty").onclick = function() {disabledScreen()};
     document.getElementById("scenario-admin-error").onclick = function() {wrongScreen()};
     document.getElementById("scenario-admin-ok").onclick = function() {okScreen()};
});

function logScreen() {
    setDisplay({
       "session": false,
       "menu": false,
       "login": true,
       "admin-filled": false,
       "appraisals": false,
       "admin-empty": false,
       "admin-error": false,
       "admin-ok": false,
       "magic-login": false
    });
}

function admScreen() {
    setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "admin-filled": true,
       "appraisals": false,
       "admin-empty": false,
       "admin-error": false,
       "admin-ok": false,
       "magic-login": false
    });
}


function appScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "admin-filled": false,
       "appraisals":true,
       "admin-empty": false,
       "admin-error": false,
       "admin-ok": false,
       "magic-login": false
    });
}

function disabledScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "admin-filled": false,
       "appraisals": false,
       "admin-empty": true,
       "admin-error": false,
       "admin-ok": false,
       "magic-login": false
    });
}

function wrongScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "admin-filled": false,
       "appraisals": false,
       "admin-empty": false,
       "admin-error": true,
       "admin-ok": false,
       "magic-login": false
    });
}

function okScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "admin-filled": false,
       "appraisals": false,
       "admin-empty": false,
       "admin-error": false,
       "admin-ok": true,
       "magic-login": false
    });
}

function magicLogScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "admin-filled": false,
       "appraisals": false,
       "admin-empty": false,
       "admin-error": false,
       "admin-ok": false,
       "magic-login": true
    });
}

function dropdownScreen() {
  setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "admin-filled": false,
       "appraisals": false,
       "admin-empty": false,
       "admin-error": false,
       "admin-ok": false,
       "magic-login": false
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
