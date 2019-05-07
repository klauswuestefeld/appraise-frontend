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
  console.log('GOOGLE USER TOKEN', googleToken);

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
  if (!user) {
    displaySituation('sit-login');
    return;
  }

  document.getElementById('user-name').innerHTML = user.name;
  document.getElementById('user-picture').src = user.picture;

  startSession(user.googletoken);
}
