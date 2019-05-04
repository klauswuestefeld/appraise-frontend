'use strict';

var onAuthUserChanged;

function highLevelUser(gUser) {
  const profile = gUser.getBasicProfile();
  return {
    name:         profile.getName(),
    email:        profile.getEmail(),
    picture:      profile.getImageUrl(),
    googletoken:  gUser.getAuthResponse().id_token
  };
}

function onGoogleUserChanged(gUser) {
  console.log('GOOGLE USER', gUser);
  console.log('IS SIGNED IN:', gUser.isSignedIn());

  onAuthUserChanged(gUser.isSignedIn()
    ? highLevelUser(gUser)
    : null);
}

function getAuth() {
  return gapi.auth2.getAuthInstance();
}

function authFailure(error) {
  if (error && error.error == 'popup_closed_by_user')
    return;
  console.log('ERROR', error);
  alert('Google Authentication is not working at the moment. Please try again in a few minutes.');
}

function loginClicked() { getAuth().signIn().catch(authFailure); }
function logoutClicked() {
  getAuth().signOut().then(function () {
    location.reload(); // Removes any remaining session info.
  });
}


function initAuthClient(clientId, onUserChanged) {
  try {
    gapi.auth2.init({ client_id: clientId }).then(function onInit() {
      onAuthUserChanged = onUserChanged;
      getAuth().currentUser.listen(onGoogleUserChanged);
      onGoogleUserChanged(getAuth().currentUser.get());
    }, authFailure);
  } catch (error) {
    if (error.message.includes('cookiePolicy'))
      alert('To use Google Auth you must serve the page using http(s), not file://');
    else
      authFailure(error);
  }
}

function initAuth(clientId, onUserChanged) {
  gapi.load('auth2', {
    callback: function() { initAuthClient(clientId, onUserChanged) },
    onerror: authFailure,
    timeout: 5000,
    ontimeout: authFailure
  });
};
