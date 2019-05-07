'use strict';

var backendToken;

function backendGet(endpoint, onJsonResponse) {
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.appraise.live:8080/api/' + endpoint, true);
  req.setRequestHeader('auth', backendToken);
  req.responseType = 'json';
  req.timeout = 5000;
  req.onerror = req.ontimeout = function () {
    console.log('Error on endpoint ' + endpoint, req.status, req.statusText);
    alert('Something went wrong. Check your internet connection and retry in a few minutes.');
  };
  req.onload = function () {
    if (req.status === 200) {
      console.log(endpoint, req.response);
      onJsonResponse(req.response);
    } else req.onerror();
  };
  req.send();
}

function backendPost(endpoint, postContent) {
  var req = new XMLHttpRequest();
  req.open('POST', 'http://api.appraise.live:8080/api/' + endpoint, true);
  req.setRequestHeader('auth', backendToken);
  req.setRequestHeader("Content-Type", "application/json");
  req.timeout = 5000;
  req.onerror = req.ontimeout = function () {
    console.log('Error on endpoint ' + endpoint, req.status, req.statusText);
    alert('Something went wrong. Check your internet connection and retry in a few minutes.');
  };
  req.onload = function () {
    if (req.status === 200) {
      console.log(endpoint, req.response);
    } else req.onerror();
  };
  req.send(postContent);
}

function openBackendSession(googleToken, onSuccess) {
  console.log('GOOGLE USER TOKEN', googleToken);

  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.appraise.live:8080/auth-google?google-id-token=' + googleToken, true);
  req.responseType = 'json';
  req.timeout = 5000;
  req.onerror = req.ontimeout = function () {
    console.log('Error on backend auth', req.status, req.statusText);
    alert('Something went wrong. Check your internet connection and retry in a few minutes.');
  };
  req.onload = function () {
    if (req.status === 200) {
      backendToken = req.response.token;
      onSuccess();
    } else req.onerror();
  };
  req.send();
}

function closeBackendSession() {
  backendToken = null;
}