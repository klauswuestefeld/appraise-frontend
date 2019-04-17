"use strict";

function backendAuth(token) {
  console.log('GET USER PROFILE');
  var req = new XMLHttpRequest();
  req.open("GET", "http://api.appraise.live:8080/auth-google?google-id-token=" + token, true); //TODO: Make relative.
  req.responseType = "json";
  req.timeout = 5000;
  req.onerror = req.ontimeout = function () {
    console.log('Error on backend auth', req.status, req.statusText);
  };
  req.onload = function () {
    if (req.status === 200) console.log("USER PROFILE:", req.response);
    else req.onerror();
  };
  req.send();
}

function getUserProfileOnSignIn(isSignedIn) {
  console.log("IS SIGNED IN:", isSignedIn);
  if (!isSignedIn)
   return;

  var token = Percy.auth2.currentUser.get().getAuthResponse().id_token;
  console.log("TOKEN", token);
  backendAuth(token);
}

function onUserChanged(user) {
  var profile = user.getBasicProfile();
  document.getElementById('user-name').innerHTML = profile.getName();
  document.getElementById('user-picture').src = profile.getImageUrl();
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
