'use strict';

const appraiseApiUrl = 'http://api.appraise.live:8080/api/';
const appraiseAuthUrl = 'http://api.appraise.live:8080/auth-google?google-id-token=';

var backendToken;

function backendRequest(requestType, url, postContent, onJsonResponse) {
  var req = new XMLHttpRequest();
  req.open(requestType, url, true);
  if (backendToken) req.setRequestHeader('auth', backendToken);
  req.setRequestHeader('Content-Type', 'application/json');
  req.responseType = 'json';
  req.timeout = 5000;
  req.onerror = req.ontimeout = function () {
    console.log('Error on URL: ' + url, req.status, req.statusText);
    alert('Something went wrong. Check your internet connection and retry in a few minutes.');
  };
  req.onload = function () {
    if (req.status === 200) {
      console.log(url, req.response);
      onJsonResponse(req.response);
    } else req.onerror();
  };
  req.send(postContent);
}

function backendGet(endpoint, onJsonResponse) {
  console.log('GET ', endpoint);
  var url = appraiseApiUrl + endpoint;
  backendRequest('GET', url, undefined, onJsonResponse);
}

function backendPost(endpoint, postContent, onJsonResponse) {
  console.log('POST ', endpoint);
  var url = appraiseApiUrl + endpoint;
  backendRequest('POST', url, postContent, onJsonResponse);
}

function openBackendSession(googleToken, onJsonResponse) {
  console.log('AUTH ', googleToken);
  var url = appraiseAuthUrl + googleToken;
  backendRequest('GET', url, undefined, onJsonResponse);
}

function onUserChanged(user) {
  if (!user) {
    backendToken = null;
    displaySituation('sit-login');
    return;
  }

  openBackendSession(user.googletoken, function (response) {
    backendToken = response.token;
    displaySituation('sit-appraisals');
    document.getElementById('user-name').innerHTML = user.name;
    document.getElementById('user-picture').src = user.picture;
    fetchAppraisals();
  });
}