'use strict';

function onUserChanged(user) {
  if (!user) {
    closeBackendSession();
    displaySituation('sit-login');
    return;
  }

  openBackendSession(user.googletoken, function () {
    displaySituation('sit-appraisals');
    document.getElementById('user-name').innerHTML = user.name;
    document.getElementById('user-picture').src = user.picture;
    fetchAppraisals();
  });
}
