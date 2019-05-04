'use strict';

function easterEgg(){
  /*This function is being pulled with 'ondblclcick' when clicking on the copyright symbol
  twice. It decreases the chance of someone figure out the easter-egg.*/
  document.getElementById('situations').classList.remove('force-display-none');
}


function registerSituation(name, handler) {
    document.getElementById('situation-' + name).onclick = handler;
    if (window.location.hash == ('#situation-' + name)) {
      handler();
    }
}

function loginScreen() {
  console.log('login');
    setDisplay({
       'session': false,
       'menu': false,
       'login': true,
       'magic-login': false,
       'session-dropdown': false,
       'admin': false,
       'error-text': false,
       'ok-text': false,
       'appraisals': false,
       'certainty': false
    });
    window.location.hash = ('#situation-login');
}


function magicLogScreen(){
  setDisplay({
       'session': false,
       'menu': false,
       'login': false,
       'magic-login': true,
       'session-dropdown': false,
       'admin': false,
       'error-text': false,
       'ok-text': false,
       'appraisals': false,
       'certainty': false
    });
  window.location.hash = ('#situation-magic-login');
}

function dropdownScreen() {
  setDisplay({
       'session': true,
       'menu': true,
       'login': false,
       'magic-login': false,
       'session-dropdown': true,
       'admin': false,
       'error-text': false,
       'ok-text': false,
       'appraisals': false,
       'certainty': false
    });
  window.location.hash = ('#situation-logout');
}

function adminEmptyScreen(){
  setDisplay({
       'session': true,
       'menu': true,
       'login': false,
       'magic-login': false,
       'session-dropdown': false,
       'admin': true,
       'error-text': false,
       'ok-text': false,
       'appraisals': false,
       'certainty': false
    });
  document.getElementById('appraisals-tab').classList.remove('selected');
  document.getElementById('admin-tab').classList.add('selected');
  document.getElementById('textarea').value = '';
  window.location.hash = ('#situation-admin-empty');
}

function adminFilledScreen() {
  setDisplay({
    'session': true,
    'menu': true,
    'login': false,
    'magic-login': false,
    'session-dropdown': false,
    'admin': true,
    'error-text': false,
    'ok-text': false,
    'appraisals': false,
    'certainty': false
  });
  document.getElementById('appraisals-tab').classList.remove('selected');
  document.getElementById('admin-tab').classList.add('selected');
  adminContent();
  window.location.hash = ('#situation-admin-filled');
}

function adminErrorScreen(){
	setDisplay({
       'session': true,
       'menu': true,
       'login': false,
       'magic-login': false,
       'session-dropdown': false,
       'admin': true,
       'error-text': true,
       'ok-text': false,
       'appraisals': false,
       'certainty': false
    });
  document.getElementById('appraisals-tab').classList.remove('selected');
  document.getElementById('admin-tab').classList.add('selected');
  window.location.hash = ('#situation-admin-error');
}

function adminOkScreen(){
	setDisplay({
       'session': true,
       'menu': true,
       'login': false,
       'magic-login': false,
       'session-dropdown': false,
       'admin': true,
       'error-text': false,
       'ok-text': true,
       'appraisals': false,
       'certainty': false
    });
  document.getElementById('appraisals-tab').classList.remove('selected');
  document.getElementById('admin-tab').classList.add('selected');
  window.location.hash = ('#situation-admin-ok');
}

function appraiseEmptyScreen(){
  setDisplay({
       'session': true,
       'menu': true,
       'login': false,
       'magic-login': false,
       'session-dropdown': false,
       'admin': false,
       'error-text': false,
       'ok-text': false,
       'appraisals': true,
       'certainty': false
    });
  window.location.hash = ('#situation-appraise-empty');
  document.getElementById('appraisals-tab').classList.add('selected');
  document.getElementById('admin-tab').classList.remove('selected');
  document.getElementById('id-card').classList.add('force-display-none');
  hideGhostsCards();
  scrollToLevel();
}

function appraiseFilledScreen(){
  setDisplay({
       'session': true,
       'menu': true,
       'login': false,
       'magic-login': false,
       'session-dropdown': false,
       'admin': false,
       'error-text': false,
       'ok-text': false,
       'appraisals': true,
       'certainty': false
    });
  window.location.hash = ('#situation-appraise-filled');
  document.getElementById('appraisals-tab').classList.add('selected');
  document.getElementById('admin-tab').classList.remove('selected');
  showGhostsCards();
  scrollToLevel();
}

function certaintyScreen(){
  setDisplay({
       'session': true,
       'menu': true,
       'login': false,
       'magic-login': false,
       'session-dropdown': false,
       'admin': false,
       'error-text': false,
       'ok-text': false,
       'appraisals': true,
       'certainty': true
    });
  document.getElementById('appraisals-tab').classList.add('selected');
  document.getElementById('admin-tab').classList.remove('selected');
  window.location.hash = ('#situation-certainty');
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






