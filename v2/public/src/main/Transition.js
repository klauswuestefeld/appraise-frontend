"use strict";

window.addEventListener("load", function() {
     displayBody();

     onSituation("login", loginScreen);
     onSituation("magic-login", magicLogScreen);
     onSituation("logout", dropdownScreen);
     onSituation("admin-empty", adminEmptyScreen);
     onSituation("admin-filled", adminFilledScreen);
     onSituation("admin-error", adminErrorScreen);
     onSituation("admin-ok", adminOkScreen);
     onSituation("appraisals-empty", appraisalEmptyScreen);
     onSituation("appraisals-filled", appraisalFilledScreen);
  });


function displayBody() {
    document.getElementsByTagName('body')[0].classList.remove('force-display-none');
}

function onSituation(name, handler) {
    document.getElementById("situation-" + name).onclick = handler;
    if (window.location.hash == ("#situation-" + name)){
      handler();
    }
}

function loginScreen() {
    setDisplay({
       "session": false,
       "menu": false,
       "login": true,
       "magic-login": false,
       "session-dropdown": false,
       "admin": false,
       "error-text": false,
       "ok-text": false,
       "appraisals": false
    });
}


function magicLogScreen(){
  setDisplay({
       "session": false,
       "menu": false,
       "login": false,
       "magic-login": true,
       "session-dropdown": false,
       "admin": false,
       "error-text": false,
       "ok-text": false,
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
       "error-text": false,
       "ok-text": false,
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
       "error-text": false,
       "ok-text": false,
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
       "error-text": false,
       "ok-text": false,
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
       "error-text": true,
       "ok-text": false,
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
       "error-text": false,
       "ok-text": true,
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
       "error-text": false,
       "ok-text": false,
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
       "error-text": false,
       "ok-text": false,
       "appraisals": true
    });
  document.getElementById('appraisals-tab').classList.add('selected');
  document.getElementById('admin-tab').classList.remove('selected');
}

function setDisplay(displaysById){
//TODO force-display-none em todos os filhos da body q nao sejam scenarios nem header.
//TODO   Apagar as linhas acima q se tornarem desnecessarias,

    var id;
    for (id in displaysById) {
        if (displaysById[id]) {
 	        document.getElementById(id).classList.remove('force-display-none');
        } else {
            document.getElementById(id).classList.add('force-display-none');
        }
    }
}

