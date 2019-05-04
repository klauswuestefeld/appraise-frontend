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
  if (!isSignedIn) {
    displaySituation('sit-login');
    return;
  }

  displaySituation('sit-appraisals');

  var profile = user.getBasicProfile();
  document.getElementById('user-name').innerHTML = profile.getName();
  document.getElementById('user-picture').src = profile.getImageUrl();

  var googleToken = user.getAuthResponse().id_token;
  console.log('GOOGLE AUTH TOKEN', googleToken);
  startSession(googleToken);
}

function authFailure(error) {
  if (error && error.error == 'popup_closed_by_user')
    return;
  console.log('ERROR', error);
  alert('Google Authentication is not working at the moment. Please try again in a few minutes.');
}

function logoutClicked() { console.log('SIGN OUT'); Percy.auth2.signOut(); }
function loginClicked()  { console.log('SIGN IN' ); Percy.auth2.signIn().catch(authFailure); }

function initAuthClient() {
  try {
      Percy.auth2 = gapi.auth2.init({
          client_id: '902472309288-h34e3l0vo9e3bkr4dc29f4bco99q0t9s.apps.googleusercontent.com' //Appraise
          //client_id: '696992508397-9pna2ebcfkt3olr2hukd9q95v21t1iud.apps.googleusercontent.com' //Percival
      });

      Percy.auth2.then(function onInit() {
        Percy.auth2.currentUser.listen(onUserChanged);
        onUserChanged(Percy.auth2.currentUser.get());
      }, authFailure);
  } catch (error) {
      if (error.message.includes('cookiePolicy'))
        alert('To use Google Auth you must serve the page using http(s), not file://');
      else
        authFailure(error);
  }
}


Percy.initAuth = function() {
  gapi.load('auth2', {
    callback: initAuthClient,
    onerror: authFailure,
    timeout: 5000,
    ontimeout: authFailure
  });
};
