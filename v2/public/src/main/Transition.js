"use strict";

window.addEventListener("load", function() {
  document.getElementById("easter-egg").ondblclick = function() {easterEgg()};

  displayBody();

  if (window.location.hash != ("#situation-certainty")){
    document.getElementById("certainty").classList.add('force-display-none');
  } else {
    document.getElementById("certainty").classList.remove('force-display-none');
  }
  registerSituation("login", loginScreen);
  registerSituation("magic-login", magicLogScreen);
  registerSituation("logout", dropdownScreen);
  registerSituation("admin-empty", adminEmptyScreen);
  registerSituation("admin-filled", adminFilledScreen);
  registerSituation("admin-error", adminErrorScreen);
  registerSituation("admin-ok", adminOkScreen);
  registerSituation("appraisals-empty", appraisalsEmptyScreen);
  registerSituation("appraisals-filled", appraisalsFilledScreen);
  registerSituation("certainty", certaintyScreen);
});

function easterEgg(){
  /*This function is being pulled with "ondblclcick" when clicking on the copyright symbol
  twice. It decreases the chance of someone figure out the easter-egg.*/
  document.getElementById("situations").classList.remove('force-display-none');
}

function displayBody() {
    document.getElementsByTagName('body')[0].classList.remove('force-display-none');
}

function registerSituation(name, handler) {
  console.log(name);
    document.getElementById("situation-" + name).onclick = handler;
    if (window.location.hash == ("#situation-" + name)) {
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
       "appraisals": false,
       "certainty": false
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
       "appraisals": false,
       "certainty": false
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
       "appraisals": false,
       "certainty": false
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
       "appraisals": false,
       "certainty": false
    });
  document.getElementById('appraisals-tab').classList.remove('selected');
  document.getElementById('admin-tab').classList.add('selected');
  document.getElementById('textarea').value = '';
}

function adminFilledScreen() {
  console.log("hh");
  setDisplay({
    "session": true,
    "menu": true,
    "login": false,
    "magic-login": false,
    "session-dropdown": false,
    "admin": true,
    "error-text": false,
    "ok-text": false,
    "appraisals": false,
    "certainty": false
  });
  document.getElementById('appraisals-tab').classList.remove('selected');
  document.getElementById('admin-tab').classList.add('selected');

  adminContent();
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
       "appraisals": false,
       "certainty": false
    });
  document.getElementById('appraisals-tab').classList.remove('selected');
  document.getElementById('admin-tab').classList.add('selected');
}

function adminOkScreen(){
  console.log("mn");
	setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "session-dropdown": false,
       "admin": true,
       "error-text": false,
       "ok-text": true,
       "appraisals": false,
       "certainty": false
    });
  document.getElementById('appraisals-tab').classList.remove('selected');
  document.getElementById('admin-tab').classList.add('selected');
}

function appraisalsEmptyScreen(){
  console.log("gg");
  setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "session-dropdown": false,
       "admin": false,
       "error-text": false,
       "ok-text": false,
       "appraisals": true,
       "certainty": false
    });
  console.log("gg");
  document.getElementById('appraisals-tab').classList.add('selected');
  document.getElementById('admin-tab').classList.remove('selected');
  console.log("gg");
}

function appraisalsFilledScreen(){
  console.log("gg");
  setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "session-dropdown": false,
       "admin": false,
       "error-text": false,
       "ok-text": false,
       "appraisals": true,
       "certainty": false
    });
  console.log("gg");
  document.getElementById('appraisals-tab').classList.add('selected');
  document.getElementById('admin-tab').classList.remove('selected');
  console.log("gg");
}

function certaintyScreen(){
  console.log("ff");
  setDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "session-dropdown": false,
       "admin": false,
       "error-text": false,
       "ok-text": false,
       "appraisals": true,
       "certainty": true
    });
  document.getElementById('appraisals-tab').classList.add('selected');
  document.getElementById('admin-tab').classList.remove('selected');
}

function setDisplay(displaysById){
    var id;
    for (id in displaysById) {
        if (displaysById[id]) {
 	        document.getElementById(id).classList.remove('force-display-none');
        } else {
            document.getElementById(id).classList.add('force-display-none');
        }
    }
}


function adminContent() {
  document.getElementById('textarea').value =
    'eriksen@gmail.com Eriksen\n' +
    'josedasilva@blamail.com José Pereira da Costa e Silva\n' +
    'josedasilva2@blamail.com José Pereira da Costa e Silva2\n' +
    'josedasilva3@blamail.com José Pereira da Costa e Silva3\n' +
    'josedasilva4@blamail.com José Pereira da Costa e Silva4\n' +
    'josedasilva5@blamail.com José Pereira da Costa e Silva5\n' +
    'josedasilva6@blamail.com José Pereira da Costa e Silva6\n' +
    'josedasilva7@blamail.com José Pereira da Costa e Silva7\n' +
    'josedasilva8@blamail.com José Pereira da Costa e Silva8\n' +
    'josedasilva9@blamail.com José Pereira da Costa e Silva9\n' +
    'josedasilva10@blamail.com José Pereira da Costa e Silva10\n' +
    'josedasilva11@blamail.com José Pereira da Costa e Silva11\n' +
    'josedasilva12@blamail.com José Pereira da Costa e Silva12\n' +
    'josedasilva13@blamail.com José Pereira da Costa e Silva13\n' +
    'josedasilva14@blamail.com José Pereira da Costa e Silva14\n' +
    'josedasilva15@blamail.com José Pereira da Costa e Silva15\n';
}






