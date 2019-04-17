"use strict";

function getUserProfile(token) {
  console.log('GET USER PROFILE');
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         console.log("USER PROFILE:", xhttp.responseText);
      }
  };
  xhttp.open("GET", "http://api.appraise.live:8080/auth-google?google-id-token=" + token, true);
  xhttp.send();
}



//    function backendAuth(token) {
//        var req = new XMLHttpRequest();
//        req.open("GET", 'auth-google?google-id-token=' + token);
//        req.responseType = "json";
//        req.timeout = 5000;
//        req.onload = function () {
//            if (req.status === 200) console.log(req.response);
//            else req.onerror();
//        };
//        req.onerror = req.ontimeout = function () {
//           console.log('Error', req.status, req.statusText);
//        };
//        req.send();
//    }


function getUserProfileOnSignIn(isSignedIn) {
  console.log("IS SIGNED IN:", isSignedIn);
  if (!isSignedIn)
   return;

  var token = Percy.auth2.currentUser.get().getAuthResponse().id_token;
  console.log("TOKEN", token);
  getUserProfile(token);
}

function onUserChanged(user) {
  console.log(user);
}

function loginClicked()  { Percy.auth2.signIn(); }
function logoutClicked() { Percy.auth2.signOut(); }

Percy.initAuth = function() {

    gapi.load('auth2', function() {
        try {
            Percy.auth2 = gapi.auth2.init({
                client_id: '902472309288-h34e3l0vo9e3bkr4dc29f4bco99q0t9s.apps.googleusercontent.com' //Appraise
                //client_id: '696992508397-9pna2ebcfkt3olr2hukd9q95v21t1iud.apps.googleusercontent.com' //Percival
            });

            Percy.auth2.then(function onInit() {
              document.getElementById('logout').onclick = logoutClicked;
              document.getElementById('login-button').onclick = loginClicked;
              Percy.auth2.isSignedIn.listen(getUserProfileOnSignIn);
              Percy.auth2.currentUser.listen(onUserChanged);

            });
        } catch (err) {
            console.log(err.message);
            if (err.message.includes("cookiePolicy"))
                console.log("Serve using http server to avoid this error.");
        }

    });
};
