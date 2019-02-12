window.addEventListener("load", function() {
     document.getElementById("scenario-login").onclick = function() {loginScreen()};
     document.getElementById("scenario-magic-login").onclick = function() {magicLogScreen()};
     document.getElementById("scenario-logout").onclick = function() {dropdownScreen()};
     document.getElementById("scenario-admin-empty").onclick = function() {emptyScreen()};
     document.getElementById("scenario-admin-filled").onclick = function() {filledScreen()};
     document.getElementById("scenario-admin-error").onclick = function() {errorScreen()};
     document.getElementById("scenario-admin-ok").onclick = function() {okScreen()};
     document.getElementById("scenario-appraisals-empty").onclick = function() {appraisalEmptyScreen()};
     document.getElementById("scenario-appraisals-filled").onclick = function() {appraisalFilledScreen()};
});

function loginScreen() {
    setDisplay({
       "session": false,
       "menu": false,
       "login": true,
       "magic-login": false,
       "admin": false,
       "textarea-empty": false,
       "textarea-filled": false,       
       "error-text-id": false,
       "ok-text-id": false,
       "appraisals": false
    });
}

function magicLogScreen(){
  setDisplay({
       "session": false,
       "menu": false,
       "login": false,
       "magic-login": true,
       "admin": false,
       "textarea-empty": false,
       "textarea-filled": false,       
       "error-text-id": false,
       "ok-text-id": false,
       "appraisals": false
    });
}

function dropdownScreen() {
  setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "admin": false,
       "textarea-empty": false,
       "textarea-filled": false,       
       "error-text-id": false,
       "ok-text-id": false,
       "appraisals": false
    });
  document.getElementById("session-dropdown").classList.toggle("show");
}

function emptyScreen(){
  setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "admin": true,
       "textarea-empty": true,
       "textarea-filled": false,       
       "error-text-id": false,
       "ok-text-id": false,
       "appraisals": false
    });
  document.getElementById('appraisals-tab').classList.remove('selected');
  document.getElementById('admin-tab').classList.add('selected');
}

function filledScreen() {
    setDisplay({
      "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "admin": true,
       "textarea-empty": false,
       "textarea-filled": true,       
       "error-text-id": false,
       "ok-text-id": false,
       "appraisals": false
    });
    document.getElementById('appraisals-tab').classList.remove('selected');
    document.getElementById('admin-tab').classList.add('selected');
}

function errorScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "admin": true,
       "textarea-empty": false,
       "textarea-filled": true,       
       "error-text-id": true,
       "ok-text-id": false,
       "appraisals": false
    });
  document.getElementById('appraisals-tab').classList.remove('selected');
  document.getElementById('admin-tab').classList.add('selected');
}

function okScreen(){
	setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "admin": true,
       "textarea-empty": false,
       "textarea-filled": true,       
       "error-text-id": false,
       "ok-text-id": true,
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
       "admin": false,
       "textarea-empty": false,
       "textarea-filled": false,       
       "error-text-id": false,
       "ok-text-id": false,
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
       "admin": false,
       "textarea-empty": false,
       "textarea-filled": false,       
       "error-text-id": false,
       "ok-text-id": false,
       "appraisals": true
    });
  document.getElementById('appraisals-tab').classList.add('selected');
  document.getElementById('admin-tab').classList.remove('selected');
    var i = 1;
    var all = 4;
    var myLevel = document.getElementById('id-level');  
    for (i = 1; i <= all; i++) {
      var levelClone   = myLevel.cloneNode(true);
      document.getElementById("appraisals").appendChild(levelClone); 
    }
    var newLevel = document.getElementById('id-new-level');  
    var newClone   = newLevel.cloneNode(true);
    document.getElementById("appraisals").appendChild(newClone);  
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


