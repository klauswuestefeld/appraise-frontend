window.addEventListener("load", function() {
     document.getElementById("scenario-login").onclick = function() {loginScreen()};
     document.getElementById("scenario-magic-login").onclick = function() {magicLogScreen()};
     document.getElementById("scenario-logout").onclick = function() {dropdownScreen()};
     document.getElementById("scenario-admin-empty").onclick = function() {adminEmptyScreen()};
     document.getElementById("scenario-admin-filled").onclick = function() {adminFilledScreen()};
     document.getElementById("scenario-admin-error").onclick = function() {adminErrorScreen()};
     document.getElementById("scenario-admin-ok").onclick = function() {adminOkScreen()};
     document.getElementById("scenario-appraisals-empty").onclick = function() {appraisalEmptyScreen()};
     document.getElementById("scenario-appraisals-filled").onclick = function() {appraisalFilledScreen()};
});

function loginScreen() {
    setDisplay({
       "session": false,
       "menu": false,
       "login": true,
       "magic-login": false,
       "session-dropdown": false,
       "admin": false,
       "textarea": false,
       "error-text-id": false,
       "ok-text-id": false,
       "id-extra1" : false,
       "id-extra2" : false,
       "id-extra-1" : false,
       "id-extra-2" : false,
       "appraisals": false
    });
}

//document.getElementById("session-dropdown").classList.toggle("show");

function magicLogScreen(){
  setDisplay({
       "session": false,
       "menu": false,
       "login": false,
       "magic-login": true,
       "session-dropdown": false,
       "admin": false,
       "textarea": false,
       "error-text-id": false,
       "ok-text-id": false,
       "id-extra1" : false,
       "id-extra2" : false,
       "id-extra-1" : false,
       "id-extra-2" : false,
       "appraisals": false
    });
}

function dropdownScreen() {
  setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "session-dropdown": true,
       "admin": false,
       "textarea": false,
       "error-text-id": false,
       "ok-text-id": false,
       "id-extra1" : false,
       "id-extra2" : false,
       "id-extra-1" : false,
       "id-extra-2" : false,
       "appraisals": false
    });
}

function adminEmptyScreen(){
  setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "session-dropdown": false,
       "admin": true,
       "textarea": true,
       "error-text-id": false,
       "ok-text-id": false,
       "id-extra1" : false,
       "id-extra2" : false,
       "id-extra-1" : false,
       "id-extra-2" : false,
       "appraisals": false
    });
  document.getElementById('appraisals-tab').classList.remove('selected');
  document.getElementById('admin-tab').classList.add('selected');
}

function adminFilledScreen() {
    setDisplay({
      "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "session-dropdown": false,
       "admin": true,
       "textarea": true,       
       "error-text-id": false,
       "ok-text-id": false,
       "id-extra1" : false,
       "id-extra2" : false,
       "id-extra-1" : false,
       "id-extra-2" : false,
       "appraisals": false
    });
    document.getElementById('appraisals-tab').classList.remove('selected');
    document.getElementById('admin-tab').classList.add('selected');
}

function adminErrorScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "session-dropdown": false,
       "admin": true,
       "textarea": true,       
       "error-text-id": true,
       "ok-text-id": false,
       "id-extra1" : false,
       "id-extra2" : false,
       "id-extra-1" : false,
       "id-extra-2" : false,
       "appraisals": false
    });
  document.getElementById('appraisals-tab').classList.remove('selected');
  document.getElementById('admin-tab').classList.add('selected');
}

function adminOkScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "session-dropdown": false,
       "admin": true,
       "textarea": true,       
       "error-text-id": false,
       "ok-text-id": true,
       "id-extra1" : false,
       "id-extra2" : false,
       "id-extra-1" : false,
       "id-extra-2" : false,
       "appraisals": false
    });
  document.getElementById('appraisals-tab').classList.remove('selected');
  document.getElementById('admin-tab').classList.add('selected');
}

function appraisalEmptyScreen(){
  setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "session-dropdown": false,
       "admin": false,
       "textarea": false,       
       "error-text-id": false,
       "ok-text-id": false,
       "id-extra1" : false,
       "id-extra2" : false,
       "id-extra-1" : false,
       "id-extra-2" : false,
       "appraisals": true
    });
  document.getElementById('appraisals-tab').classList.add('selected');
  document.getElementById('admin-tab').classList.remove('selected'); 
}

function appraisalFilledScreen(){
  setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "session-dropdown": false,
       "admin": false,
       "textarea": false,
       "error-text-id": false,
       "ok-text-id": false,
       "id-extra1" : true,
       "id-extra2" : true,
       "id-extra-1" : true,
       "id-extra-2" : true,
       "appraisals": true
    });
  document.getElementById('appraisals-tab').classList.add('selected');
  document.getElementById('admin-tab').classList.remove('selected');
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


