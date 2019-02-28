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
    if (window.location.hash == "#anchor-login"){
      loginScreen();
    }
    if (window.location.hash == "#anchor-magic-login"){
      magicLogScreen();
    }
    if (window.location.hash == "#anchor-logout"){
      dropdownScreen();
    }
    if (window.location.hash == "#anchor-admin-empty"){
      adminEmptyScreen();
    }
    if (window.location.hash == "#anchor-admin-filled"){
      adminFilledcreen();
    }
    if (window.location.hash == "#anchor-admin-error"){
      adminErrorScreen();
    }
    if (window.location.hash == "#anchor-admin-ok"){
      adminOkScreen();
    }
    if (window.location.hash == "#anchor-appraisals-empty"){
      appraisalsEmptyScreen();
    }
    if (window.location.hash == "#anchor-appraisals-filled"){
      appraisalsFilledScreen();
    }
  });



/*function myFunction() {
    location.hash = "login";
    var menuId=localStorage.getItem("session");
    if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("login", menuId);
}
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
        hash;

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null)
            return url.replace(re, '$1' + key + "=" + value + '$2$3');
        else {
            hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null) 
                url += '#' + hash[1];
            return url;
        }
    }
    else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?';
            hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null) 
                url += '#' + hash[1];
            return url;
        }
        else
            return url;
    }

*/

function loginScreen() {
    setDisplay({
       "session": false,
       "menu": false,
       "login": true,
       "magic-login": false,
       "session-dropdown": false,
       "admin": false,
       "textarea": false,
       "error-text": false,
       "ok-text": false,
       "id-extra1" : false,
       "id-extra2" : false,
       "id-extra-1" : false,
       "id-extra-2" : false,
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
       "textarea": false,
       "error-text": false,
       "ok-text": false,
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
       "error-text": false,
       "ok-text": false,
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
       "error-text": false,
       "ok-text": false,
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
       "error-text": false,
       "ok-text": false,
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
       "error-text": true,
       "ok-text": false,
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
       "error-text": false,
       "ok-text": true,
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
       "error-text": false,
       "ok-text": false,
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
  filledsetDisplay({
       "session": true,
       "menu": true,
       "login": false,
       "magic-login": false,
       "session-dropdown": false,
       "admin": false,
       "textarea": false,
       "error-text": false,
       "ok-text": false,
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




