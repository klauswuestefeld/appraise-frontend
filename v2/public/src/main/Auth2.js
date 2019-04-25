'use strict';

function fetchAppraisals(sessionToken) {
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.appraise.live:8080/api/appraisals', true); //TODO: Make relative.
  req.setRequestHeader('auth', sessionToken);
  req.responseType = 'json';
  req.timeout = 5000;
  req.onerror = req.ontimeout = function () {
    console.log('Error on fetching appraisals', req.status, req.statusText);
  };
  req.onload = function () {
    if (req.status === 200) {
      console.log('APPRAISALS:', req.response);
      showAppraisals(req.response);
    } else req.onerror();
  };
  req.send();
}

function startSession(googleToken) {
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.appraise.live:8080/auth-google?google-id-token=' + googleToken, true); //TODO: Make relative.
  req.responseType = 'json';
  req.timeout = 5000;
  req.onerror = req.ontimeout = function () {
    console.log('Error on backend auth', req.status, req.statusText);
  };
  req.onload = function () {
    if (req.status === 200) {
      console.log('USER PROFILE:', req.response);
      fetchAppraisals(req.response.token);
    } else req.onerror();
  };
  req.send();
}

function onUserChanged(user) {
  console.log('USER',user);

  var isSignedIn = user.isSignedIn();
  console.log('IS SIGNED IN:', isSignedIn); 
  if (!isSignedIn)
   return;

  var profile = user.getBasicProfile();
  document.getElementById('user-name').innerHTML = profile.getName();
  document.getElementById('user-picture').src = profile.getImageUrl();

  var googleToken = user.getAuthResponse().id_token;
  console.log('GOOGLE AUTH TOKEN', googleToken);
  startSession(googleToken);
}

function loginClicked()  { console.log('SIGN IN'); Percy.auth2.signIn(); }
function logoutClicked() { console.log('SIGN OUT'); Percy.auth2.signOut(); loginScreen(); }

Percy.initAuth = function() {

  console.log('GOOGLE API LOAD');

  gapi.load('auth2', { callback: function() {
      try {
          Percy.auth2 = gapi.auth2.init({
              client_id: '902472309288-h34e3l0vo9e3bkr4dc29f4bco99q0t9s.apps.googleusercontent.com' //Appraise
              //client_id: '696992508397-9pna2ebcfkt3olr2hukd9q95v21t1iud.apps.googleusercontent.com' //Percival
          });

          Percy.auth2.then(function onInit() {
            document.getElementById('logout').onclick = logoutClicked;
            document.getElementById('login-button').onclick = loginClicked;
            Percy.auth2.currentUser.listen(onUserChanged);
            onUserChanged(Percy.auth2.currentUser.get());
          });
      } catch (err) {
          console.log(err.message);
          if (err.message.includes('cookiePolicy'))
              console.log('Serve using http server to avoid this error.');
      }

  }, onerror: function() {
    console.log('Error on Google API');
  }, timeout: 5000
  , ontimeout: function() {
    console.log('Timeout on Google API');
  }});
};

// This sample assumes a client object has been created.
// To learn more about creating a client, check out the starter:
//  https://developers.google.com/+/quickstart/javascript
var request = gapi.client.plus.people.get({
  'userId' : 'me'
});

request.execute(function(resp) {
  console.log('ID: ' + resp.id);
  console.log('Display Name: ' + resp.displayName);
  console.log('Image URL: ' + resp.image.url);
  console.log('Profile URL: ' + resp.url);
    var profile = user.getBasicProfile();
  document.getElementById('user-name').innerHTML = profile.getName();
  document.getElementById('user-picture').src = profile.getImageUrl();
});