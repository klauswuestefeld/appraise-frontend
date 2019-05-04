'use strict';

function initLauncher() {
  console.log('INIT LAUNCHER');
  if (!Situations.isActive())
    Percy.initAuth();
}
